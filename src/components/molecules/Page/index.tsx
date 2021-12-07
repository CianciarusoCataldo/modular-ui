import "./styles.css";
import { PageProps } from "./types";

import classNames from "classnames";
import { buildComponent } from "../../../utils";

/**
 * A standard Page component. It is showed with a standard fade-in effect, along with its content.
 * Children components orientation (if an array is given as children) can be horizontal or vertical (through `orientation` parameter)
 *
 * @param children content element(s)
 * @param orientation Page children elements orientation (vertical or `horizontal)
 *
 * @copyright 2021 Cataldo Cianciaruso
 */

const Page = ({
  children,
  orientation = "vertical",
  ...commonProps
}: PageProps) => {
  return buildComponent({
    name: "modular-page",
    Component: children,
    commonProps: {
      ...commonProps,
      className: classNames(commonProps.className, orientation),
    },
  });
};

export default Page;
