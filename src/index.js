import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


