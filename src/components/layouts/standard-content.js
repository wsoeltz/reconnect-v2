import React from 'react';
import BaseLayout from './base';
import styled from 'styled-components';
import {mobileWidth} from '../../Utils';
import Pagination from '../navigation/Pagination';

const Root = styled.div`
  max-width: 1000px;
  padding: 60px;

  @media (max-width: ${mobileWidth}px) {
    padding: 30px 20px;
  }
`;

const StandardContentLayout = (props) => {

  const pagination = props.numPages && props.currentPage ? (
    <Pagination
      numPages={props.numPages}
      currentPage={props.currentPage}
      rootSlug={props.rootSlug}
    />
  ) : null;

  return (
    <BaseLayout>
      <Root>
        {props.children}
        {pagination}
      </Root>
    </BaseLayout>
  );
}

export default StandardContentLayout;
