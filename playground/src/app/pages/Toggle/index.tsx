import { Toggle } from "modular-ui-preview";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import {
  useCommonTranslation,
  useToggleTranslation,
} from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";

const TogglePage = () => {
  const t = useToggleTranslation();
  const tCommon = useCommonTranslation();

  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "atoms"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ToggleWrapper />
      </div>
    </AppPage>
  );
};

export const ToggleWrapper = () => (
  <Demo
    label="Toggle"
    startColor="#999"
    props={{
      className: StringProp(""),
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      shadow: BooleanProp(true),
    }}
  >
    {(props: any) => (
      <div className="flex flex-col items-center">
        <Toggle {...props} />
      </div>
    )}
  </Demo>
);

export default TogglePage;
