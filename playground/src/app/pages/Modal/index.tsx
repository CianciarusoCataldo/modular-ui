import React from "react";
import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Button, Modal } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

export const ModalWrapper = () => {
  const [isModalisible, setModalVisible] = React.useState(false);
  return (
    <Demo
      startColor="#999"
      label="Modal"
      props={{
        title: StringProp("Modal title"),
        children: StringProp("Modal content"),
        overlayClassName: StringProp(""),
        ...DEMO_COMMON_PROPS,
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

const ModalPage = () => (
  <ComponentPage name="Modal">
    <ModalWrapper />
  </ComponentPage>
);

export default ModalPage;
