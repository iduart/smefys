/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      api {
        categories: getCategories {
          _id
          name
        }
      }
    }
  `)

  const { api = {} } = result.data
  const { categories = [] } = api

  categories.forEach(category => {
    actions.createPage({
      path: `/categories/${category._id}/items`,
      component: require.resolve("./src/templates/items.js"),
      context: {
        categoryId: category._id,
      },
    })
  })
}
