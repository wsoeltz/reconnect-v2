import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import ReactMarkdown from "react-markdown";

const Image = (props) => {
  console.log(props);
  return (
    <figure>
      <img src={props?.src} alt={props?.alt} />
    </figure>
  )
}

const Figcaption = ({children}) => <small><ReactMarkdown children={children} allowDangerousHtml /></small>;

const shortcodes = { Image, Figcaption }

const PostLayout = ({ children }) => (
  <div>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </div>
)

export default PostLayout;
