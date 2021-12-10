import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Checkbox } from "modular-ui-preview";
import {
  useCommonTranslation,
  useCheckboxPageTranslation,
} from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";

export const CheckboxWrapper = () => {
  return (
    <Demo
      label="Checkbox"
      props={{
        className: StringProp(""),
        hide: BooleanProp(false),
        dark: BooleanProp(false),
        shadow: BooleanProp(true),
      }}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <Checkbox {...props} />
        </div>
      )}
    </Demo>
  );
};

const CheckboxPage = () => {
  const t = useCheckboxPageTranslation();
  const tCommon = useCommonTranslation();
  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "atoms"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CheckboxWrapper />
      </div>
    </AppPage>
  );
};

export default CheckboxPage;
