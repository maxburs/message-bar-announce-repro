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

  return <>
    <label>
      Component type
      <select defaultValue={messageComponent} onChange={e => setMessageComponent(e.target.value)}>
        <option value='message-bar'>{'<MessageBar intent="error">'}</option>
        <option value='aria-live'>{'<div aria-live="assertive >'}</option>
      </select>
    </label>


    <label>
      Message text
      <select defaultValue={message} onChange={e => setMessage(e.target.value)}>
        <option value='Hello'>Hello</option>
        <option value='Fabric Fabric Fabric'>Fabric Fabric Fabric</option>
      </select>
    </label>


    {/* <label>
      Message text
      <input defaultValue={message} onChange={e => setMessage(e.target.value)} />
    </label> */}
    {
      messageComponent === 'message-bar'
        ? <MessageBar intent="error">
          <MessageBarBody>{alertMessage}</MessageBarBody>
        </MessageBar>
        : <div aria-live="assertive">{alertMessage}</div>
    }
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
