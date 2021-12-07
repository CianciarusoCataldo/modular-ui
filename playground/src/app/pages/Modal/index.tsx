import React from "react";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Button, Modal, Page } from "modular-ui-preview";
import {
  useCommonTranslation,
  useModalPageTranslation,
} from "app/hooks/localization";

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
        ["title", "children","dark"],
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
  const t = useModalPageTranslation();
  const tCommon = useCommonTranslation();
  return (
    <Page>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "molecules"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <ModalWrapper />
      </div>
    </Page>
  );
};

export default ModalPage;
