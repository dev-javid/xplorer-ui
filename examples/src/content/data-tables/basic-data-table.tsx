import { ColumnDef } from "@tanstack/react-table";
import { ClientSideDataTable, ActionColumn } from "xplorer-ui";
import { Employee, employees } from "./data";
import { Calendar, Clock10, Eye } from "lucide-react";

const BasicDataTable = ({
  hidePaging,
  showSerialNumbers,
  disableSearch,
  hideColumnToggle,
}: {
  hidePaging?: boolean;
  showSerialNumbers?: boolean;
  disableSearch?: boolean;
  hideColumnToggle?: boolean;
}) => {
  return (
    <ClientSideDataTable
      columns={columns}
      data={employees}
      paging={!hidePaging}
      serialNumbers={showSerialNumbers}
      search={!disableSearch}
      columnToggle={!hideColumnToggle}
    />
  );
};

export default BasicDataTable;

const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    ...ActionColumn({
      header: "Attendance",
      otherActions: [
        {
          icon: <Calendar size={16} />,
          toolTip: "Attendance",
          onClick: () => alert("Attendance clicked"),
        },
      ],
      placement: "right",
    }),
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },
  {
    accessorKey: "hireDate",
    header: "Hire Date",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Clock10 size={16} />
          {row.original.hireDate.toLocaleDateString()}
        </div>
      );
    },
  },
  {
    ...ActionColumn({
      onEditClick: () => alert("Edit clicked"),
      onDeleteClick: () => alert("Delete clicked"),
      otherActions: [
        {
          icon: <Eye size={16} />,
          toolTip: "View",
          onClick: () => alert("View clicked"),
        },
      ],
    }),
  },
];
