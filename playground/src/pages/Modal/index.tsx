import React from "react";
import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Button, Modal } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

export const ModalWrapper = () => {
  const [isModalisible, setModalVisible] = React.useState(false);

  let demoProps = { ...DEMO_COMMON_PROPS };

  delete demoProps.hide;

  return (
    <Demo
      startColor="#999"
      label="Modal"
      props={{
        title: StringProp("Modal title"),
        children: StringProp("Modal content"),
        "With close button": BooleanProp(true),
        ...demoProps,
      }}
    >
      {(props: any) => {
        let modalProps = { ...props };
        
        delete modalProps["With close button"];

        return (
          <div className="flex flex-col items-center">
            <Button onClick={() => setModalVisible(true)}>
              {"Open modal"}
            </Button>
            <Modal
              {...modalProps}
              children={<div>{modalProps.children}</div>}
              hide={!isModalisible}
              onClose={
                props["With close button"] && (() => setModalVisible(false))
              }
            />
          </div>
        );
      }}
    </Demo>
  );
};

const ModalPage = () => (
  <ComponentPage name="Modal">
    <ModalWrapper />
  </ComponentPage>
);

export default ModalPage;
