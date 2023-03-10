import AdminLayout from "layouts/admin";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from "@chakra-ui/react";
import { ColumnsData } from "views/admin/coffees/default/variables/ColumnsData";
import CoffeeTable from "views/admin/coffees/default/components/CoffeeTable";
import { useGetCoffeesMutation } from "redux/api/coffee";
import { useEffect, useState } from "react";
import SkeletonTable from "components/skeleton/table";

import React from "react";
import AddCoffee from "views/admin/coffees/default/components/AddCoffee";

export default function Coffees() {


  const [coffees, setCoffees] = useState(undefined);
  const [getCoffees, { isLoading }] = useGetCoffeesMutation();

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await getCoffees(null);
        setCoffees((response as any).data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCoffees();
  }, [getCoffees]);

  return (
    <>
      <AdminLayout>
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
          <Tabs>
            <TabList>
              <Tab>tabela Kaw</Tab>
              <Tab>Dodaj Kawe</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
              {isLoading ? (
                <SkeletonTable />
              ) : (
                  <CoffeeTable
                    columnsData={ColumnsData}
                    tableData={coffees ? coffees : []}
                  />
                  )}
                  </TabPanel>
              <TabPanel height={"100%"}>
                <AddCoffee />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </AdminLayout>
    </>
  );
}
