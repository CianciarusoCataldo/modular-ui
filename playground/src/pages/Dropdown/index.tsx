import { BooleanProp, Demo } from "@cianciarusocataldo/demo-ui";

import { Dropdown } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const DropdownPage = () => (
  <ComponentPage name="Dropdown">
    <Demo
      label="Dropdown"
      props={{
        "With icons": BooleanProp(false),
        ...DEMO_COMMON_PROPS,
      }}
      startColor="#ebe5e2"
    >
      {(props: any) => {
        const icon = props["With icons"] ? (
          <div
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0.25rem",
              marginRight: "0.25rem",
            }}
          >
            <i
              style={{
                border: "solid",
                borderWidth: "0 3px 3px 0",
                display: "block",
                padding: "3px",
              }}
            ></i>
          </div>
        ) : undefined;

        const elements = [
          {
            name: "Dropdown Element 1",
            icon: icon,
          },
          {
            name: "Dropdown Element 2",
            icon: icon,
          },
        ];

        return (
          <div className="flex flex-col items-center">
            <Dropdown
              className={props.className}
              hide={props.hide}
              dark={props.dark}
              shadow={props.shadow}
              unstyled={props.unstyled}
              content={elements}
            />
          </div>
        );
      }}
    </Demo>
  </ComponentPage>
);

export default DropdownPage;
