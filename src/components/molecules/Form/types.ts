import {
  BoxComponent,
  CommonProps,
  ModularComponent,
} from "../../../utils/global";

/** Form component field */
export interface FormField {
  header?: string;
  type?: "boolean" | "text" | "numeric";
}

/**
 * Modular-ui Form component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Form
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type FormProps = CommonProps &
  Omit<BoxComponent, "value" | "icon"> & {
    /** Form title */
    title?: string;

    /** Form fields array */
    fields?: Record<string, FormField>;

    /** Custom submit button label */
    submitLabel?: string;

    /** Callback on Form submit */
    onSubmit?: (values: Record<string, string | boolean | number>) => void;
  };

/**
 * Modular-ui Form component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Form
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type FormComponent = ModularComponent<FormProps>;
