import { Page, Link } from "modular-ui-preview";
import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

export const LinkWrapper = () => (
  <Demo
    props={{
      label: StringProp("Link label"),
      className: StringProp(""),
    }}
  >
    {(props: any) => <Link {...props} />}
  </Demo>
);

const LinkPage = () => {
  return (
    <Page>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <LinkWrapper />
      </div>
    </Page>
  );
};

export default LinkPage;
