import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  ReactNode,
} from "react";
import { ConfirmModal } from "@/index";

const SimpleConfirmContext = createContext<{
  showConfirm: (title: string, body: string | ReactNode) => Promise<boolean>;
  hideConfirm: () => void;
}>({
  showConfirm: () => new Promise(() => {}),
  hideConfirm: () => {},
});

export function SimpleConfirmProvider({ children }: { children: ReactNode }) {
  const fn = useRef<(choice: boolean) => void>();
  const [state, setState] = useState<{
    isOpen: boolean;
    title: string;
    body: string | ReactNode;
  }>({ isOpen: false, body: "", title: "" });

  const showConfirm = useCallback(
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

  const hideConfirm = useCallback(() => {
    setState({ isOpen: false, title: "", body: "" });
    fn.current!(false);
  }, [setState]);

  return (
    <SimpleConfirmContext.Provider
      value={{
        showConfirm: showConfirm,
        hideConfirm: hideConfirm,
      }}
    >
      {children}
      <ConfirmModal
        {...state}
        onClose={() => {
          setState({ isOpen: false, title: state.title, body: state.body });
          fn.current!(false);
        }}
        onConfirm={() => fn.current!(true)}
      />
    </SimpleConfirmContext.Provider>
  );
}

export function useSimpleConfirm() {
  return useContext(SimpleConfirmContext);
}
