import "./styles.css";
import { TableProps } from "./types";

import React from "react";

import classNames from "classnames";
import { buildComponent } from "../../../utils";

const Table = ({ headers, rows = [], ...commonProps }: TableProps) => {
  let gridTemplateRows = "";
  let gridTemplateColumns = "";

  let elements: (JSX.Element | string)[][] = [];

  if (rows && rows.length > 0) {
    elements = rows.map((row, rowIndex) =>
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

    for (let i = 0; i < rows.length; i++) {
      gridTemplateRows += " auto";
    }

    for (let i = 0; i < rows[0].length; i++) {
      gridTemplateColumns += " auto";
    }
  }

  return buildComponent({
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
  });
};

export default Table;
