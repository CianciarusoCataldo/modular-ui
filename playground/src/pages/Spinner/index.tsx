import { BooleanProp, Demo, SelectProp } from "@cianciarusocataldo/demo-ui";

import ReactImage from "./react.svg";
import ReduxImage from "./redux.svg";

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
        "With custom states": BooleanProp(false),
        "Custom value": SelectProp({ react: "react", redux: "redux" }),
        ...DEMO_COMMON_PROPS,
        shadow: BooleanProp(false),
      }}
    >
      {(props: any) => {
        let componentProps = { ...props };

        delete componentProps["With custom states"];
        delete componentProps["Custom value"];

        if (props["With custom states"]) {
          componentProps.statuses = {
            react: (
              <div style={{ width: "8rem", height: "8rem" }}>
                <img src={ReactImage} width="125px" height="125px" alt="" />
              </div>
            ),
            redux: (
              <div style={{ width: "8rem", height: "8rem" }}>
                <img src={ReduxImage} alt="" width="125px" height="125px" />
              </div>
            ),
          };
          componentProps.value = props["Custom value"];
        } else {
          componentProps.statuses = undefined;
          componentProps.value = props.value;
        }

        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Spinner
              {...componentProps}
              className={props.className.length > 0 ? props.className : "w-32"}
            />
          </div>
        );
      }}
    </Demo>
  </ComponentPage>
);

export default SpinnerPage;
