import React from "react"
import { graphql, Link } from "gatsby"

export default class AuthorList extends React.Component {
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

export const authorBlogListQuery = graphql`
  query authorBlogListQuery($skip: Int!, $limit: Int!, $author: String!) {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      limit: $limit
      skip: $skip
      filter: {frontmatter: {author: {eq: $author}}}
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
