import React from "react";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Button, Label, Modal } from "modular-ui-preview";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

export const ModalWrapper = () => {
  const [isModalisible, setModalVisible] = React.useState(false);
  return (
    <Demo
      startColor="#999"
      label="Modal"
      props={{
        title: StringProp("Modal title"),
        children: StringProp("Modal content"),
        className: StringProp(""),
        overlayClassName: StringProp(""),
        dark: BooleanProp(false),
      }}
      rows={[
        ["title", "children", "dark"],
        ["className", "overlayClassName"],
      ]}
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <Button onClick={() => setModalVisible(true)}>{"Open modal"}</Button>
          <Modal
            {...props}
            children={<div>{props.children}</div>}
            hide={!isModalisible}
            onClose={() => setModalVisible(false)}
          />
        </div>
      )}
    </Demo>
  );
};

const ModalPage = () => {
  const t = useCommonTranslation();
  const AppLabel = driveWithDarkMode(Label);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t("molecules")} - ${t(
        "component",
        { componentName: "Modal" }
      )}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ModalWrapper />
      </div>
    </AppPage>
  );
};

export default ModalPage;
