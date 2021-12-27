import {
  BooleanProp,
  Demo,
  NumberProp,
  StringProp,
} from "@cianciarusocataldo/demo-ui";
import { Counter } from "modular-ui-preview";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";

export const CounterWrapper = () => {
  return (
    <Demo
      label="Counter"
      startColor="#C3BBBB"
      props={{
        className: StringProp(""),
        value: NumberProp(0),
        label: StringProp("Counter label"),
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
          <Counter {...props} />
        </div>
      )}
    </Demo>
  );
};

const CounterPage = () => {
  const t = useCommonTranslation();

  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${t("atoms")} - ${t(
        "component",
        { componentName: "Counter" }
      )}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CounterWrapper />
      </div>
    </AppPage>
  );
};

export default CounterPage;
