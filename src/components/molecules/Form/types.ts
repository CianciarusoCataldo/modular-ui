import { BoxComponent, CommonProps } from "../../../utils/global";

/** Single Form component field */
export interface FormField {
  header?: string;
  type?: "boolean" | "text" | "numeric";
}

/** Form component props */
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
