module.exports = {
  siteMetadata: {
    title: "Reconnect.life",
     description: "Experience the world on your feet, not on your phone",
     authors: [
       {id: 'kyle-soeltz', name: 'Kyle Soeltz'},
       {id: 'dan-lafleur', name: 'Dan Lafleur'},
     ],
     categories: [
       {id: 'site-updates', name: 'Site Updates', hidden: true},
       {id: 'hiking-tips', name: 'Hiking Tips'},
       {id: 'hiking-backpacking-gear-reviews', name: 'Gear Reviews'},
       {id: 'pacific-crest-trail', name: 'Pacific Crest Trail'},
       {id: 'hiking-in-new-england', name: 'New England Hiking'},
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
    "gatsby-plugin-react-helmet",
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:400,400i,700`,
          `Alegreya\:500,700,800`
        ],
        display: 'block'
      }
    }
  ],
};
