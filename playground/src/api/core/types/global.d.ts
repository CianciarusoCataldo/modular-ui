//Shared types
declare type Status = "EMPTY" | "BUSY" | "READY" | "ERROR";
declare type AnimationKey = "NONE" | "FADE" | "SLIDE";
declare type ToastKey = "success" | "warning" | "error" | "info" | "dark";
declare type UnionOf<T> = T[keyof T];
