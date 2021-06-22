import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {headerFont} from '../../Utils';

const extraSmallWidth = 550; // in px

const Root = styled.div`
  min-height: 180px;
  padding: 20px;
  padding-left: 230px;
  background-color: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 1px rgb(34 39 39 / 10%);
  margin-bottom: 36px;
  position: relative;
  box-sizing: border-box;

  @media (max-width: ${extraSmallWidth}px) {
    padding: 10px;
  }
`;

const Thumbnail = styled(Link)`
  margin: 0;
  position: absolute;
  display: block;
  width: 190px;
  top: 18px;
  bottom: 18px;
  border-radius: 4px;
  left: 18px;
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;

  @media (max-width: ${extraSmallWidth}px) {
    position: static;
    height: 190px;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 23px;
  margin-bottom: 16px;
  margin-top: 0;
`;

const TitleLink = styled(Link)`
  color: #222727;
  text-decoration: none;
  font-family: ${headerFont};

  &:hover {
    text-decoration: underline;
    color: #488570;
  }
`;

const EntryDetails = styled.div`
  font-size: 14px;
  color: #697979;
  font-style: italic;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const Excerpt = styled.p`
  margin-bottom: 0;
`;

const ReadMoreButton = styled(Link)`
  white-space: nowrap;
`;

const VerticalCard = ({to, title, featuredImage, author, date, timeToRead, excerpt}) => {
  return (
    <Root>
      <Thumbnail
        to={to}
        style={{backgroundImage: `url("/images/${featuredImage}")`}}
      />
      <Title>
        <TitleLink to={to}>{title}</TitleLink>
      </Title>
      <EntryDetails>
        {date.getMonth() + 1}.{date.getUTCDate()}.{date.getFullYear()} - {author}
        <br />
        {timeToRead} minute read
      </EntryDetails>
      <Excerpt>
        {excerpt} <ReadMoreButton to={to}>Continue Reading »</ReadMoreButton>
      </Excerpt>
    </Root>
  );
}

export default VerticalCard;
