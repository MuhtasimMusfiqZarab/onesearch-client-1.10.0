import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick: () => void;
  radius?: string;
  width?: string;
  clsName?: string;
}

export const Button: FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  clsName
}: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={`btn ${clsName}`}>
      {children}
    </button>
  );
};
