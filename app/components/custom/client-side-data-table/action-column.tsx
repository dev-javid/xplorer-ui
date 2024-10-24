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
  editIconSize?: number;
  onDeleteClick?: (value: T) => void;
  deleteIconSize?: number;
  otherActions?: {
    icon: ReactNode;
    onClick: (value: T) => void;
    toolTip: string;
  }[];
  placement?: "left" | "right" | "center";
};

export function ActionColumn<T>({
  header,
  placement = "left",
  ...rest
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
        <ActionCell value={row.original} {...rest} />
      </div>
    ),
  };

  return column;
}
