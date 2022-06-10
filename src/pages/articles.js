import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import ArticleCard from "../components/ArticleCard"

const ArticlesPage = ({ data }) => {
  const {
    allSanityPost: { nodes: posts },
  } = data

  return (
    <Layout>
      <Helmet>
        <title>Andy Miller III - Articles</title>
      </Helmet>
      <h1 className="text-4xl uppercase">Articles</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
        {posts.map((post) => (
          <ArticleCard post={post}></ArticleCard>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        title
        slug {
          current
        }
        mainImage {
          ...ImageWithPreview
        }
        id
        previewText
        excerpt(limit: 180)
        publishedAt(formatString: "MMMM D YYYY")
      }
    }
  }
`

export default ArticlesPage
