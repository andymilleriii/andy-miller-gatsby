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
  return (
    <Layout>
      <main className="grid grid-cols-12">
        <article className="col-start-4 col-span-6 row-start-2">
          <SanityImage
            {...data.sanityPost.mainImage}
            alt="data.sanityPost.title"
          ></SanityImage>
          <h1 className="text-4xl my-14 uppercase tracking-wider">{data.sanityPost.title}</h1>
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
