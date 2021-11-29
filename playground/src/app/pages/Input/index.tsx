import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Input, Page } from "modular-ui-preview";
import {
  useCommonTranslation,
  useInputPageTranslation,
} from "app/hooks/localization";

export const InputWrapper = () => {
  return (
    <Demo
      label="Input"
      props={{
        className: StringProp(""),
        numeric: BooleanProp(false),
        hide: BooleanProp(false),
      }}
    >
      {(props: any) => {
        return <Input {...props} />;
      }}
    </Demo>
  );
};

const InputPage = () => {
  const t = useInputPageTranslation();
  const tCommon = useCommonTranslation();

  return (
    <Page>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "atoms"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <InputWrapper />
      </div>
    </Page>
  );
};

export default InputPage;
