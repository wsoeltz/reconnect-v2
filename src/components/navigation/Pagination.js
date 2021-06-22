import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const PageLink = styled(Link)`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  margin-right: 0.25rem;
  font-weight: 600;

  &:hover {
    background-color: #366454;
    color: #EFEBE2;
  }
`;

const CurrentPage = styled.span`
  display: inline-block;
  padding: 4px 8px;
  margin-right: 0.25rem;
  background-color: #366454;
  color: #EFEBE2;
  border-radius: 4px;
`;

const Pagination = ({numPages, currentPage, rootSlug}) => {
  if (numPages) {
    const pageLinks = [];
    for (let i = 0; i < numPages; i++) {
      let slug = rootSlug + '/page/' + (i + 1);
      if (i + 1 === 1) {
        slug = rootSlug ? rootSlug : '/';
      }
      if (i + 1 === currentPage) {
        pageLinks.push(
          <CurrentPage key={'current-' + slug}>
            {i + 1}
          </CurrentPage>
        );
      } else {
        pageLinks.push(
          <PageLink to={slug} key={slug}>
            {i + 1}
          </PageLink>
        );
      }
    }

    const prevSlug = currentPage > 2
      ? rootSlug + '/page/' + (currentPage - 1)
      : (rootSlug ? rootSlug : '/');
    const nextSlug = rootSlug + '/page/' + (currentPage + 1);

    const prevBtn = currentPage > 1 ? (
      <PageLink to={prevSlug} key={'prev-' + prevSlug}>
        {'←'}
      </PageLink>
    ) : null;
    const nextBtn = currentPage < numPages ? (
      <PageLink to={nextSlug} key={'next-' + nextSlug}>
        {'→'}
      </PageLink>
    ) : null;

    return (
      <div>
        {prevBtn}
        {pageLinks}  
        {nextBtn}
      </div>
    );
  }
  return null;
}

export default Pagination;
