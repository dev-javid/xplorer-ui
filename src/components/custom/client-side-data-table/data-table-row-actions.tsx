import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Button } from "@/index";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/index";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit?: (data: TData) => void;
  onDelete?: (data: TData) => void;
  isDeleteDisabled?: (data: TData) => boolean;
  otherActions?: {
    action: string;
    onAction: (data: TData) => void;
    hidden?: (data: TData) => boolean;
  }[];
}

export function DataTableRowActions<TData>({
  row,
  onEdit,
  onDelete,
  isDeleteDisabled,
  otherActions,
}: DataTableRowActionsProps<TData>) {
  return (
    <div className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          {onEdit && (
            <DropdownMenuItem onClick={() => onEdit(row.original)}>
              Edit
            </DropdownMenuItem>
          )}
          {onDelete && (
            <DropdownMenuItem
              onClick={() => onDelete(row.original)}
              disabled={!isDeleteDisabled || isDeleteDisabled(row.original)}
            >
              Delete
            </DropdownMenuItem>
          )}

          {otherActions && (
            <>
              {otherActions?.map(({ action, onAction, hidden }) => {
                const hide = hidden && hidden(row.original);
                return (
                  <>
                    {!hide && (
                      <DropdownMenuItem
                        hidden={hidden && hidden(row.original)}
                        key={action}
                        onClick={() => onAction(row.original)}
                      >
                        {action}
                      </DropdownMenuItem>
                    )}
                  </>
                );
              })}
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
