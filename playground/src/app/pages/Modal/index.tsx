import React from "react";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Modal, Page } from "modular-ui-preview";
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
        hide: BooleanProp(false),
      }}
      rows={[
        ["title", "children", "hide"],
        ["className", "overlayClassName"],
      ]}
    >
      {(props: any) => (
        <div>
          <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
            <button
              className="px-5 m-auto text-lg py-3 rounded-md focus:outline-none hover:text-blue-400 bg-gradient-to-r from-white to-gray-200"
              onClick={() => setModalVisible(true)}
            >
              {"Open modal"}
            </button>
          </div>
          <Modal
            {...props}
            children={<div>{props.children}</div>}
            isVisible={isModalisible}
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
