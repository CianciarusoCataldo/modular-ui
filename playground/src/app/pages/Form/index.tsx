import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import {
  useCommonTranslation,
  useFormPageTranslation,
} from "app/hooks/localization";
import { Page, Form } from "modular-ui-preview";

export const FormWrapper = () => (
  <Demo
    label="Form"
    props={{
      hide: BooleanProp(false),
      title: StringProp("Form title"),
      submitLabel: StringProp("Form submit button"),
      className: StringProp("mx-6 my-8"),
    }}
  >
    {(props: any) => (
      <Form
        {...props}
        fields={[
          {
            name: "Field 1",
            placeholder: "Field 1 placeholder",
            required: false,
            header: "Field 1 header",
            validate: (value: string) => {
              console.log(/\S+@\S+\.\S+/.test(value));
              return /\S+@\S+\.\S+/.test(value);
            },
          },
          {
            name: "Field 2",
            placeholder: "Field 2 placeholder",
            required: false,
            header: "Field 2 header",
          },
        ]}
        onSubmit={(values: any) => console.log(values)}
      />
    )}
  </Demo>
);

const FormPage = () => {
  const t = useFormPageTranslation();
  const tCommon = useCommonTranslation();
  return (
    <Page>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "molecules"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <FormWrapper />
      </div>
    </Page>
  );
};

export default FormPage;
