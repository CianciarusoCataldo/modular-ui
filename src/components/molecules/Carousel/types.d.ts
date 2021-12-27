import {
  BoxComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

export type CarouselProps = CommonProps &
  BoxComponent<number> & {
    elements?: (JSX.Element | Element | string)[];
  };
