import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";
import AppPage from "app/components/molecules/AppPage";
import { useCommonTranslation } from "app/hooks/localization";
import { Form, Label } from "modular-ui-preview";

export const FormWrapper = () => (
  <Demo
    label="Form"
    startColor="#A19B9B"
    props={{
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      shadow: BooleanProp(true),
      title: StringProp("Form title"),
      submitLabel: StringProp("Form submit button"),
      className: StringProp("mx-auto"),
      label: StringProp("Form label"),
    }}
  >
    {(props: any) => (
      <div className="flex flex-col items-center">
        <Form
          {...props}
          fields={{
            field1: {
              placeholder: "Field 1 placeholder",
              required: false,
              header: "Field 1 header",
              error: "Custom error label",
              validate: (value: string) => {
                return value.includes("s");
              },
            },
            field2: {
              placeholder: "Field 2 placeholder",
              required: true,
              header: "Field 2 header",
            },
          }}
          onSubmit={(values: any) => console.log(values)}
        />
      </div>
    )}
  </Demo>
);

const FormPage = () => {
  const t = useCommonTranslation();
  const AppLabel = driveWithDarkMode(Label);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t("molecules")} - ${t(
        "component",
        { componentName: "Form" }
      )}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <FormWrapper />
      </div>
    </AppPage>
  );
};

export default FormPage;
