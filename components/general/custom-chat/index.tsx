import React from 'react';
import { CustomChat } from 'react-facebook';

import styles from './styles.module.scss';

interface Props {
  chatSupport?: boolean;
}

export const MessengerChat = ({ chatSupport }: Props) => {
  return (
    <div className={chatSupport ? styles.hiddenContainer : ''}>
      <CustomChat pageId="109129984703261" minimized={false} />
    </div>
  );
};
