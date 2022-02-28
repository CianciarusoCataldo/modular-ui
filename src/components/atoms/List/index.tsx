import React from "react";

import "./styles.css";
import { ListProps } from "./types";

import { buildComponent } from "../../../utils";

/**
 * A custom bullet list, that support any type of elements (types can vary from element to element)
 *
 * @param {ListProps["elements"]} elements list elements (if unstyled == `false`, every element will include a dot at its start)
 * @param {ListProps["className"]} className `common modular-ui prop` - custom className (to better customize it)
 * @param {ListProps["unstyled"]} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {ListProps["id"]} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {ListProps["dark"]} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {ListProps["hide"]} hide `common modular-ui prop` - Hide/show component
 * @param {ListProps["shadow"]} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Link usage</caption>
 *import { render } from "react-dom";
 *import { List } from '@cianciarusocataldo/modular-ui';
 *
 * render(<List elements={["element 1", "element 2"]} />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const List = ({ elements: inputElements, ...commonProps }: ListProps) => {
  const elements = inputElements || [];
  return buildComponent({
    name: "modular-list",
    Component: elements.map((element, index) => {
      return (
        <div className="element" key={`element_${index}`}>
          {!commonProps.unstyled && (
            <svg viewBox="0 0 9 9" className="dot">
              <circle cx={4.5} cy={4.5} r={3.5} />
            </svg>
          )}
          {element}
        </div>
      );
    }),
    commonProps,
  });
};

export default List;
