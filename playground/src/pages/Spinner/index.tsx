import { BooleanProp, Demo, SelectProp } from "@cianciarusocataldo/demo-ui";

import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

import { Spinner } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";

const SpinnerPage = () => (
  <ComponentPage name="Spinner">
    <Demo
      label="Spinner"
      props={{
        value: SelectProp({
          "Not set": undefined,
          success: "success",
          error: "error",
          loading: "loading",
        }),
        ...DEMO_COMMON_PROPS,
        shadow: BooleanProp(false),
      }}
    >
      {(props: any) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Spinner
            {...props}
            className={props.className.length > 0 ? props.className : "w-32"}
          />
        </div>
      )}
    </Demo>
  </ComponentPage>
);

export default SpinnerPage;
