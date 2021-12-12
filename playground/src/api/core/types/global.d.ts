//Shared types
declare type Status = "EMPTY" | "BUSY" | "READY" | "ERROR";
declare type AnimationKey = "NONE" | "FADE" | "SLIDE";
declare type ToastKey = "success" | "warning" | "error" | "info" | "dark";
declare type UnionOf<T> = T[keyof T];

//app.config.json types
const SupportedLanguages = ["en", "it", "es", "fr", "de"] as const;
const Namespaces = ["common", "page-titles"] as const;

declare type RouteKey =
  | "HOME"
  | "Button"
  | "Divider"
  | "Dropdown"
  | "Link"
  | "Card"
  | "Form"
  | "CheckBox"
  | "CodeBox"
  | "Input"
  | "Modal"
  | "Toggle"
  | "Table"
  | "RateBox";
declare type AllowedNamespace = typeof Namespaces[number];
declare type SupportedLanguage = typeof SupportedLanguages[number];
