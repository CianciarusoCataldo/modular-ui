import React from "react";

const Wrapper = ({
  hide,
  children,
}: {
  hide?: boolean;
  children: JSX.Element;
}) => {
  if (hide) {
    return <div />;
  }

  return children;
};

export const wrapComponent = (Component: JSX.Element, hide?: boolean) => (
  <Wrapper hide={hide}>{Component}</Wrapper>
);
