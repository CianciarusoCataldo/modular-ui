import { Previewer } from "@cianciarusocataldo/demo-ui";
import {
  useCommonTranslation,
  useDropdownPageTranslation,
} from "app/hooks/localization";
import { Page, Dropdown } from "modular-ui-preview";
import React from "react";

export const DropdownWrapper = () => {
  const [selectedItem, selectItem] = React.useState(0);
  const elements = [
    {
      name: "Dropdown Element 1",
      action: () => {
        selectItem(0);
      },
    },
    {
      name: "Dropdown Element 2",
      action: () => {
        selectItem(1);
      },
    },
  ];
  return (
    <Previewer label="Dropdown">
      <Dropdown
        className="mx-6 my-8"
        defaultValue={elements[selectedItem].name}
        content={elements}
      />
    </Previewer>
  );
};

const DropdownPage = () => {
  const t = useDropdownPageTranslation();
  const tCommon = useCommonTranslation();
  return (
    <Page>
      <p className="text-4xl mt-8 mb-5 ml-3 text-white">{`${tCommon(
        "molecules"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <DropdownWrapper />
      </div>
    </Page>
  );
};

export default DropdownPage;
