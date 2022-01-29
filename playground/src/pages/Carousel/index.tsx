import Elem0 from "./elem0.png";
import Elem1 from "./elem1.png";
import Elem2 from "./elem2.png";

import { Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Carousel } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";
import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

const CarouselPage = () => (
  <ComponentPage name="Carousel">
    <Demo
      label="Carousel"
      props={{
        label: StringProp("Carousel label"),
        ...DEMO_COMMON_PROPS,
      }}
    >
      {(props: any) => {
        return (
          <Carousel
            elements={[
              <img alt="" src={Elem0} width="250px" height="250px" />,
              <img alt="" src={Elem1} width="250px" height="250px" />,
              <img alt="" src={Elem2} width="250px" height="250px" />,
            ]}
            {...props}
          />
        );
      }}
    </Demo>
  </ComponentPage>
);

export default CarouselPage;
