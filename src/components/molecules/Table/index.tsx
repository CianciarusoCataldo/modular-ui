import React from "react";

import "./styles.css";

import classNames from "classnames";

import { TableProps } from "./types";

const Table = ({ headers, rows }: TableProps) => {
  let gridTemplateRows = "";
  let gridTemplateColumns = "";

  let elements: (JSX.Element | string)[][] = [];

  if (rows) {
    elements = rows.map((row, rowIndex) =>
      row.map((element, index) => (
        <div
          key={`element_${index}`}
          className={classNames("element", {
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

  return (
    <div id="modular-table">
      <div
        className="rows"
        style={{
          gridTemplateRows,
          gridTemplateColumns,
        }}
      >
        {elements}
      </div>
    </div>
  );
};

export default Table;
