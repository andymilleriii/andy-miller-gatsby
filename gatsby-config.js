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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-YD57C2HYJ6", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};
