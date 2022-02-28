import { DEMO_COMMON_PROPS } from "app/constants/demo-props";

import { BooleanProp, Demo, NumberProp } from "@cianciarusocataldo/demo-ui";

import { List } from "modular-ui-preview";
import { ComponentPage } from "app/components/ComponentPage";

const ListPage = () => (
  <ComponentPage
    name="List"
    render={(t) => {
      const elementsLabel = t("props", { context: "elements" });

      return (
        <Demo
          label="List"
          props={{
            ...DEMO_COMMON_PROPS,
            shadow: BooleanProp(false),
            [elementsLabel]: NumberProp(3),
          }}
          rows={[
            ["className", "hide", "dark", "unstyled", "shadow", elementsLabel],
          ]}
        >
          {(props: any) => {
            let elements: string[] = [];
            for (let i = 0; i < (props[elementsLabel] as number); ++i) {
              elements.push(
                t("props", { context: "elements_single", index: i + 1 })
              );
            }

            return (
              <div className="m-auto flex flex-col items-center text-xl">
                <List elements={elements} {...props} />
              </div>
            );
          }}
        </Demo>
      );
    }}
  >
    {}
  </ComponentPage>
);

export default ListPage;
