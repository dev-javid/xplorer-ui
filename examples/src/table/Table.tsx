import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import data from "./data/tasks.json";

export default function TaskPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-2 md:flex">
      <DataTable data={data} columns={columns} />
    </div>
  );
}
