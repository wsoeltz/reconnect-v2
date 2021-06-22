import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from '../navigation/Sidebar';
import {mobileWidth} from '../../Utils';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'IBM Plex Sans', sans-serif;
    box-sizing: border-box;
    color: #222727;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Karma', serif;
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

const BaseLayout = ({children}) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Root>
        <Sidebar />
        <div>
          {children}
        </div>
      </Root>
    </React.Fragment>
  )
}

export default BaseLayout;