import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Input } from "modular-ui-preview";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";

export const InputWrapper = () => {
  return (
    <Demo
      label="Input"
      startColor="#C3BBBB"
      props={{
        className: StringProp(""),
        value: StringProp("Input value"),
        label: StringProp("Input label"),
        placeholder: StringProp("placeholder"),
        hide: BooleanProp(false),
        dark: BooleanProp(false),
        shadow: BooleanProp(true),
        readOnly: BooleanProp(false),
        unstyled: BooleanProp(false),
      }}
      rows={[
        ["value", "readOnly", "placeholder"],
        ["unstyled", "className", "label"],
        ["shadow", "dark", "hide"],
      ]}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <Input {...props} />
        </div>
      )}
    </Demo>
  );
};

const InputPage = () => {
  const t = useCommonTranslation();

  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${t("atoms")} - ${t(
        "component",
        { componentName: "Input" }
      )}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <InputWrapper />
      </div>
    </AppPage>
  );
};

export default InputPage;
