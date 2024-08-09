import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  ReactNode,
} from "react";
import { ConfirmModal } from "@/index";

const ConfirmModalContext = createContext<
  (title: string, body: string | ReactNode) => Promise<boolean>
>(() => Promise.resolve(true));

export function ConfirmModalProvider({ children }: { children: ReactNode }) {
  const fn = useRef<(choice: boolean) => void>();
  const [state, setState] = useState<{
    isOpen: boolean;
    title: string;
    body: string | ReactNode;
  }>({ isOpen: false, body: "", title: "" });

  const confirm = useCallback(
    (title: string, body: string | ReactNode) => {
      return new Promise<boolean>((resolve) => {
        setState({ title, body, isOpen: true });
        fn.current = (choice) => {
          resolve(choice);
          setState({ isOpen: false, title: title, body: body });
        };
      });
    },
    [setState]
  );

  return (
    <ConfirmModalContext.Provider value={confirm}>
      {children}
      <ConfirmModal
        {...state}
        onClose={() => {
          setState({ isOpen: false, title: state.title, body: state.body });
          fn.current!(false);
        }}
        onConfirm={() => fn.current!(true)}
      />
    </ConfirmModalContext.Provider>
  );
}

export function useConfirm() {
  return useContext(ConfirmModalContext);
}
