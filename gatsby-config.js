module.exports = {
  siteMetadata: {
    title: "Andy Miller III",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "o68n75np",
        dataset: "production",
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "o68n75np",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-transform-portable-text`,
      options: {
        extendTypes: [{ typeName: `SanityPost`, contentFieldName: "body" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andy Miller III`,
        short_name: `ASMIII`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `browser`,
        icon: `static/android-chrome-512x512.png`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://salvationarmy.us6.list-manage.com/subscribe/post?u=49c39b88e56023e8af73f670f&amp;id=b11402d3e8", 
        timeout: 3500, 
      },
    },
  ],
};
