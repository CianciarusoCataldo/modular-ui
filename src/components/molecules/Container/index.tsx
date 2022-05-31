import "./styles.css";

import { ContainerComponent } from "./types";

import { buildComponent } from "../../../utils";
import classNames from "classnames";

/**
 * A simple but smart container, enhanced with modular-ui common props and animations (if enabled)
 *
 * @since 3.0.0
 *
 * @param wrapper component type. The Container component can wrap a content inside different components (by now, )
 * @param children content to render inside Container
 * @param animated if `true`, the Container will be showed with a fade-in effect
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 * @example <caption>Example Container usage</caption>
 * import { render } from "react-dom";
 * import { Container } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Container animated dark> Example content </Container>, document.getElementById("root"));
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Container
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Container: ContainerComponent = ({
  children,
  wrapper,
  animated,
  ...commonProps
}) =>
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
