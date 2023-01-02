import React, { FC } from 'components/uicontainers/404/node_modules/react';
import styles from './styles.module.scss';

interface Props {
  // title: string;
  // items: string[];
  // setItem: any;
  // setOffset?: any;
  // isSearch: boolean;
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
}

export const Dropdown: FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width
}: Props): JSX.Element => {
  return (
    <button onClick={onClick} className={`btn`}>
      {children}
    </button>
  );
};
