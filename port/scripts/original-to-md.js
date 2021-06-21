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

  const content_HTML = d.encoded[0].__cdata;
  let content_MD = nhm.translate(/* html */ content_HTML);

  content_MD = content_MD.replace(new RegExp('FIGCAPTIONSTART', 'g'), '<Figcaption>')
  content_MD = content_MD.replace(new RegExp('FIGCAPTIONEND', 'g'), '</Figcaption>')

  const replacer = new RegExp(`http://reconnect.life/wp-content/uploads/${year}/${month}/`, 'g');
  content_MD = content_MD.replace(replacer, '')

  console.log(`http://localhost:8000/${year}/${month}/${day}/${slug}/`);
  fs.writeFileSync(`${dir}${slug}.mdx`,
`---
title: "${title}"
path: "/${year}/${month}/${day}/${slug}/"
date: "${date}"
---

${content_MD}

`);

})

console.log('Script complete.');
