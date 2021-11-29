import "./styles.css";
import { ModalProps } from "./types";

import React from "react";

import classNames from "classnames";
import { wrapComponent } from "../Wrapper";

/**
 * A light Modal component. Can be totally customized (the overlay too, through `overlayClassName` parameter)
 * and can be driven with redux-state or internal state parameters.
 *
 * @param isVisble Modal visibility
 * @param children Modal Content
 * @param onClose Callback triggered when modal is closed
 * @param title Modal title
 * @param className A custom className applied on the Modal overlay container
 * @param overlayClassName A custom className applied on the Modal container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Modal = ({
  isVisible = false,
  children,
  onClose,
  title,
  className,
  overlayClassName,
  hide,
}: ModalProps) =>
  wrapComponent(
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
        <div className="content">{children}</div>
      </div>
    </div>,
    hide
  );

export default Modal;
