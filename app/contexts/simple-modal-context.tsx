import {
  createContext,
  useContext,
  useCallback,
  useRef,
  useState,
  ReactNode,
} from "react";
import { SimpleModal } from "@/index";

const ModalContext = createContext<{
  showModal: (title: string, body: string | ReactNode) => void;
  hideModal: () => void;
}>({
  showModal: () => {},
  hideModal: () => {},
});

export function SimpleModalContextProvider({
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

  const showModal = useCallback(
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

  const hideModal = useCallback(() => {
    setState({ isOpen: false, title: "", body: "" });
    fn.current!(false);
  }, [setState]);

  return (
    <ModalContext.Provider
      value={{ showModal: showModal, hideModal: hideModal }}
    >
      {children}
      <SimpleModal
        {...state}
        onClose={() => {
          setState({ isOpen: false, title: state.title, body: state.body });
          fn.current!(false);
        }}
      />
    </ModalContext.Provider>
  );
}

export function useSimpleModal() {
  return useContext(ModalContext);
}
