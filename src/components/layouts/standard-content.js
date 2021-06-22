import React from 'react';
import BaseLayout from './base';
import styled from 'styled-components';
import {mobileWidth} from '../../Utils';
import Pagination from '../navigation/Pagination';

const Root = styled.div`
  max-width: 1000px;
  padding: 30px 40px 30px;

  @media (max-width: ${mobileWidth}px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h1`
  margin-top: 0;
`;

const StandardContentLayout = (props) => {

  const pagination = props.numPages > 1 && props.currentPage ? (
    <Pagination
      numPages={props.numPages}
      currentPage={props.currentPage}
      rootSlug={props.rootSlug}
    />
  ) : null;

  const title = props.title ? (
    <Title>{props.title}</Title>
  ) : null;

  return (
    <BaseLayout>
      <Root>
        {title}
        {props.children}
        {pagination}
      </Root>
    </BaseLayout>
  );
}

export default StandardContentLayout;
