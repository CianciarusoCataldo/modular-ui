import "./styles.css";

import React from "react";
import { ModalProps } from "./types";

import classNames from "classnames";

/**
 * A light Modal component. Can be totally customized (the overlay too, through `overlayClassName` parameter)
 * and can be driven with redux-state or internal state parameters.
 *
 * @param isVisble Modal visibility
 * @param Content Modal Content
 * @param onClose Callback triggered when modal is closed
 * @param title Modal title
 * @param className A custom className applied on the Modal overlay container
 * @param overlayClassName A custom className applied on the Modal container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Modal = ({
  isVisible = false,
  Content,
  onClose,
  title,
  className,
  overlayClassName,
}: ModalProps) => (
  <div
    id="modular-modal"
    data-id="modular-modal"
    className={classNames(
      {
        hidden: !isVisible,
        default: isVisible,
      },
      overlayClassName
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
