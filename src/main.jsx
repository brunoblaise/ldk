import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById("cxrwebapp");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
