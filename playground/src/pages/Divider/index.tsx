import { Demo } from "@cianciarusocataldo/demo-ui";

import { Divider } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const DividerPage = () => (
  <ComponentPage name="Divider">
    <Demo
      label="Divider"
      props={{
        ...DEMO_COMMON_PROPS,
      }}
    >
      {(props: any) => <Divider {...props} />}
    </Demo>
  </ComponentPage>
);

export default DividerPage;
