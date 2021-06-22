import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {smallWidth, headerFont} from '../../Utils';

const Root = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;

  @media (max-width: ${smallWidth}px) {
    position: relative;
    height: auto;
    min-height: 100vh;
  }
`;

const Featured = styled.h3`
  text-align: center;
  font-size: 21px;
  color: #fff;
  max-width: 200px;
  border-bottom: solid 1px #fff;
  margin: 0 auto 0;
  font-weight: 500;
  letter-spacing: 0.3px;
  position: relative;
  top: 20px;
`;

const Card = styled.div`
  margin-top: auto;
  padding: 0 5% 20px 5%;
  width: 100%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -250px;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, #222727 100%);
    z-index: -1;
  }

  @media (max-width: ${smallWidth}px) {
    margin: 60px 20px 60px;
    width: auto;
    padding: 12px;
    position: static;
    background: rgba(239, 235, 226, 0.8);
    border-radius: 8px;
  }
`;

const Title = styled.h2`
  margin-bottom: 16px;
  line-height: 1.2;
`;
const TitleLink = styled(Link)`
  color: #EFEBE2;
  font-size: 45px;
  text-decoration: none;
  font-family: ${headerFont};
  position: relative;

  &:hover {
    color: #222727;
    background-color: #EFEBE2;
  }

  @media (max-width: ${smallWidth}px) {
    color: #222727;
    border-color: #9eaaaa;
    font-size: 32px;
  }
`;
const EntryDetails = styled.div`
  font-size: 14px;
  color: #EFEBE2;
  font-style: italic;
  display: block;
  margin-bottom: 20px;

  @media (max-width: ${smallWidth}px) {
    color: #222727;
  }
`;

const Excerpt = styled.p`
  color: #EFEBE2;
  border-top: solid 1px #EFEBE2;
  padding-top: 27px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${smallWidth}px) {
    color: #222727;
    border-color: #9eaaaa;
  }
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  border: solid 1px #EFEBE2;
  color: #EFEBE2;
  padding: 4px;
  border-radius: 4px;
  margin-top: 16px;
  margin-left: auto;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: none;
    background-color: #EFEBE2;
    color: #222727;
  }

  @media (max-width: ${smallWidth}px) {
    color: #EFEBE2;
    border-color: #366454;
    background-color: #366454;

    &:hover {
      color: #EFEBE2;
      background-color: #447e6a;
      border-color: #447e6a;
    }
  }
`;

const FeaturedPost = ({to, title, featuredImage, author, date, timeToRead, excerpt}) => {
  return (
    <Root
      style={{backgroundImage: `url("/images/${featuredImage}")`}}
    >
      <div><Featured>Featured</Featured></div>
      <Card>
        <Title>
          <TitleLink to={to}>
            {title}
          </TitleLink>
        </Title>
        <EntryDetails>
          {date.getMonth() + 1}.{date.getUTCDate()}.{date.getFullYear()} - {author}
        </EntryDetails>
        <Excerpt>
          {excerpt}
          <br />
          <ReadMoreButton to={to}>
            Continue Reading »
          </ReadMoreButton>
        </Excerpt>
      </Card>
    </Root>
  );
}

export default FeaturedPost;
