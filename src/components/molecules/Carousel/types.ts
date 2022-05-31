import {
  BoxComponent,
  BuilderComponent,
  CommonProps,
  ComponentWithCallback,
  ModularComponent,
} from "../../../utils/global";

/**
 * Modular-ui Carousel component props
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Carousel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CarouselProps = CommonProps &
  Omit<BoxComponent<number>, "icon"> &
  ComponentWithCallback<number> & {
    /** Carousel elements */
    elements?: BuilderComponent[];
  };

/**
 * Modular-ui Carousel component
 *
 * @see https://cianciarusocataldo.github.io/modular-ui/components/molecules/Carousel
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
export type CarouselComponent = ModularComponent<CarouselProps>;
