import React from "react"
import { Provider } from "react-redux"
import { ApolloProvider } from "react-apollo-hooks";
import store from "./store/store"
import { client } from "./apollo"

export default ({ element }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>{element}</Provider>
  </ApolloProvider>
)
