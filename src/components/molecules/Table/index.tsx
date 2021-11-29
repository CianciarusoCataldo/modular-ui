import "./styles.css";
import { TableProps } from "./types";

import React from "react";

import classNames from "classnames";
import { wrapComponent } from "../Wrapper";

const Table = ({ className, headers, hide, rows = [] }: TableProps) => {
  let gridTemplateRows = "";
  let gridTemplateColumns = "";

  let elements: (JSX.Element | string)[][] = [];

  if (rows && rows.length > 0) {
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

  return wrapComponent(
    <div id="modular-table" className={className}>
      <div
        className="rows"
        style={{
          gridTemplateRows,
          gridTemplateColumns,
        }}
      >
        {elements}
      </div>
    </div>,
    hide
  );
};

export default Table;
