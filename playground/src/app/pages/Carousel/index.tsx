import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";

import { Carousel, Label } from "modular-ui-preview";
import { useCommonTranslation } from "app/hooks/localization";
import AppPage from "app/components/molecules/AppPage";
import Elem0 from "assets/images/misc/elem0.png";
import Elem1 from "assets/images/misc/elem1.png";
import Elem2 from "assets/images/misc/elem2.png";
import { driveWithDarkMode } from "@cianciarusocataldo/modular-engine";

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
  const AppLabel = driveWithDarkMode(Label);

  return (
    <AppPage>
      <AppLabel className="text-4xl mt-12 mb-5 ml-3">{`${t("molecules")} - ${t(
        "component",
        { componentName: "Carousel" }
      )}`}</AppLabel>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CarouselWrapper />
      </div>
    </AppPage>
  );
};

export default CarouselPage;
