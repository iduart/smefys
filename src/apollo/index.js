import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import { API } from '../utils/constants';

export const client = new ApolloClient({
  uri: API,
  fetch
})