import "./styles.css";

import { ContainerProps } from "./types";

import { buildComponent } from "../../../utils";
import classNames from "classnames";

/**
 * A simple but smart container, enhanced with modular-ui common props and animations (if enabled)
 *
 * @param wrapper component type. The Container component can wrap a content inside different components (by now, )
 *
 *@example <caption>Example Container usage</caption>
 *import { render } from "react-dom";
 *import { Container } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Container dark> Example content </Container>, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Container = ({
  children,
  wrapper,
  animated,
  ...commonProps
}: ContainerProps) =>
  buildComponent({
    name: "modular-container",
    Component: children,
    commonProps: {
      ...commonProps,
      className: classNames(commonProps.className, {
        animated: animated && !commonProps.hide,
      }),
    },
    wrapper,
  });

export default Container;
