import "./styles.css";

import React from "react";
import classNames from "classnames";

import { CarouselProps } from "./types";

import { ICONS } from "../Rater/icons";

import { buildBoxComponent } from "../../../utils";

import Button from "../../atoms/Button";

/**
 * A compact carousel, to show any components (or images) as slides, with dots and arrow button to go next/previous
 *
 * @param {(string | JSX.Element | Element)[]} elements carousel elements
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Carousel usage</caption>
 *import { render } from "react-dom";
 *import { Carousel } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Carousel elements={[<div>Element 0</div>,<div>Element 1</div>]} value={1} />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Carousel = ({
  elements: actualElements,
  label,
  onChange,
  value,
  ...commonProps
}: CarouselProps) => {
  const arrowIcon = (
    <svg viewBox="0 0 250 250" width="2em" height="2em">
      <path d="M186.1 70.6c2.5-3.1 1.6-4.3-2-2.6L65.2 122c-3.6 1.6-3.6 4.3 0 6l118.9 54c3.6 1.6 4.5.5 2-2.6l-39.8-48.2c-2.5-3.1-2.5-8.1-.1-11.2l39.9-49.4z" />
    </svg>
  );

  const [activeClassName, setActiveClassname] = React.useState("");

  return buildBoxComponent<number>({
    callBack: (item, setItem) => {
      let dots = [];
      let elementsArray = [];
      const elements = actualElements || [];
      const updateItem = (newItem: number) => {
        onChange && onChange(newItem);
        setItem(newItem);
      };

      if (elements && elements.length > 0) {
        elements.forEach((element, index) => {
          elementsArray.push(
            <div
              key={`carousel_element_${index}`}
              className={classNames("element", {
                "component-hidden": index !== item,
                [activeClassName]: index === item,
              })}
            >
              {element}
            </div>
          );

          dots.push(
            <Button
              className="dot"
              unstyled
              id={`dot_${index}`}
              key={`dot_${index}`}
              onClick={() => {
                setActiveClassname(index > item ? "from-right" : "from-left");
                updateItem(index);
              }}
            >
              {index === item ? ICONS.circle.FULL : ICONS.circle.EMPTY}
            </Button>
          );
        });
      }
      return {
        name: "modular-carousel",
        Component: [
          <div className="elements" key="modular_carousel_elements">
            <Button
              dark={commonProps.dark}
              id="left_arrow"
              className="arrow prev"
              unstyled
              disabled={item === 0}
              onClick={() => {
                setActiveClassname("from-left");
                updateItem(item - 1);
              }}
            >
              {arrowIcon}
            </Button>
            {elementsArray}
            <Button
              dark={commonProps.dark}
              unstyled
              className="arrow next"
              id="right_arrow"
              disabled={item === elements.length - 1}
              onClick={() => {
                setActiveClassname("from-right");
                updateItem(item + 1);
              }}
            >
              {arrowIcon}
            </Button>
          </div>,
          <div key="modular_carousel_dots">
            <div className="dots">{dots}</div>
          </div>,
        ],
        commonProps,
      };
    },
    label,
    defaultValue: 0,
  });
};

export default Carousel;
