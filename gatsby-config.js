module.exports = {
  siteMetadata: {
    title: "Andy Miller III",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "f2boyawd",
        dataset: "",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
