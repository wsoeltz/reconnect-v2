module.exports = {
  siteMetadata: {
    title: "Reconnect.life",
     description: "Experience the world on your feet, not on your phone",
     authors: [
       {id: 'kyle-soeltz', name: 'Kyle Soeltz'},
       {id: 'dan-lafleur', name: 'Dan Lafleur'},
     ],
     categories: [
       {id: 'hiking-tips', name: 'Hiking Tips'},
       {id: 'gear-reviews', name: 'Gear Reviews'},
       {id: 'pacific-crest-trail', name: 'Pacific Crest Trail'},
       {id: 'new-england-hiking', name: 'New England Hiking'},
       {id: 'international-hiking', name: 'International Hiking'},
     ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    'gatsby-transformer-remark',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layouts/post-layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
