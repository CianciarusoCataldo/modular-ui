import "./styles.css";

import React from "react";
import { ModalProps } from "./types";

import classNames from "classnames";

const Modal = ({
  isVisible = false,
  Content,
  onClose,
  title,
  className,
  overlayClassname,
}: ModalProps) => (
  <div
    id="modular-modal"
    data-id="modular-modal"
    className={classNames(
      {
        hidden: !isVisible,
        default: isVisible,
      },
      overlayClassname
    )}
  >
    <div
      data-id="modular-modal-container"
      className={classNames("container", className)}
    >
      <div className="header">
        <div className="title">{title}</div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="content">{Content}</div>
    </div>
  </div>
);

export default Modal;
