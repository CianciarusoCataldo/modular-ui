import { RateBox } from "modular-ui-preview";
import {
  BooleanProp,
  Demo,
  SelectProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import {
  useCommonTranslation,
  useRateBoxPageTranslation,
} from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";

const RateBoxPage = () => {
  const t = useRateBoxPageTranslation();
  const tCommon = useCommonTranslation();

  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "molecules"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <RateBoxWrapper />
      </div>
    </AppPage>
  );
};

export const RateBoxWrapper = () => (
  <Demo
    label="Toggle"
    props={{
      className: StringProp(""),
      hide: BooleanProp(false),
      dark: BooleanProp(false),
      shadow: BooleanProp(true),
      type: SelectProp({
        Stars: "star",
        Circles: "circle",
      }),
    }}
  >
    {(props: any) => (
      <div className="flex flex-col items-center">
        <RateBox {...props} />
      </div>
    )}
  </Demo>
);

export default RateBoxPage;
