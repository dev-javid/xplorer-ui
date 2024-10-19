import { Tabs, TabsList, TabsTrigger, TabsContent } from "xplorer-ui";
import BasicDataTable from "./basic-data-table";

const DataTables = () => {
  return (
    <div>
      <Tabs defaultValue="default" className="w-[400px]">
        <TabsList className="w-full grid-cols-2 justify-start">
          <TabsTrigger value="default">Default</TabsTrigger>
          <TabsTrigger value="noPaging">No Paging</TabsTrigger>
          <TabsTrigger value="serialNumbers">Serial Numbers</TabsTrigger>
          <TabsTrigger value="noSearch">No Search</TabsTrigger>
          <TabsTrigger value="noColumnToggle">No Column Toggle</TabsTrigger>
        </TabsList>
        <TabsContent value="default">
          <BasicDataTable />
        </TabsContent>
        <TabsContent value="noPaging">
          <BasicDataTable hidePaging />
        </TabsContent>
        <TabsContent value="serialNumbers">
          <BasicDataTable showSerialNumbers />
        </TabsContent>
        <TabsContent value="noSearch">
          <BasicDataTable disableSearch />
        </TabsContent>
        <TabsContent value="noColumnToggle">
          <BasicDataTable hideColumnToggle />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataTables;
