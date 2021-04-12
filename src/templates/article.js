import React from "react"
import Layout from "../components/Layout"
import FormattedPortableText from "../components/FormattedPortableText"
import SanityImage from "gatsby-plugin-sanity-image"
import { Helmet } from "react-helmet"

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      _rawBody(resolveReferences: { maxDepth: 5 })
      mainImage {
        asset {
          url
        }
        ...ImageWithPreview
      }
      publishedAt(formatString: "MMMM D YYYY")
      title
      previewText
      excerpt
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
            content: data.sanityPost.excerpt,
          },
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
          <h1 className="text-2xl sm:text-4xl lg:text-5xl mt-14 uppercase tracking-wider">
            {data.sanityPost.title}
          </h1>
          <h2 className="text-red-800 mt-3">{data.sanityPost.publishedAt}</h2>
          <hr className="my-14 border-red-900 border-solid"></hr>
          <FormattedPortableText
            content={data.sanityPost._rawBody}
          ></FormattedPortableText>
        </article>
      </main>
    </Layout>
  )
}

export default Article
