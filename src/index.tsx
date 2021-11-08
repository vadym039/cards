import React from 'react';
import ReactDOM from 'react-dom';
require('dotenv').config();
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.APPOLO_URI || '',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
);
