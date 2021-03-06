const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const groupBy = require('lodash/groupBy');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
      site {
        siteMetadata {
          authors {
            id
            name
          }
          categories {
            id
            name
          }
        }
      }

        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              slug
              frontmatter {
                author
                category
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog-list pages
  const posts = result.data.allMdx.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/page/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create author-list pages
  const authors = result.data.site.siteMetadata.authors;
  for (let author of authors) {
    const authoredPosts = posts.filter(d => d.node.frontmatter.author === author.id);
    const numAuthoredPages = Math.ceil(authoredPosts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i ? `/author/${author.id}/page/${i + 1}` : `/author/${author.id}`,
        component: path.resolve("./src/templates/author-page.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numAuthoredPages,
          currentPage: i + 1,
          author: author.id,
          authorName: author.name,
        },
      })
    })
  }

  // Create category-list pages
  const categories = result.data.site.siteMetadata.categories;
  for (let category of categories) {
    const categoryPosts = posts.filter(d => d.node.frontmatter.category === category.id);
    const numCategoryPages = Math.ceil(categoryPosts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i ? `/category/${category.id}/page/${i + 1}` : `/category/${category.id}`,
        component: path.resolve("./src/templates/category-page.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numCategoryPages,
          currentPage: i + 1,
          category: category.id,
          categoryName: category.name,
        },
      })
    })
  }

}
