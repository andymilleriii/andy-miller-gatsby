import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"

export const query = graphql`
  {
    sanityVideoPage {
      videoLinks {
        title
        url
        _key
      }
    }
  }
`

const VideoPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl uppercase">Videos</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <div className="grid grid-cols-3">
        
      </div>
    </Layout>
  )
}

export default VideoPage
