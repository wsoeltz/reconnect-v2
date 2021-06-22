import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {mobileWidth} from '../../Utils';
import {Link, graphql, useStaticQuery} from 'gatsby';
import {logo, logoMobile, hamburgerMenu} from './logo';

const sidebarWidth = 224; // in px
const sidebarMobileHeight = 50; // in px

const Root = styled.div`
  width: ${sidebarWidth}px;
  position: relative;

  @media (max-width: ${mobileWidth}px) {
    width: 100%;
    height: ${sidebarMobileHeight}px;
  }
`;

const Nav = styled.nav`
  position: fixed;
  width: ${sidebarWidth}px;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #222727;
  color: #EFEBE2;
  padding: 20px 20px 0px 20px;
  box-sizing: border-box;
  text-align: center;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000;

  @media (max-width: ${mobileWidth}px) {
    width: 100%;
    height: ${sidebarMobileHeight}px;
    padding-top: 8px;
    padding-bottom: 70px;
    overflow: hidden;

    &.mobile-menu-open {
      height: 100%;
      overflow: auto;
    }
  }
`;

const SiteTitle = styled.h1`
  margin: 0;
  padding-bottom: 27px;
`;

const Logo = styled(Link)`
  display: block;
  width: 100%;
  height: 85px;
  text-indent: -10000px;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("${logo}");

  @media (max-width: ${mobileWidth}px) {
    max-width: 180px;
    height: 60px;
    background-image: url("${logoMobile}");
  }
`;

const Hr = styled.hr`
  border: none;
  border-bottom: solid 1px #A59132;
  margin: 0 auto 27px;
  width: 90px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0 0 27px;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0;
`;

const NavLink = styled(Link)`
  padding: 7px 5px;
  transition: background-color .2s ease;
  letter-spacing: 1.2px;
  line-height: 1.6em;
  color: #EFEBE2;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  display: block;

  &:hover {
    background-color: rgba(239, 235, 226, 0.2);
  }
`;

const CopyrightInformation = styled.div`
  bottom: 10px;
  left: 0;
  padding: 20px;

  small {
    opacity: .5;
    font-size: 12px;
    letter-spacing: .6px;
    color: #EFEBE2;
  }
`;

const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: ${mobileWidth}px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 16px;
    padding: 28px 0;
    border: none;
    background-color: transparent;
    color: #EFEBE2;

    &:before {
      content: '';
      display: inline-flex;
      align-items: center;
      width: 16px;
      height: 16px;
      font-size: 28px;
      line-height: 0;
      margin-right: 8px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("${hamburgerMenu}");
    }

    &.mobile-menu-open:before {
      content: '×';
      background: none;

    }
  }
`;

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [mobileOpen])

  const data = useStaticQuery(graphql`
    query SideBarQuery {
      site {
        siteMetadata {
          categories {
            id
            name
            hidden
          }
        }
      }
    }
  `)
  const categories = data.site.siteMetadata.categories.map(d => {
    if (!d.hidden) {
      return <ListItem key={d.id}><NavLink to={"/category/" + d.id + "/"}>{d.name}</NavLink></ListItem>
    }
    return null;
  })

  return (
    <Root>
      <Nav
        className={mobileOpen ? 'mobile-menu-open' : undefined}
      >
        <header>
          <SiteTitle>
            <Logo to="/" rel="home">Reconnect.life</Logo>
          </SiteTitle>
        </header>
        <Hr />
        <List>
          <ListItem>
            <NavLink to={"/"}>Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={"/2018/01/09/about-reconnect-life/"}>About</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={"/experience-the-world-on-your-feet-not-on-your-phone/"}>Why Reconnect</NavLink>
          </ListItem>
        </List>
        <Hr />
        <List>
          {categories}
        </List>
        <Hr />
        <CopyrightInformation>
          <small>Content Copyright © Kyle Soeltz {new Date().getFullYear()}</small>
          <br /><br /><Link to="/terms-of-use"><small>Terms of Use</small></Link>
        </CopyrightInformation>
        <MobileMenuButton
          className={mobileOpen ? 'mobile-menu-open' : undefined}
          onClick={() => setMobileOpen(curr => !curr)}
        >
          Menu
        </MobileMenuButton>
      </Nav>
    </Root>
  );
}
