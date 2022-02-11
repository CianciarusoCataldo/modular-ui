import "./styles.css";
import { TableProps } from "./types";

import React from "react";

import classNames from "classnames";
import { buildBoxComponent } from "../../../utils";

/**
 * A standard Table component. It follows a CSV-like format for its content.
 *
 * @param {(string | JSX.Element | Element)[][]} rows Table rows
 * @param {boolean} headers if true, the first row will be used as headers (and not generic data)
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Table usage</caption>
 *import { render } from "react-dom";
 *import { Table } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Table rows={[["Header 1", "Header 2"],["Cell 1", "Cell 2"]]} headers />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Table = ({ label, headers, rows, ...commonProps }: TableProps) => {
  let gridTemplateRows = "";
  let gridTemplateColumns = "";

  let tableRows = rows || [];

  let elements: (JSX.Element | string)[][] = tableRows.map((row, rowIndex) =>
    row.map((element, index) => (
      <div
        key={`element_${rowIndex}_${index}`}
        className={classNames({
          header: headers && rowIndex === 0,
          element: !headers || rowIndex > 0,
        })}
      >
        {element}
      </div>
    ))
  );

  if (tableRows.length > 0) {
    for (let i = 0; i < rows.length; i++) {
      gridTemplateRows += " auto";
    }

    for (let i = 0; i < rows[0].length; i++) {
      gridTemplateColumns += " auto";
    }
  }

  return buildBoxComponent({
    callBack: () => ({
      name: "modular-table",
      Component: (
        <div
          className="rows"
          style={{
            gridTemplateRows,
            gridTemplateColumns,
          }}
        >
          {elements}
        </div>
      ),
      commonProps,
    }),
    label,
  });
};

export default Table;
