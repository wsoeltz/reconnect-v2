import * as React from "react"
import { MDXProvider } from "@mdx-js/react"

const Image = (props) => {
  console.log(props);
  return (
    <figure>
      <img src={props?.src} alt={props?.alt} />
      <figcaption dangerouslySetInnerHTML={{__html: props?.title}} />
    </figure>
  )
}

const shortcodes = { img: Image }

const PostLayout = ({ children }) => (
  <div>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </div>
)

export default PostLayout;
