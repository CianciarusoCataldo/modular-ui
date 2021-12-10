import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import AppPage from "app/components/molecules/AppPage";
import {
  useCommonTranslation,
  useFormPageTranslation,
} from "app/hooks/localization";
import { Form } from "modular-ui-preview";

export const FormWrapper = () => (
  <Demo
    label="Form"
    startColor="#A19B9B"
    props={{
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      shadow: BooleanProp(false),
      title: StringProp("Form title"),
      submitLabel: StringProp("Form submit button"),
      className: StringProp("mx-auto"),
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
  const t = useFormPageTranslation();
  const tCommon = useCommonTranslation();
  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "molecules"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <FormWrapper />
      </div>
    </AppPage>
  );
};

export default FormPage;
