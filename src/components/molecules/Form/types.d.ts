export interface FormProps {
  /** Form title */
  title?: string;

  /** Form fields array */
  fields?: {
    name: string;
    header?: string;
    required?: boolean;
    placeholder?: string;
    error?: string;
    validate?: (value: string) => boolean;
  }[];

  /** Custom classname applied on Form component */
  className?: string;

  /** Custom submit button label */
  submitLabel?: string;

  /** Callback on Form submit */
  onSubmit?: (values: Record<string, string>) => void;
}
