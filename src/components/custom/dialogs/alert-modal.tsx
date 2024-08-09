import { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  Button,
} from "@/index";

export function AlertModal({
  isOpen,
  onClose,
  body,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  body: string | ReactNode;
  title: string;
}) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="flex-col items-start">
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>{body}</AlertDialogDescription>
        <AlertDialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
