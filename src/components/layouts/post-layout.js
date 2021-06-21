import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';

const Figure = styled.figure`
  text-align: center;
`;

const FigcaptionEl = styled.figcaption`
  font-size: smaller;
  margin-top: -0.7rem;
  text-align: center;
`;

const Image = (props) => {
  console.log(props);
  return (
    <Figure>
      <img src={'/images/' + props?.src} alt={props?.alt} />
    </Figure>
  )
}

const Figcaption = ({children}) => <FigcaptionEl><ReactMarkdown children={children} /></FigcaptionEl>;

const shortcodes = { img: Image, Figcaption }

const PostLayout = ({ children }) => (
  <div>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </div>
)

export default PostLayout;
