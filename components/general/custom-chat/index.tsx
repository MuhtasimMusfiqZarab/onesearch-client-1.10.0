import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class MessengerChat extends Component {
  render() {
    return (
      <FacebookProvider appId="2967314900245282" chatSupport>
        <CustomChat pageId="109129984703261" minimized={false} />
      </FacebookProvider>
    );
  }
}
