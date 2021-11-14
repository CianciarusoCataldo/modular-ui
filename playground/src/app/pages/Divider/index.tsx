import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Page, Divider } from "modular-ui-preview";

const HomePage = () => {
  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <Demo label="Divider" props={{ className: StringProp("") }}>
          {(props: any) => <Divider {...props} />}
        </Demo>
      </div>
    </Page>
  );
};

export default HomePage;
