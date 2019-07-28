/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

 // Wrap root element with Apollo provider and Redux provider
import rootWrapper from "./src/rootWrapper";
export const wrapRootElement = rootWrapper;