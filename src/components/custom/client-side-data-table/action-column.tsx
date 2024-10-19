import { ColumnDef } from "@tanstack/react-table";
import { cn, DataTableColumnHeader } from "@/index";
import ActionCell from "./action-cell";
import { ReactNode } from "react";

const justifyIcons = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export type ActionColumnProps<T> = {
  header?: string;
  onEditClick?: (value: T) => void;
  onDeleteClick?: (value: T) => void;
  otherActions?: {
    icon: ReactNode;
    onClick: (value: T) => void;
    toolTip: string;
  }[];
  placement?: "left" | "right" | "center";
};

export function ActionColumn<T>({
  header,
  onEditClick,
  onDeleteClick,
  otherActions,
  placement = "left",
}: ActionColumnProps<T>): ColumnDef<T> {
  const column: ColumnDef<T> = {
    accessorKey: header || "actions",
    header: ({ column }) => (
      <DataTableColumnHeader
        className={cn("flex", justifyIcons[placement])}
        column={column}
        title={header || "Actions"}
      />
    ),
    enableSorting: false,
    cell: ({ row }) => (
      <div className={cn("flex gap-2", justifyIcons[placement])}>
        <ActionCell
          onEditClick={onEditClick}
          onDeleteClick={onDeleteClick}
          otherActions={otherActions}
          value={row.original}
          placement={placement}
        />
      </div>
    ),
  };

  return column;
}
