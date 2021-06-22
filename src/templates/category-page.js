import React from "react"
import { graphql, Link } from "gatsby"

export default class CategoryList extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges
    return (
      <div>
        <h1>category: {this.props.pageContext.categoryName}</h1>
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

export const categoryBlogListQuery = graphql`
  query categoryBlogListQuery($skip: Int!, $limit: Int!, $category: String!) {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      limit: $limit
      skip: $skip
      filter: {frontmatter: {category: {eq: $category}}}
    ) {
      edges {
        node {
          frontmatter {
            category
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
