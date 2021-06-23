import React from 'react';
import styled from 'styled-components';
import HorizontalCard from '../cards/HorizontalCard';

const Root = styled.div`
  margin-bottom: 4rem;
  padding: 2rem 0;
  border-top: solid 1px #9eaaaa;
`;

const RecentPosts = ({posts, authors}) => {
  return (
    <Root>
      <h2>You May Also Be Interested In</h2>
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
    </Root>
  );
}

export default RecentPosts;
