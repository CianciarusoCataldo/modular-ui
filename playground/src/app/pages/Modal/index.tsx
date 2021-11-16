import React from "react";
import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import { Modal, Page } from "modular-ui-preview";

export const ModalWrapper = () => {
  const [isModalisible, setModalVisible] = React.useState(false);
  return (
    <Demo
      props={{
        title: StringProp("Modal title"),
        Content: StringProp("Modal content"),
        className: StringProp(""),
        overlayClassName: StringProp(""),
      }}
    >
      {(args: any) => (
        <div>
          <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
            <button
              className="px-5 text-lg mx-5 mt-3 lg:my-auto xl:my-auto 2xl:my-auto 3xl:my-auto 4xl:my-auto py-3 rounded-md focus:outline-none hover:text-blue-400 bg-gradient-to-r from-white to-gray-200"
              onClick={() => setModalVisible(true)}
            >
              {"Open modal"}
            </button>
          </div>
          <Modal
            {...args}
            isVisible={isModalisible}
            onClose={() => setModalVisible(false)}
          />
        </div>
      )}
    </Demo>
  );
};

const ModalPage = () => {
  return (
    <Page>
      <ModalWrapper />
    </Page>
  );
};

export default ModalPage;
