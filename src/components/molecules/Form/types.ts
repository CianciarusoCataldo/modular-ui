import { BoxComponent, CommonProps } from "../../../utils/global";

/** Single Form component field */
export interface FormField {
  header?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  validate?: (value: string) => boolean;
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
    onSubmit?: (values: Record<string, string>) => void;
  };
