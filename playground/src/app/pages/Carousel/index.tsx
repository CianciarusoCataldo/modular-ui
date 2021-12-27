import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Carousel } from "modular-ui-preview";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import Elem0 from "assets/images/icons/tmp/elem0.png";
import Elem1 from "assets/images/icons/tmp/elem1.png";
import Elem2 from "assets/images/icons/tmp/elem2.png";

export const CarouselWrapper = () => {
  return (
    <Demo
      label="Carousel"
      props={{
        label: StringProp("Carousel label"),
        className: StringProp(""),
        hide: BooleanProp(false),
        shadow: BooleanProp(true),
        dark: BooleanProp(false),
        unstyled: BooleanProp(false),
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
  );
};

const CarouselPage = () => {
  const t = useCommonTranslation();
  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${t(
        "molecules"
      )} - ${t("component", { componentName: "Carousel" })}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CarouselWrapper />
      </div>
    </AppPage>
  );
};

export default CarouselPage;
