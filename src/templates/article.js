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
          <div className="col-span-full row-start-1 row-span-1"></div>
        <article className="col-start-4 col-span-6 row-start-1">
          <SanityImage
            {...data.sanityPost.mainImage}
            alt="data.sanityPost.title"
          ></SanityImage>
          <h1 className="text-3xl my-10">{data.sanityPost.title}</h1>
          <PortableText
            className="portable-text"
            content={data.sanityPost._rawBody}
            serializers={{
              link: props => <a className="text-red-700 underline" {...props} />
            }}
          ></PortableText>
        </article>
      </main>
    </Layout>
  )
}

export default Article
