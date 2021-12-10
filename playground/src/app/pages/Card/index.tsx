import React from "react";

import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import {
  useCardPageTranslation,
  useCommonTranslation,
} from "app/hooks/localization";
import { Card } from "modular-ui-preview";
import AppPage from "app/components/molecules/AppPage";

const CardPage = () => {
  const t = useCardPageTranslation();
  const tCommon = useCommonTranslation();
  
  return (
    <AppPage>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "molecules"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <CardWrapper />
      </div>
    </AppPage>
  );
};

export const CardWrapper = () => {
  return (
    <Demo
      label="Card"
      props={{
        title: StringProp("Card title"),
        header: StringProp("Card header"),
        body: StringProp("Card body"),
        footer: StringProp("Card footer"),
        titleClassName: StringProp(""),
        headerClassName: StringProp(""),
        bodyClassName: StringProp(""),
        footerClassName: StringProp(""),
        hide: BooleanProp(false),
        dark: BooleanProp(false),
        shadow: BooleanProp(true),
      }}
      rows={[
        ["shadow", "dark", "hide"],
        ["title", "header", "body", "footer"],
        [
          "titleClassName",
          "headerClassName",
          "bodyClassName",
          "footerClassName",
        ],
      ]}
      startColor="#999"
    >
      {(props: any) => (
        <div className="flex flex-col items-center">
          <Card {...props} />
        </div>
      )}
    </Demo>
  );
};

export default CardPage;
