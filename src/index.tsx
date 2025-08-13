import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  FluentProvider,
  webLightTheme,
  MessageBar,
  MessageBarBody,
} from '@fluentui/react-components';
import './index.css'

const App = () => {
  const [messageComponent, setMessageComponent] = React.useState('message-bar');
  const [message, setMessage] = React.useState('Hello')
  const alertMessage = 'Alert ' + message;

  let messageElement: React.ReactElement;

  switch (messageComponent) {
    case 'message-bar':
      messageElement = <MessageBar role="alert" intent="info">
        <MessageBarBody>{alertMessage}</MessageBarBody>
      </MessageBar>;
      break;
    case 'aria-live':
      messageElement = <div id="announce" aria-live="assertive"><span key="test">{alertMessage}</span></div>;
      break;
    case 'role-alert':
      messageElement = <div id="announce" role="alert"><span key="test">{alertMessage}</span></div>;
      break;
    case 'role-alert--aria-live':
      messageElement = <div id="announce" role="alert" aria-live="assertive"><span key="test">{alertMessage}</span></div>;
      break;
    default:
      throw new Error(`Unexpected messageComponent "${messageComponent}"`)

  }

  return <>
    <label>
      Component type
      <select defaultValue={messageComponent} onChange={e => setMessageComponent(e.target.value)}>
        <option value='message-bar'>{'<MessageBar intent="error">'}</option>
        <option value='aria-live'>{'<div aria-live="assertive >'}</option>
        <option value='role-alert'>{'<div role="alert" >'}</option>
        <option value='aria-live--role-alert'>{'<div role="alert" aria-live="assertive >'}</option>
      </select>
    </label>


    <label>
      Message text
      <select defaultValue={message} onChange={e => setTimeout(() => setMessage(e.target.value), 1000)}>
        <option value='Hello'>1</option>
        <option value='Fabric Fabric Fabric'>2</option>
      </select>
    </label>

    {messageElement}
  </>;
};

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>
);
