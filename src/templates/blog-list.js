import React from "react"
import { graphql, Link } from "gatsby"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges
    return (
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
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
