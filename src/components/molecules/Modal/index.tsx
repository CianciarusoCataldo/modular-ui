import "./styles.css";

import React from "react";

import { ModalProps } from "./types";

import { buildBoxComponent } from "../../../utils";

import Button from "../../atoms/Button";

/**
 * A light Modal component. Can be totally customized (the overlay too, through `overlayClassName` parameter)
 * and can be driven with redux-state or internal state parameters.
 *
 * @param {JSX.Element | Element} children Modal Content
 * @param {()=>void} onClose Callback triggered when modal is closed
 * @param {string} title Modal title
 * @param {string} overlayClassName A custom className applied on the Modal container
 * @param {string} className `common modular-ui prop` - custom className (to better customize it)
 * @param {boolean} unstyled `common modular-ui prop` - Style/unstyle component (to better customize it)
 * @param {string} id `common modular-ui prop` - `data-id` parameter (for testing purpose, to easily find the component into the DOM)
 * @param {boolean} dark `common modular-ui prop` - Enable/disable dark mode
 * @param {boolean} hide `common modular-ui prop` - Hide/show component
 * @param {boolean} shadow `common modular-ui prop` - Enable/disable shadow behind component (to better customize it)
 *
 *@example <caption>Example Modal usage</caption>
 *import { render } from "react-dom";
 *import { Modal } from '@cianciarusocataldo/modular-ui';
 *
 * render(<Modal><div>Example modal content</div></Modal>, document.getElementById("root"));
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const Modal = ({
  children,
  onClose,
  title,
  overlayClassName,
  ...commonProps
}: ModalProps) =>
  buildBoxComponent({
    callBack: () => ({
      name: "modular-modal",
      Component: [
        <div className="header" key="modal_header">
          <div className="title">{title}</div>
          <Button
            dark={commonProps.dark}
            unstyled
            className="close-button"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 400"
              version="1.0"
              height="1.6rem"
              width="1.6rem"
            >
              <path
                fill="var(--modular-text-color)"
                d="m119.7496 67.5187-52.186 52.186 69.5301 69.5012c5.9668 5.9667 5.9668 15.5958 0 21.5625l-69.53 69.53 52.186 52.186 69.53-69.53c5.9667-5.9668 15.5958-5.9668 21.5625 0l69.53 69.53 52.186-52.186-69.53-69.53c-5.9668-5.9667-5.9668-15.5958 0-21.5625l69.53-69.5013-52.186-52.186-69.53 69.5013c-5.9667 5.9667-15.5958 5.9667-21.5625 0l-69.53-69.5012z"
              />
            </svg>
          </Button>
        </div>,
        <div className="content" key="modal_content">
          {children}
        </div>,
      ],
      commonProps: { ...commonProps, className: overlayClassName },
    }),
  });

export default Modal;
