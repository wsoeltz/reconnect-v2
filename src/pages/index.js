import React from "react"
import { graphql, Link } from "gatsby"
import BaseLayout from '../components/layouts/base'

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  const posts = data.allMdx.edges;

  return (
    <BaseLayout>
      <h1>{title}</h1>
      <p>{description}</p>

      <div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.slug
          return (
            <div key={node.slug}>
              <Link to={'/' + node.slug}>{title}</Link>
              <br /><small>by {node.frontmatter.author} on {node.frontmatter.date}</small>
              <br /><small>{node.timeToRead} minute read</small>
            </div>
          );
        })}
      </div>
    </BaseLayout>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            author
            date
            path
            title
          }
          slug
          timeToRead
        }
      }
    }
  }
`