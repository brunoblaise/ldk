import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom';
import {StoreProvider} from 'easy-peasy';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import store from './utils/store/Store';
const queryClient = new QueryClient();
ReactDOM.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Router>,
  document.getElementById('ldkwebapp'),
);
