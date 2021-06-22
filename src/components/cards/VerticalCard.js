import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import {headerFont} from '../../Utils';

const Root = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px 20px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 1px rgb(34 39 39 / 10%);
  margin-bottom: 36px;
  position: relative;
`;

const Thumbnail = styled(Link)`
  display: block;
  border-radius: 4px 4px 0 0;
  height: 20vw;
  background-size: cover;
  background-position: center center;
  margin: -20px -20px 20px -20px;
`;

const Title = styled.h2`
  font-size: 23px;
  margin-bottom: 16px;
  line-height: 1.2;
`;

const TitleLink = styled(Link)`
  color: #222727;
  text-decoration: none;
  font-family: ${headerFont};
  font-weight: 700;

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
  line-height: 1.2;
`;

const Excerpt = styled.p`
  display: flex;
  flex-direction: column;
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  border: solid 1px #366454;
  color: #366454;
  padding: 4px;
  border-radius: 4px;
  margin-top: 16px;
  margin-left: auto;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: none;
    background-color: #366454;
    color: #EFEBE2;
  }
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
      </EntryDetails>
      <Excerpt>
        {excerpt.slice(0, 145) + '…'}
        <br />
        <ReadMoreButton to={to}>
          Continue Reading »
        </ReadMoreButton>
      </Excerpt>
    </Root>
  );
}

export default VerticalCard;
