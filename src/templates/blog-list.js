import React from "react"
import { graphql } from "gatsby"
import StandardContentLayout from '../components/layouts/standard-content';
import HorizontalCard from '../components/cards/HorizontalCard';

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMdx.edges
  const { authors } = this.props.data.site.siteMetadata
    return (
      <StandardContentLayout
        numPages={this.props.pageContext.numPages}
        currentPage={this.props.pageContext.currentPage}
        rootSlug={''}
      >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.slug
          const author = authors.find(d => d.id === node.frontmatter.author)
          return (
            <HorizontalCard
              key={node.slug}
              to={'/' + node.slug}
              title={title}
              featuredImage={node.frontmatter.featuredImage}
              author={author?.name}
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

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        authors {
          id
          name
        }
      }
    }
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
            featuredImage
          }
          slug
          timeToRead
          excerpt(truncate: true, pruneLength: 200)
        }
      }
    }
  }
`
