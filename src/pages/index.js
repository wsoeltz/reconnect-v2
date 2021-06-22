import React from "react"
import { graphql } from "gatsby"
import BaseLayout from '../components/layouts/base'
import VerticalCard from '../components/cards/VerticalCard';
import FeaturedPost from '../components/cards/FeaturedPost';
import Pagination from '../components/navigation/Pagination';
import styled from 'styled-components';
import {mobileWidth, smallWidth} from '../Utils';

const Root = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60vw 1fr;

  @media (max-width: 1680px) {
    grid-template-columns: 55vw 1fr;
  }
  @media (max-width: 1500px) {
    grid-template-columns: 50vw 1fr;
  }
  @media (max-width: 1180px) {
    grid-template-columns: 45vw 1fr;
  }
  @media (max-width: ${mobileWidth}px) {
    grid-template-columns: 50vw 1fr;
  }
  @media (max-width: ${smallWidth}px) {
    display: block;
  }
`;

const Column = styled.div`
  padding: 20px 30px 60px 35px;
`;

const ColumnTitle = styled.h3`
  text-align: center;
  font-size: 21px;
  color: #525d5d;
  max-width: 200px;
  border-bottom: solid 1px #839292;
  margin: 0 auto 30px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;


export default function Home(props) {
  const {data} = props;
  const { authors } = data.site.siteMetadata
  const posts = data.allMdx.edges;
  const featuredPost = posts[0].node;
  const featuredTitle = featuredPost.frontmatter.title || featuredPost.slug;
  const featuredAuthor = authors.find(d => d.id === featuredPost.frontmatter.author)
  return (
    <BaseLayout>
      <Root>
        <FeaturedPost
          key={featuredPost.slug}
          to={'/' + featuredPost.slug}
          title={featuredTitle}
          featuredImage={featuredPost.frontmatter.featuredImage}
          author={featuredAuthor?.name}
          date={new Date(featuredPost.frontmatter.date)}
          timeToRead={featuredPost.timeToRead}
          excerpt={featuredPost.excerpt}
        />
        <Column>
          <ColumnTitle>Older Posts</ColumnTitle>
          {posts.filter((d, i) => i && i < 10).map(({ node }) => {
            const title = node.frontmatter.title || node.slug;
            const author = authors.find(d => d.id === node.frontmatter.author)
            return (
              <VerticalCard
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
          <Pagination
            currentPage={1}
            numPages={Math.ceil(posts.length / 10)}
            rootSlug={''}
          />
        </Column>
      </Root>
    </BaseLayout>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        authors {
          id
          name
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC },
      limit: 1000
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
          excerpt(truncate: false, pruneLength: 350)
        }
      }
    }
  }
`