import { Demo } from "@cianciarusocataldo/demo-ui";

import { Divider } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const DividerPage = () => (
  <ComponentPage
    name="Divider"
    render={(_, componentLabel) => (
      <Demo
        label={componentLabel}
        props={{
          ...DEMO_COMMON_PROPS,
        }}
      >
        {(props: any) => <Divider {...props} />}
      </Demo>
    )}
  />
);

export default DividerPage;
