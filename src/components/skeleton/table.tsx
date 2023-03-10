import { Table, Thead, Tr, Th, Skeleton, Tbody, Td } from "@chakra-ui/react";

export default function SkeletonTable() {
  const numRows = 5;
  const numCols = 3;

  return (
    <Table>
      <Thead>
        <Tr>
          {Array.from(Array(numCols)).map((_, index) => (
            <Th key={index}>
              <Skeleton height="20px" />
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {Array.from(Array(numRows)).map((_, rowIndex) => (
          <Tr key={rowIndex}>
            {Array.from(Array(numCols)).map((_, colIndex) => (
              <Td key={colIndex}>
                <Skeleton height="20px" />
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
