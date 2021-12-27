import { CommonProps } from "../../../utils/global";

export type FormProps = CommonProps & {
  /** Form title */
  title?: string;

  /** Form fields array */
  fields?: Record<
    string,
    {
      header?: string;
      required?: boolean;
      placeholder?: string;
      error?: string;
      validate?: (value: string) => boolean;
    }
  >;

  /** Custom submit button label */
  submitLabel?: string;

  /** Callback on Form submit */
  onSubmit?: (values: Record<string, string>) => void;
};
