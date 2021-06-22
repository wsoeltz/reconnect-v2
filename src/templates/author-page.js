import React from "react"
import { graphql } from "gatsby"
import StandardContentLayout from '../components/layouts/standard-content';
import HorizontalCard from '../components/cards/HorizontalCard';

export default class AuthorList extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges
    const author = this.props.pageContext.authorName;
    return (
      <StandardContentLayout
        title={`Author: ${author}`}
        numPages={this.props.pageContext.numPages}
        currentPage={this.props.pageContext.currentPage}
        rootSlug={'/author/' + this.props.pageContext.author}
      >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.slug
          return (
            <HorizontalCard
              key={node.slug}
              to={'/' + node.slug}
              title={title}
              featuredImage={node.frontmatter.featuredImage}
              author={author}
              date={new Date(node.frontmatter.date)}
              timeToRead={node.timeToRead}
              excerpt={node.excerpt}
            />
          );
        })}
      </StandardContentLayout>
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
            featuredImage
          }
          slug
          timeToRead
          excerpt(truncate: false, pruneLength: 200)
        }
      }
    }
  }
`
