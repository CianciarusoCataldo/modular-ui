import {
  BooleanProp,
  Demo,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { Label, Table } from "modular-ui-preview";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

export const TableWrapper = () => {
  return (
    <Demo
      label="Table"
      props={{
        className: StringProp(""),
        label: StringProp("Table label"),
        Rows: NumberProp(2),
        headers: BooleanProp(true),
        hide: BooleanProp(false),
        dark: BooleanProp(false),
        shadow: BooleanProp(true),
        unstyled: BooleanProp(false),
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
  );
};

const TablePage = () => {
  const t = useCommonTranslation();
  const AppLabel = driveWithDarkMode(Label);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t(
        "molecules"
      )} - ${t("component", { componentName: "Table" })}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <TableWrapper />
      </div>
    </AppPage>
  );
};

export default TablePage;
