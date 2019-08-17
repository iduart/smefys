/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import store from "./src/store/store"
import Auth from "@aws-amplify/auth"
import { Types as AuthTypes } from "./src/store/auth"

// Wrap root element with Apollo provider and Redux provider
import rootWrapper from "./src/rootWrapper"
export const wrapRootElement = rootWrapper

export const onRouteUpdate = async () => {
  const cognitoInfo = await Auth.currentAuthenticatedUser()
  if (!cognitoInfo) {
    return
  }
  const auth = {
    signedIn: true,
    authProviderId: cognitoInfo.username,
  }
  store.dispatch({ type: AuthTypes.FETCH_AUTH, auth })
}
