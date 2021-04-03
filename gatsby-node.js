const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/article.js`)
  const result = await graphql(`
    query {
      allSanityPost {
        nodes {
          title
          slug {
            current
          }
          id
        }
      }
    }
  `)
  result.data.allSanityPost.nodes.forEach((node) => {
    createPage({
      path: `articles/${node.slug.current}`,
      component: articleTemplate,
      context: {
        title: node.title,
        slug: node.slug.current,
      },
    })
  })
}
