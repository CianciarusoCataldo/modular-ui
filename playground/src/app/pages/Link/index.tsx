import { Page, Link } from "modular-ui-preview";
import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

const HomePage = () => {
  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <Demo
          props={{
            label: StringProp("Link label"),
            className: StringProp(""),
          }}
        >
          {(props: any) => <Link {...props} />}
        </Demo>
      </div>
    </Page>
  );
};

export default HomePage;
