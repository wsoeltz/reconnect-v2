console.log('Starting script...');
const fs = require('fs');
const { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } = require('node-html-markdown');

const nhm = new NodeHtmlMarkdown(
  /* options (optional) */ {
    // ignore: ['figure', 'img', 'figcaption'],
  }, 
  /* customTransformers (optional) */ undefined
);

const outputFolder = 'src/pages/';

const data = JSON.parse(fs.readFileSync('port/content/original-posts.json'));
const posts = data.rss.channel.item;


posts.forEach(d => {
  const date = new Date(d.pubDate);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day = date.getDate();
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

  const slug = d.post_name.__cdata;
  const title = d.title;
  const featuredImage = d.featuredImage;
  const author = d.creator.__cdata.replace('.', '-');
  const category = d.category.find(dd => dd._domain === 'category')._nicename;

  const content_HTML = d.encoded[0].__cdata;
  let content_MD = nhm.translate(/* html */ content_HTML);

  content_MD = content_MD.replace(new RegExp('FIGCAPTIONSTART', 'g'), '<Figcaption>')
  content_MD = content_MD.replace(new RegExp('FIGCAPTIONEND', 'g'), '</Figcaption>')
  content_MD = content_MD.replace(new RegExp('TABLESTART', 'g'), '<ProsAndCons ')
  content_MD = content_MD.replace(new RegExp('TABLEEND', 'g'), ' />')
  content_MD = content_MD.replace(/\\\[/g, '[')
  content_MD = content_MD.replace(/\\\]/g, ']')

  content_MD = content_MD
                .replace(/http:\/\/reconnect\.life\/wp-content\/uploads\/....\/..\//g, '')
  content_MD = content_MD
                .replace(/http:\/\/reconnect\.life\//g, '/')

  fs.writeFileSync(`${dir}${slug}.mdx`,
`---
title: "${title}"
path: "/${year}/${month}/${day}/${slug}/"
author: "${author}"
category: "${category}"
featuredImage: "${featuredImage}"
date: ${year}-${month}-${day}
---

${content_MD}

`);

})

console.log('Script complete.');
