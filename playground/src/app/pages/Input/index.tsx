import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Input } from "modular-ui-preview";
import {
  useCommonTranslation,
  useInputPageTranslation,
} from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";

export const InputWrapper = () => {
  return (
    <Demo
      label="Input"
      startColor="#C3BBBB"
      props={{
        className: StringProp(""),
        placeholder: StringProp("placeholder"),
        numeric: BooleanProp(false),
        hide: BooleanProp(false),
        dark: BooleanProp(false),
        shadow: BooleanProp(true),
        readOnly: BooleanProp(false),
      }}
      rows={[
        ["placeholder", "numeric", "readOnly"],
        ["className", "dark", "shadow"],
      ]}
    >
      {(props: any) => <Input {...props} />}
    </Demo>
  );
};

const InputPage = () => {
  const t = useInputPageTranslation();
  const tCommon = useCommonTranslation();

  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "atoms"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <InputWrapper />
      </div>
    </AppPage>
  );
};

export default InputPage;
