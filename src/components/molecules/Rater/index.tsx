import "./styles.css";
import { buildBoxComponent } from "../../../utils";
import { RaterProps } from "./types";
import { ICONS } from "./icons";

import React from "react";
import Button from "../../atoms/Button";
import classNames from "classnames";

const MAX = 5;

/**
 *
 * @param value actual value
 * @param max max value (number of icons showed)
 * @param type vote icons type
 * @param onClick callback triggered when user select a vote (as onChange)
 * @param onChange callback triggered when user select a vote (as onClick)
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
  let startMax = max || MAX;

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
