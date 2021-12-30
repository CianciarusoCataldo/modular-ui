import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
  ComponentWithChildren,
} from "../../../utils/global";

export type CarouselProps = CommonProps &
  BoxComponent<number> &
  ComponentWithCallback<number> & {
    elements?: (JSX.Element | Element | string)[];
  };
