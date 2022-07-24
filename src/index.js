import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  environment: "production",
  dsn: "https://0e30729b3ab94e3ebc98aa0080bcd7fe@o1332782.ingest.sentry.io/6597661",
  integrations: [new BrowserTracing()],
  autoSessionTracking: true,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
