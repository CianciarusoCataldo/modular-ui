import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Form } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const FormPage = () => (
  <ComponentPage name="Form">
    <Demo
      label="Form"
      startColor="#A19B9B"
      props={{
        title: StringProp("Form title"),
        submitLabel: StringProp("Form submit button"),
        label: StringProp("Form label"),
        ...DEMO_COMMON_PROPS,
      }}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <Form
            {...props}
            fields={{
              field1: {
                header: "Field 1 header",
              },
              field2: {
                type: "boolean",
                header: "Field 2 header",
              },
              field3: {
                type: "numeric",
                header: "Field 4 header",
              },
            }}
            onSubmit={(values: any) => console.log(values)}
          />
        </div>
      )}
    </Demo>
  </ComponentPage>
);

export default FormPage;
