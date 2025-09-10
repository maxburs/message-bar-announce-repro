import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  FluentProvider,
  webLightTheme,
  MessageBar,
  MessageBarBody,
  Dropdown,
  Option,
} from '@fluentui/react-components';
import './index.css'

const App = () => {
  const [message, setMessage] = React.useState('Hello')
  const alertMessage = 'Alert ' + message;

  return <>
    <label>
      Message text (Fluent 9 {'<Dropdown />'})
      <Dropdown value={message === 'Hello' ? '1' : '2'} onOptionSelect={(_e, data) => setMessage(data.selectedOptions[0])}>
        <Option value='Hello'>1</Option>
        <Option value='Fabric Fabric Fabric'>2</Option>
      </Dropdown>
    </label>

    <MessageBar role="alert" intent="info">
      <MessageBarBody>{alertMessage}</MessageBarBody>
    </MessageBar>
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
