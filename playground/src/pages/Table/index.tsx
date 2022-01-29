import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

import {
  BooleanProp,
  Demo,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";

import { Table } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";

const TablePage = () => (
  <ComponentPage name="Table">
    <Demo
      label="Table"
      props={{
        label: StringProp("Table label"),
        Rows: NumberProp(2),
        headers: BooleanProp(true),
        ...DEMO_COMMON_PROPS,
      }}
    >
      {({ Rows: numberOfRows, ...props }: any) => {
        let rows = [];
        if (numberOfRows) {
          for (let i = 0; i < numberOfRows; i++) {
            rows.push(["Table cell", "Table cell", "Table cell"]);
          }
        }

        return <Table {...props} headers={props.headers} rows={rows} />;
      }}
    </Demo>
  </ComponentPage>
);

export default TablePage;
