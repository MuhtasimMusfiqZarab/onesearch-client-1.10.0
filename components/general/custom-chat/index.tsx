import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

import styles from './styles.module.scss';

interface Props {
  chatSupport?: boolean;
}

export const MessengerChat = ({ chatSupport }: Props) => {
  return (
    <div className={chatSupport ? styles.hiddenContainer : ''}>
      <FacebookProvider appId="2967314900245282" chatSupport>
        <CustomChat pageId="109129984703261" minimized={false} />
      </FacebookProvider>
    </div>
  );
};
