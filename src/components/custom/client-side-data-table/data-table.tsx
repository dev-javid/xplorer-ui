import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/index";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import { FacetFilterProps } from "./data-table-faceted-filter";
import { DataTableRowActions } from "./data-table-row-actions";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pageSize?: number;
  facetFilters?: FacetFilterProps<TData>[];
  onEdit?: (data: TData) => void;
  onDelete?: (data: TData) => void;
  isDeleteDisabled?: (data: TData) => boolean;
  paging?: boolean;
  search?: boolean;
  columnToggle?: boolean;
  serialNumbers?: boolean;
  otherActions?: {
    action: string;
    onAction: (data: TData) => void;
    hidden?: (data: TData) => boolean;
  }[];
}

export function ClientSideDataTable<TData, TValue>({
  columns,
  data,
  pageSize = 10,
  facetFilters = [],
  onEdit,
  onDelete,
  isDeleteDisabled,
  paging = true,
  search = true,
  columnToggle = true,
  serialNumbers,
  otherActions,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [finalColumns, setFinalColumns] = React.useState(columns);

  if (finalColumns === columns) {
    if (onDelete || onEdit || otherActions) {
      setFinalColumns([
        ...columns,
        {
          id: "actions",
          cell: ({ row }) => (
            <DataTableRowActions
              row={row}
              onDelete={onDelete}
              isDeleteDisabled={isDeleteDisabled}
              onEdit={onEdit}
              otherActions={otherActions}
            />
          ),
        },
      ]);
    }
  }

  const table = useReactTable({
    data,
    columns: finalColumns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar
        table={table}
        data={data}
        facetFilters={facetFilters}
        search={search}
        columnToggle={columnToggle}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {serialNumbers && <TableHead>S No</TableHead>}
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, i) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {serialNumbers && <TableCell>{i + 1}</TableCell>}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={finalColumns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {paging && <DataTablePagination table={table} />}
    </div>
  );
}
