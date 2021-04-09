import React from "react"
import Layout from "../../components/Layout"
import { Helmet } from "react-helmet"

const PodcastPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Andy Miller III - Podcast</title>
        <script
          defer
          type="text/javascript"
          charset="utf-8"
          src="https://www.buzzsprout.com/362981.js?container_id=buzzsprout-large-player&player=large"
        ></script>
      </Helmet>
      <h1 className="text-4xl uppercase">Podcast</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <div id="buzzsprout-large-player"></div>
    </Layout>
  )
}

export default PodcastPage
