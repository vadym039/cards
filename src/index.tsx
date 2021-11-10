import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
require('dotenv').config();
import { store } from './store';
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.APPOLO_URI || '',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
  ,
  document.getElementById('root')
);
