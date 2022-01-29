import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Link } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";

const LinkPage = () => (
  <ComponentPage name="Link">
    <Demo
      label="Link"
      props={{
        to: StringProp("https://github.com/CianciarusoCataldo/modular-ui"),
        children: StringProp("Link label"),
        newTab: BooleanProp(true),
        ...DEMO_COMMON_PROPS,
      }}
      rows={[
        ["to", "className", "children"],
        ["newTab", "hide", "dark", "unstyled"],
      ]}
    >
      {(props: any) => (
        <div className="m-auto flex flex-col items-center text-xl">
          <Link {...props} />
        </div>
      )}
    </Demo>
  </ComponentPage>
);

export default LinkPage;
