import React, { ReactNode } from 'react';

type WrapperProps = {
  classNames?: string;
  children: ReactNode;
};

export const WrapperStyles: React.FC<WrapperProps> = ({
  classNames = '',
  children,
}) => {
  return <div className={classNames}>{children}</div>;
};
