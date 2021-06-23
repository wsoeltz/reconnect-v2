import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from '../navigation/Sidebar';
import {mobileWidth, headerFont, bodyFont} from '../../Utils';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #FBFBFB;
    color: #222727;
  }

  * {
    font-family: ${bodyFont};
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${headerFont};
  }

  h1 {
    font-size: 40px;
  }

  button {
    cursor: pointer;
  }

  body.mobile-menu-open {
    overflow: hidden;
  }

  p, main ul li {
    font-size: 15px;
    line-height: 1.7em;
    color: #222727;
  }

  a {
    color: #366454;
    font-weight: 600;
  }
`

const Root = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: ${mobileWidth}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const BaseLayout = ({children}) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Root>
        <Sidebar />
        <Content>
          {children}
        </Content>
      </Root>
    </React.Fragment>
  )
}

export default BaseLayout;
