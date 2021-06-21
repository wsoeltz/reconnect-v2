import * as React from "react"
import { MDXProvider } from "@mdx-js/react"

const Image = ({src}) => (<em>{src}</em>)

const shortcodes = { Image }

const PostLayout = ({ children }) => (
  <div>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </div>
)

export default PostLayout;
