module.exports = {
  siteMetadata: {
    title: "Andy Miller III",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "f2boyawd",
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
        projectId: process.env['SANITY_PROJECT_ID'],
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
        icon: `static/android-chrome-512x512.png`
      },
    },
  ],
}
