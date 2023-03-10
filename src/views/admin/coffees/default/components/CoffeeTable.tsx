import {
  Flex,
  Menu,
  Progress,
  Table,
  Tbody,
  Text,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import { COFFEE_BURNT_LVL, COFFE_TYPE } from "interfaces/coffeeTypes";
import { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { GiCoffeeCup } from "react-icons/gi";

import { TableProps } from "views/admin/coffees/default/variables/ColumnsData";

export default function CoffeeTable(props: TableProps) {
  const { columnsData, tableData } = props;
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 20;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("secondaryGray.500", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const [isMounted, setIsMounted] = useState(false);

  return (
    <Card
      flexDirection="column"
      w="100%"  
      px="0px"
      overflowX={{ sm: "scroll", "2xl": "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        {/* <Menu /> */}
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data;
                  if (cell.column.Header === "Poziom Wypalenia") {
                    data = (
                      <Flex align="center">
                        {new Array(
                          COFFEE_BURNT_LVL[
                            `${cell.value as keyof typeof COFFEE_BURNT_LVL}`
                          ]
                        )
                          .fill(null)
                          .map((x, i) => {
                            return (
                              <GiCoffeeCup
                                key={i}
                                style={{ marginRight: "10px" }}
                                color={iconColor}
                              />
                            );
                          })}
                      </Flex>
                    );
                  } else if (cell.column.Header === "Typ") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {COFFE_TYPE[`${cell.value as keyof typeof COFFE_TYPE}`]}
                      </Text>
                    );
                  } else {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  }

                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
