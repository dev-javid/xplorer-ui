import { Tabs, TabsList, TabsTrigger, TabsContent } from "xplorer-ui";
import BasicDataTable from "./basic-data-table";

const DataTables = () => {
  return (
    <div>
      <Tabs defaultValue="basic" className="w-[400px]">
        <TabsList className="w-full grid-cols-2 justify-start">
          <TabsTrigger value="basic">Basic</TabsTrigger>
          <TabsTrigger value="noPaging">No Paging</TabsTrigger>
          <TabsTrigger value="serialNumbers">Serial Numbers</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">
          <BasicDataTable />
        </TabsContent>
        <TabsContent value="noPaging">
          <BasicDataTable hidePaging />
        </TabsContent>
        <TabsContent value="serialNumbers">
          <BasicDataTable showSerialNumbers />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataTables;
