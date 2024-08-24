import { ColumnDef } from "@tanstack/react-table";
import { ClientSideDataTable } from "xplorer-ui";
import { Employee, employees } from "./data";

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
    accessorKey: "salary",
    header: "Salary",
  },
  {
    accessorKey: "hireDate",
    header: "Hire Date",
  },
];
