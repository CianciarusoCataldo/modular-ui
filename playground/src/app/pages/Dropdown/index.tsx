import { BooleanProp, Demo, StringProp } from "@cianciarusocataldo/demo-ui";
import {
  useCommonTranslation,
  useDropdownPageTranslation,
} from "app/hooks/localization";
import { Page, Dropdown } from "modular-ui-preview";
import React from "react";

export const DropdownWrapper = () => {
  const [selectedItem, selectItem] = React.useState(0);

  return (
    <Demo
      label="Dropdown"
      props={{
        className: StringProp(""),
        "With icons": BooleanProp(false),
        hide: BooleanProp(false),
        dark: BooleanProp(false),
      }}
    >
      {(props: any) => {
        const icon = props["With icons"] ? (
          <div
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0.25rem",
              marginRight: "0.25rem",
            }}
          >
            <i
              style={{
                border: "solid",
                borderWidth: "0 3px 3px 0",
                display: "block",
                padding: "3px",
              }}
            ></i>
          </div>
        ) : undefined;

        const elements = [
          {
            name: "Dropdown Element 1",
            icon: icon,
          },
          {
            name: "Dropdown Element 2",
            icon: icon,
          },
        ];

        return (
          <Dropdown
            className={props.className}
            hide={props.hide}
            dark={props.dark}
            onChange={(_: any, index: number) => selectItem(index)}
            defaultValue={elements[selectedItem].name}
            content={elements}
          />
        );
      }}
    </Demo>
  );
};

const DropdownPage = () => {
  const t = useDropdownPageTranslation();
  const tCommon = useCommonTranslation();
  return (
    <Page>
      <p className="text-4xl mt-12 mb-5 ml-3 text-white">{`${tCommon(
        "molecules"
      )} - ${t("title")}`}</p>
      <div className="flex flex-col p-3 lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row ">
        <DropdownWrapper />
      </div>
    </Page>
  );
};

export default DropdownPage;
