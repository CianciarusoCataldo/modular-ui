import "./styles.css";
import { buildComponent } from "../../../utils";
import { RateBoxProps } from "./types";

import React from "react";
import Button from "../../atoms/Button";
import { ICONS } from "./icons";

/**
 *
 * @param value actual vote
 * @param maxVote max vote (number of icons showed)
 * @param onClick callback triggered when user select a vote (as onChange)
 * @param onChange callback triggered when user select a vote (as onClick)
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const RateBox = ({
  value,
  maxVote,
  type: voteType,
  onClick,
  onChange,
  ...commonProps
}: RateBoxProps) => {
  const type = voteType || "star";
  const max = maxVote > 0 ? maxVote : 5;
  const startVote = value ? (value > max ? max : value) : -1;
  const [hoveredElement, setHover] = React.useState<number | null>(null);
  const [actualVote, setVote] = React.useState<number>(startVote);

  return buildComponent({
    name: "modular-ratebox",
    Component: (
      <div className="vote-container">
        {new Array(max).fill(" ").map((_, index) => {
          let iconToShow: "FULL" | "EMPTY" = "EMPTY";

          if (hoveredElement || hoveredElement === 0) {
            iconToShow = hoveredElement >= index ? "FULL" : "EMPTY";
          } else {
            iconToShow = index <= actualVote ? "FULL" : "EMPTY";
          }

          return (
            <Button
              noStyles
              id={`vote_${index}`}
              key={`vote_${index}`}
              onClick={() => {
                setVote(index);
                onChange && onChange(index + 1);
                onClick && onClick(index + 1);
              }}
              onMouseEnter={() => {
                setHover(index);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
            >
              {ICONS[type][iconToShow]}
            </Button>
          );
        })}
      </div>
    ),
    commonProps,
  });
};

export default RateBox;
