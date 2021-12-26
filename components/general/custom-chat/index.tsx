import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

interface Props {
  chatSupport: boolean;
}

export const MessengerChat = ({ chatSupport }: Props) => {
  return (
    <FacebookProvider appId="2967314900245282" chatSupport={false}>
      <CustomChat pageId="109129984703261" minimized={false} />
    </FacebookProvider>
  );
};
