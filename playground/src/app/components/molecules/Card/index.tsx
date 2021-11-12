import "./styles.css";
import classnames from "classnames";

import { CardProps } from "./types";

import Divider from "app/components/atoms/Divider";
import classNames from "classnames";

const Card = ({
  title,
  className: parentClassName,
  icon,
  header,
  body,
  footer,
  titleClassName = "title-default",
  headerClassName = "header-default",
  bodyClassName = "body-default",
  footerClassName = "footer-default",
}: CardProps) => {
  return (
    <div id="modular-card">
      <div className={classnames("container-full", parentClassName)}>
        <p className={classNames("title", titleClassName)}>{title}</p>
        <div className="container-main">
          <div className="container-header">
            {icon}
            <div className={classnames("header", headerClassName)}>
              {header}
            </div>
          </div>
          <Divider />
          <div className={classnames("body", bodyClassName)}>{body}</div>
          <Divider />
          <div className={classnames("footer", footerClassName)}>{footer}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
