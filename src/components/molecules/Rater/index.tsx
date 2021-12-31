import "./styles.css";

import React from "react";
import classNames from "classnames";

import { RaterProps } from "./types";

import { buildBoxComponent } from "../../../utils";
import { ICONS } from "./icons";

import Button from "../../atoms/Button";

/**
 * A vote manager component, really useful to let the user leave a review
 *
 * @param {number} value actual vote
 * @param {number} max max vote (max number of icons showed)
 * @param {"star"|"circle"} type vote icons type
 * @param {(newVote:number)=>void} onChange callback triggered when user select a vote
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Rater usage</caption>
 *import { render } from "react-dom";
 *import { Rater } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Rater type="circle" value={3} />, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Rater = ({
  value,
  max,
  type,
  onChange,
  className,
  vertical,
  icon,
  label,
  ...commonProps
}: RaterProps) => {
  const voteType = type || "star";
  let startMax = max || 5;

  return buildBoxComponent<number>({
    callBack: (actualValue, setValue) => {
      const [hoveredElement, setHover] = React.useState<number | null>(null);
      const [maxValue, setMax] = React.useState<number>(startMax);

      React.useEffect(() => {
        if (max) {
          setMax(Number.parseInt(String(max)));
        }
      }, [max]);

      let iconArray = [];

      for (let i: number = 0; i < maxValue; ++i) {
        let iconToShow: "FULL" | "EMPTY" = "EMPTY";

        if (hoveredElement || hoveredElement === 0) {
          iconToShow = hoveredElement >= i ? "FULL" : "EMPTY";
        } else {
          iconToShow = i + 1 <= actualValue ? "FULL" : "EMPTY";
        }

        iconArray.push(
          <Button
            unstyled
            onClick={() => {
              let newVote: number = i + 1;
              setValue(newVote);
              onChange && onChange(i + 1);
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            id={`vote_${i}`}
            key={`vote_${i}`}
          >
            {ICONS[voteType][iconToShow]}
          </Button>
        );
      }

      return {
        name: "modular-ratebox",
        Component: iconArray.map((element) => element),
        commonProps: {
          ...commonProps,
          className: classNames({
            vertical: vertical,
            horizontal: !vertical,
          }),
        },
      };
    },
    value,
    defaultValue: 0,
    label,
  });
};

export default Rater;
