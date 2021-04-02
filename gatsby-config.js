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
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "f2boyawd",
        dataset: "production",
      },
    },
  ],
}
