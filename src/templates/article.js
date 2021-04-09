import React from "react"
import Layout from "../components/Layout"
import PortableText from "react-portable-text"
import SanityImage from "gatsby-plugin-sanity-image"
import { Helmet } from "react-helmet"

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      _rawBody
      mainImage {
        asset {url}
        ...ImageWithPreview
      }
      publishedAt(formatString: "MMMM D YYYY")
      title
      previewText
    }
  }
`

const Article = ({ data }) => {
  return (
    <Layout>
      <Helmet
        title={`Andy Miller III - ${data.sanityPost.title}`}
        meta={[
          {
            property: `og:title`,
            content: data.sanityPost.title,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: data.sanityPost.mainImage.asset.url,
          },
          {
            property: `og:description`,
            content: data.sanityPost.previewText
          }
        ]}
      />
      <main className="w-full">
        <article className="max-w-2xl mx-auto">
          <SanityImage
            {...data.sanityPost.mainImage}
            width="800"
            alt={data.sanityPost.title}
            className="w-full"
          ></SanityImage>
          <h1 className="text-2xl lg:text-4xl mt-14 uppercase tracking-wider">
            {data.sanityPost.title}
          </h1>
          <h2 className="text-red-800 mt-3">{data.sanityPost.publishedAt}</h2>
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
