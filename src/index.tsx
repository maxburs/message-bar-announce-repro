import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  FluentProvider,
  webLightTheme,
  MessageBar,
  MessageBarBody,
  Select,
  Dropdown,
  Option,
  AriaLiveAnnouncer,
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
    case 'aria-live-announcer':
      messageElement = <AriaLiveAnnouncer><p>{alertMessage}</p></AriaLiveAnnouncer>;
      break;
    case 'aria-live':
      messageElement = <div aria-live="assertive"><p>{alertMessage}</p></div>;
      break;
    case 'role-alert':
      messageElement = <div role="alert"><p>{alertMessage}</p></div>;
      break;
    case 'aria-live--role-alert':
      messageElement = <div role="alert" aria-live="assertive"><p>{alertMessage}</p></div>;
      break;
    default:
      throw new Error(`Unexpected messageComponent "${messageComponent}"`)

  }

  return <>
    <label>
      Component type
      <select value={messageComponent} onChange={e => setMessageComponent(e.target.value)}>
        <option value='message-bar'>{'<MessageBar intent="error">'}</option>
        <option value='aria-live-announcer'>{'<AriaLiveAnnouncer />'}</option>
        <option value='aria-live'>{'<div aria-live="assertive >'}</option>
        <option value='role-alert'>{'<div role="alert" >'}</option>
        <option value='aria-live--role-alert'>{'<div role="alert" aria-live="assertive >'}</option>
      </select>
    </label>


    <label>
      Message text (immediate)
      <select value={message} onChange={e => setMessage(e.target.value)}>
        <option value='Hello'>1</option>
        <option value='Fabric Fabric Fabric'>2</option>
      </select>
    </label>

    <label>
      Message text (delayed)
      <select value={message} onChange={e => {
        const value = e.target.value;
        setTimeout(() => setMessage(value), 1000)
      }}>
        <option value='Hello'>1</option>
        <option value='Fabric Fabric Fabric'>2</option>
      </select>
    </label>


    <label>
      Message text (Fluent 9 {'<select />'})
      <Select onChange={(_e, data) => setMessage(data.value)} value={message}>
        <option value='Hello'>1</option>
        <option value='Fabric Fabric Fabric'>2</option>
      </Select>
    </label>



    <label>
      Message text (Fluent 9 {'<Dropdown />'})
      <Dropdown value={message === 'Hello' ? '1' : '2'} onOptionSelect={(_e, data) => setMessage(data.selectedOptions[0])}>
        <Option value='Hello'>1</Option>
        <Option value='Fabric Fabric Fabric'>2</Option>
      </Dropdown>
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
