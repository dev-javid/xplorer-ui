import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  ReactNode,
} from "react";
import { AlertModal } from "@/index";

const AlertModalContext = createContext<
  (title: string, body: string | ReactNode) => void
>(() => {});

export function AlertModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
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
    <AlertModalContext.Provider value={confirm}>
      {children}
      <AlertModal
        {...state}
        onClose={() => {
          setState({ isOpen: false, title: state.title, body: state.body });
          fn.current!(false);
        }}
      />
    </AlertModalContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertModalContext);
}
