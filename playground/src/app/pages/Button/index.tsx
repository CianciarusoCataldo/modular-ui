import { Page, Button } from "modular-ui-preview";
import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import {
  useButtonPageTranslation,
  useCommonTranslation,
} from "app/hooks/localization";

const ButtonPage = () => {
  const t = useButtonPageTranslation();
  const tCommon = useCommonTranslation();
  return (
    <Page>
      <p className="text-4xl mt-8 mb-5 ml-3 text-white">{`${tCommon(
        "atoms"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ButtonWrapper />
      </div>
    </Page>
  );
};

export const ButtonWrapper = () => (
  <Demo
    label="Button"
    props={{
      children: StringProp("Button content"),
      className: StringProp(""),
    }}
  >
    {(props: any) => (
      <Button onClick={() => alert("Button clicked")} {...props} />
    )}
  </Demo>
);

export default ButtonPage;
