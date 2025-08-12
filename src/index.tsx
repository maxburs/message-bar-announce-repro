import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  FluentProvider,
  webLightTheme,
  MessageBar,
  MessageBarBody,
} from '@fluentui/react-components';

export const MessageBarError = ({ message }) => (
  <MessageBar intent="error">
    <MessageBarBody>{message}</MessageBarBody>
  </MessageBar>
);

const App = () => {
  return <MessageBarError message="Message bar 1" />;
};

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>
);
