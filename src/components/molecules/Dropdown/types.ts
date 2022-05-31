import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
  ModularComponent,
} from "../../../utils/global";

/**
 * Modular-ui Dropdown component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export interface DropdownElement {
  name: string | JSX.Element;
  icon?: JSX.Element;
}

/**
 * Modular-ui Dropdown component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Dropdown
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type DropdownProps = CommonProps &
  Omit<BoxComponent<number>, "icon"> &
  ComponentWithCallback<number> & {
    /** Dropdown content elements */
    content?: DropdownElement[];
  };

export type DropdownComponent = ModularComponent<DropdownProps>;
