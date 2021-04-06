import React from "react"
import Layout from "../components/Layout"
import PortableText from "react-portable-text"
import SanityImage from "gatsby-plugin-sanity-image"

import { graphql } from "gatsby"

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
  return (
    <Layout>
      <main className="w-full">
        <article className="max-w-3xl mx-auto">
          <SanityImage
            {...data.sanityPost.mainImage}
            alt="data.sanityPost.title"
          ></SanityImage>
          <h1 className="text-2xl lg:text-4xl my-14 uppercase tracking-wider">{data.sanityPost.title}</h1>
          <hr className="my-14 border-red-900 border-solid"></hr>
          <PortableText
            className="portable-text"
            content={data.sanityPost._rawBody}
            serializers={{
              link: (props) => (
                <a className="text-red-700 underline" {...props} />
              ),
            }}
          ></PortableText>
        </article>
      </main>
    </Layout>
  )
}

export default Article
