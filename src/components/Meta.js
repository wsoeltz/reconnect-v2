import React from 'react';
import { Helmet } from "react-helmet"

const Meta = (props) => {
  const title = props.title ? props.title + ' | Reconnect.life' : 'Reconnect.life - Experience the world on your feet, not on your phone';
  const image = props.featuredImage ? '/images/' + props.featuredImage : '/images/default-image.jpg';
  const description = props.description ? (
      <meta name="description" content={props.description} />
  ) : null;
  const og_description = props.description ? (
      <meta property="og:description" content={props.description} />
  ) : null;
  const twitter_description = props.description ? (
      <meta name="twitter:description" content={props.description} />
  ) : null;
  const article = props.article ? <meta property="og:type" content="article" /> : null;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      {description}
      {og_description}
      {twitter_description}
      {article}
      <meta name="image" content={image} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default Meta;
