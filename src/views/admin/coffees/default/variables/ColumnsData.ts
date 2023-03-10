import { COFFEE_BURNT_LVL, COFFE_TYPE } from "interfaces/coffeeTypes";
import { Column } from "react-table";

export const ColumnsData = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "Nazwa",
    accessor: "name",
  },
  {
    Header: "Marka",
    accessor: "brand",
  },
  {
    Header: "Typ",
    accessor: "type",
  },
  {
    Header: "Zdjęcie",
    accessor: "imgUrl",
  },
  {
    Header: "Opis",
    accessor: 'description'
  },
  {
    Header: "Poziom Wypalenia",
    accessor: 'burntLvl'
  },
  {
    Header: "Odnośnik",
    accessor: 'reflink'
  }
];

export type ColumnData = Column[];


export type TableData = Column<{
    id: string,
    brand: string,
    name: string,
    type: COFFE_TYPE,
    imgUrl: string,
    description: string,
    burntLvl: COFFEE_BURNT_LVL,
    createdAt: Date,
    reviews: any[],
    reflink: string
}>;

export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
};