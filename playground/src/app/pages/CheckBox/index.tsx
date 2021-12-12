import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { CheckBox } from "modular-ui-preview";
import {
  useCommonTranslation,
  useCheckBoxPageTranslation,
} from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";

export const CheckBoxWrapper = () => {
  return (
    <Demo
      label="CheckBox"
      props={{
        className: StringProp(""),
        hide: BooleanProp(false),
        dark: BooleanProp(false),
        shadow: BooleanProp(true),
      }}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <CheckBox {...props} />
        </div>
      )}
    </Demo>
  );
};

const CheckBoxPage = () => {
  const t = useCheckBoxPageTranslation();
  const tCommon = useCommonTranslation();
  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "atoms"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CheckBoxWrapper />
      </div>
    </AppPage>
  );
};

export default CheckBoxPage;
