import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';
import BaseLayout from './base';

const Figure = styled.figure`
  text-align: center;
`;

const FigcaptionEl = styled.figcaption`
  font-size: smaller;
  margin-top: -0.7rem;
  text-align: center;
`;

const Image = (props) => {
  return (
    <Figure>
      <img src={'/images/' + props?.src} alt={props?.alt} />
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
  return (
    <BaseLayout>
      <h1>
        {props.pageContext.frontmatter.title}
      </h1>
      <MDXProvider components={shortcodes}>{props.children}</MDXProvider>
    </BaseLayout>
  )
}

export default PostLayout;
