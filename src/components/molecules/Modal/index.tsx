import "./styles.css";
import { ModalProps } from "./types";

import React from "react";

import classNames from "classnames";
import { buildComponent } from "../../../utils";

/**
 * A light Modal component. Can be totally customized (the overlay too, through `overlayClassName` parameter)
 * and can be driven with redux-state or internal state parameters.
 *
 * @param children Modal Content
 * @param onClose Callback triggered when modal is closed
 * @param title Modal title
 * @param overlayClassName A custom className applied on the Modal container
 *
 * @copyright 2021 Cataldo Cianciaruso
 */
const Modal = ({
  children,
  onClose,
  title,
  overlayClassName,
  className,
  ...commonProps
}: ModalProps) =>
  buildComponent({
    name: "modular-modal",
    Component: (
      <div data-id="container" className={classNames("container", className)}>
        <div className="header">
          <div className="title">{title}</div>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="content">{children}</div>
      </div>
    ),
    commonProps: { ...commonProps, className: overlayClassName },
  });

export default Modal;
