/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import reduxWrapper from "./src/store/reduxWrapper";
export const wrapRootElement = reduxWrapper;