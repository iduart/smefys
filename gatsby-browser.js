/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import reduxWrapper from "./src/store/reduxWrapper";
export const wrapRootElement = reduxWrapper;