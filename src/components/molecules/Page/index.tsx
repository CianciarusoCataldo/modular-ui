import "./styles.css";

import React from "react";

import classNames from "classnames";
import { PageProps } from "./types";

/**
 * A standard Page component. It is showed with a standard fade-in effect, along with its content.
 * Children components orientation (if an array is given as children) can be horizontal or vertical (through `orientation` parameter)
 *
 * @param children content element(s)
 * @param orientation Page children elements orientation (vertical or `horizontal)
 * @param className A custom className applied on the component container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */

const Page = ({ children, orientation = "vertical", className }: PageProps) => {
  return (
    <div className={classNames(orientation, "modular-page", className)}>
      {children}
    </div>
  );
};

export default Page;
