import {
  BooleanProp,
  Demo,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { Page, Table } from "modular-ui-preview";
import {
  useCommonTranslation,
  useTableTranslation,
} from "app/hooks/localization";

export const TableWrapper = () => {
  return (
    <Demo
      label="Table"
      props={{
        className: StringProp(""),
        Rows: NumberProp(1),
        headers: BooleanProp(true),
        hide: BooleanProp(false),
        dark: BooleanProp(false),
      }}
    >
      {(props: any) => {
        let rows = [];
        if (props.Rows) {
          if (props.headers) {
            rows.push(["Table header 1", "Table header 2", "Table header 3"]);
          }
          for (let i = 0; i < props.Rows; i++) {
            rows.push(["Table cell", "Table cell", "Table cell"]);
          }
        }

        return (
          <Table
            rows={rows}
            headers={props.headers}
            className={props.className}
            hide={props.hide}
            dark={props.dark}
          />
        );
      }}
    </Demo>
  );
};

const TablePage = () => {
  const t = useTableTranslation();
  const tCommon = useCommonTranslation();
  return (
    <Page>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "molecules"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <TableWrapper />
      </div>
    </Page>
  );
};

export default TablePage;
