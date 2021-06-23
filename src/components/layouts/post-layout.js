import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';
import BaseLayout from './base';
import {Link} from 'gatsby';
import RecentPosts from '../navigation/RecentPosts';

const Header = styled.header`
  padding-top: 50vh;
  background-size: cover;
  background-position: center center;
  width: 100%;

  @media (max-width: 750px) {
    padding-top: 20vh;
  }
`;

const Content = styled.main`
  max-width: 1100px;
  padding: 0 60px;
  position: relative;

  @media (max-width: 750px) {
    padding: 0 20px;
  }
`;

const Entry = styled.article`
  max-width: 680px;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  max-width: 100%;
  padding: 80px 60px 0px 60px;
  margin-top: 0;
  margin-bottom: 50px;
  position: relative;
  top: 1px;
  background: linear-gradient(to bottom, transparent 0%, #fbfbfb 100%);
  font-weight: 500;
  line-height: 1.1;

  @media (max-width: 750px) {
    font-size: 27px;
    padding: 80px 20px 0px 20px;
  }
`;

const Meta = styled.p`
  line-height: 1.6;
  margin: 0 0 2.5rem;
`;

const Figure = styled.figure`
  text-align: center;
  width: 100%;
  text-align: center;
  margin: 27px auto 0;
`;

const Img = styled.img`
  margin: 0 auto 10px;
  display: block;
  max-width: 100%;
  max-height: 650px;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 2px rgb(34 39 39 / 30%);
`;

const FigcaptionEl = styled.figcaption`
  margin-bottom: 27px;

  p {
    color: #525d5d;
    max-width: 500px;
    margin: 0 auto;
    font-size: 13px;
    line-height: 1.7em;
    text-align: center;
  }
`;

const Image = (props) => {
  return (
    <Figure>
      <Img src={'/images/' + props?.src} alt={props?.alt} />
    </Figure>
  )
}

const ProsAndCons = ({pros, cons}) => {
  return (
    <table>
      <thead>
        <tr>
          <th><strong>Pros</strong></th>
          <th><strong>Cons</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{width: '50%'}}>
            <ul>
              {pros.map(d => <li key={d}>{d}</li>)}
            </ul>
          </td>
          <td>
            <ul>
              {cons.map(d => <li key={d}>{d}</li>)}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const Figcaption = ({children}) => <FigcaptionEl><ReactMarkdown children={children} /></FigcaptionEl>;

const shortcodes = { img: Image, Figcaption, ProsAndCons }

const PostLayout = (props) => {
  const context = props.pageContext.frontmatter;
  const data = props.data;

  const author = data.site.siteMetadata.authors.find(d => d.id === context.author);
  const category = data.site.siteMetadata.categories.find(d => d.id === context.category);

  const otherPosts = data.allMdx.edges.filter(d => d.node.frontmatter.path !== context.path);
  const recentPosts = otherPosts.length ? (
    <RecentPosts
      posts={otherPosts}
      authors={data.site.siteMetadata.authors}
    />
  ) : null;

  return (
    <BaseLayout>
      <Header style={{backgroundImage: `url("/images/${context.featuredImage}")`}}>
        <Title>
          {context.title}
        </Title>
      </Header>
      <Content>
        <Entry>
          <Meta>
            <em>{new Date(context.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            <br />
            By <Link to={'/author/' + author.id}>{author.name}</Link> in <Link to={'/category/' + category.id}>{category.name}</Link>
            </em>
          </Meta>
          <MDXProvider components={shortcodes}>{props.children}</MDXProvider>
        </Entry>
        {recentPosts}
      </Content>
    </BaseLayout>
  )
}

export default PostLayout;
