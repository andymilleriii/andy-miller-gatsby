import React from "react"
import Layout from "../components/Layout"
import PortableText from "react-portable-text"
import SanityImage from "gatsby-plugin-sanity-image"

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
  return (
    <Layout>
      <main className="grid grid-cols-12">
        <article className="col-start-4 col-span-6">
          <SanityImage
            {...data.sanityPost.mainImage}
            alt="data.sanityPost.title"
          ></SanityImage>
          <h1 className="text-3xl my-10">{data.sanityPost.title}</h1>
          <PortableText
            content={data.sanityPost._rawBody}
            serializers={{
              p: ({ children }) => <p className="mb-10 text-lg">{children}</p>,
            }}
          ></PortableText>
        </article>
      </main>
    </Layout>
  )
}

export default Article
