import {
  BoxComponent,
  CommonProps,
  ComponentWithCallback,
} from "../../../utils/global";

/** Carousel component props */
export type CarouselProps = CommonProps &
  BoxComponent<number> &
  ComponentWithCallback<number> & {
    /** Carousel elements */
    elements?: (JSX.Element | Element | string)[];
  };
