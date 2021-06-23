const inquirer = require('inquirer');
const config = require('./gatsby-config');
const fs = require('fs');

const today = new Date();
const outputFolder = 'src/pages/';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Article title:'
    },
    {
      type: 'number',
      name: 'year',
      message: 'Year:',
      default: today.getFullYear(),
    },
    {
      type: 'number',
      name: 'month',
      message: 'Month:',
      default: today.getMonth() + 1,
    },
    {
      type: 'number',
      name: 'day',
      message: 'Day:',
      default: today.getDate(),
    },
    {
      type: 'list',
      name: 'author',
      message: 'Select author:',
      choices: config.siteMetadata.authors.map(d => ({name: d.name, value: d.id})),
    },
    {
      type: 'list',
      name: 'category',
      message: 'Select category:',
      choices: config.siteMetadata.categories.map(d => ({name: d.name, value: d.id})),
    },
    {
      type: 'input',
      name: 'featuredImage',
      message: 'Cover Photo Filename:'
    },
  ])
  .then((answers) => {
    const {title, author, category, featuredImage, year} = answers;

    const slug = title.replace(/\s+/g, '-').toLowerCase().replace(/[^a-z0-9-]/gi,'');

    let month = answers.month;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = answers.day;
    if (day < 10) {
      day = `0${day}`;
    }

    if (!fs.existsSync(`${outputFolder}${year}/`)){
      fs.mkdirSync(`${outputFolder}${year}/`);
    }
    if (!fs.existsSync(`${outputFolder}${year}/${month}/`)){
      fs.mkdirSync(`${outputFolder}${year}/${month}/`);
    }
    if (!fs.existsSync(`${outputFolder}${year}/${month}/${day}/`)){
      fs.mkdirSync(`${outputFolder}${year}/${month}/${day}/`);
    }

    const dir = `${outputFolder}${year}/${month}/${day}/`;


  fs.writeFileSync(`${dir}${slug}.mdx`,
`---
title: "${title}"
path: "/${year}/${month}/${day}/${slug}/"
author: "${author}"
category: "${category}"
featuredImage: "${featuredImage}"
date: ${year}-${month}-${day}
---

import { graphql } from "gatsby"

[comment]: # (  ARTICLE CONTENT BEGINS HERE  )

# Hello, world!

Write the content of the article here using markdown. Do not remove anything above or below the comments. For a syntax guide, [see this page here](https://daringfireball.net/projects/markdown/syntax).

If changing the metadata, make sure the author and category match what is found in the ${"`"}gatsby-config.js${"`"} file. If changing the date, only change the file structure if it is okay if the url changes. The url is based on the file structure and file name. ${"`"}path${"`"} should reflect that.

[comment]: # (  ARTICLE CONTENT ENDS HERE  )

export const pageQuery = graphql${"`"}
  query {
    site {
      siteMetadata {
        authors {
          id
          name
        }
        categories {
          id
          name
        }
      }
    }
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      limit: 6
      filter: {frontmatter: {category: {eq: "${category}" }}}
    ) {
      edges {
        node {
          frontmatter {
            author
            date
            path
            title
            featuredImage
          }
          slug
          timeToRead
          excerpt(truncate: false, pruneLength: 200)
        }
      }
    }
  }
${"`"}

`);

  console.log('Post created! It can be found at ');
  console.log(`${dir}${slug}.mdx`);

  })
  .catch((error) => {
    console.log(error);
    console.log("Unable to run post generator");
  });
