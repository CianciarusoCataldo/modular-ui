import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Page, Divider } from "modular-ui-preview";

export const DividerWrapper = () => (
  <Demo label="Divider" props={{ className: StringProp("") }}>
    {(props: any) => <Divider {...props} />}
  </Demo>
);

const DividerPage = () => {
  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <DividerWrapper />
      </div>
    </Page>
  );
};

export default DividerPage;
