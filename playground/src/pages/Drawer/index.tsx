import { Demo, SelectProp } from "@cianciarusocataldo/demo-ui";

import { Button, Drawer } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";
import React from "react";

const DrawerPage = () => {
  const [isVisible, setVisible] = React.useState(false);

  let demoProps = { ...DEMO_COMMON_PROPS };
  delete demoProps.hide;

  return (
    <ComponentPage
      name="Drawer"
      render={(t) => (
        <Demo
          label="Drawer"
          startColor="#C3BBBB"
          props={{
            position: SelectProp({
              top: "top",
              "top-left": "top-left",
              "top-right": "top-right",
              bottom: "bottom",
              "bottom-left": "bottom-left",
              "bottom-right": "bottom-right",
              left: "left",
              right: "right",
            }),
            ...demoProps,
          }}
        >
          {(props: any) => {
            return (
              <div className="flex flex-col items-center">
                <Button onClick={() => setVisible(!isVisible)}>
                  {t(isVisible ? "common_close" : "common_open")}
                </Button>
                <Drawer
                  hide={!isVisible}
                  onClose={() => setVisible(false)}
                  {...props}
                />
              </div>
            );
          }}
        </Demo>
      )}
    />
  );
};

export default DrawerPage;
