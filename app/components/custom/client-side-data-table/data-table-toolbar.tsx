import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/index";
import { Input } from "@/index";

import {
  DataTableFacetedFilter,
  FacetFilterProps,
} from "./data-table-faceted-filter";
import _ from "lodash";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  data: TData[];
  facetFilters: FacetFilterProps<TData>[];
  search: boolean;
  columnToggle: boolean;
}

export function DataTableToolbar<TData>({
  table,
  data,
  facetFilters,
  search,
  columnToggle,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {search && (
          <Input
            placeholder="Filter..."
            onChange={(event) => table.setGlobalFilter(event.target.value)}
            className="h-8 w-[150px] lg:w-[250px]"
          />
        )}
        {facetFilters.map((f) => (
          <>
            {table.getColumn(f.accessor.toString()) && (
              <DataTableFacetedFilter
                column={table.getColumn(f.accessor.toString())}
                title={f.title}
                options={_.uniqBy(data, f.accessor).map((d) => ({
                  label: f.getFacetLabel
                    ? f.getFacetLabel(d)
                    : (d[f.accessor] as string),
                  value: d[f.accessor] as string,
                }))}
              />
            )}
          </>
        ))}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      {columnToggle && <DataTableViewOptions table={table} />}
    </div>
  );
}
