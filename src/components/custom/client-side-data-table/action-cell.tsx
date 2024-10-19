import { TooltipTrigger, TooltipContent, Tooltip } from "@/index";
import { Pencil, Trash2 } from "lucide-react";
import { ActionColumnProps } from ".";

const classNames = "text-gray-500 hover:text-foreground";

const ActionCell = <T,>({
  onEditClick,
  onDeleteClick,
  otherActions,
  value,
}: ActionColumnProps<T> & {
  value: T;
}) => {
  return (
    <>
      {otherActions && (
        <>
          {otherActions.map((action) => (
            <Tooltip>
              <TooltipTrigger>
                <div className={classNames}>
                  <div onClick={() => action.onClick(value)}>{action.icon}</div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{action.toolTip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </>
      )}
      {onEditClick && (
        <Tooltip>
          <TooltipTrigger>
            <Pencil
              className={classNames}
              size={16}
              onClick={() => onEditClick(value)}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      )}
      {onDeleteClick && (
        <Tooltip>
          <TooltipTrigger>
            <Trash2
              className={classNames}
              size={16}
              onClick={() => onDeleteClick(value)}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      )}
    </>
  );
};

export default ActionCell;
