import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      _rawBody
      mainImage {
        ...ImageWithPreview
      }
      publishedAt(formatString: "MMMM D YYYY")
      title
    }
  }
`

const Article = ({ data }) => {
  console.log(data)
  return <Layout>{data.sanityPost.title}</Layout>
}

export default Article
