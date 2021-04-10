import React from "react"
import Layout from "../../components/Layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image";

export const query = graphql`
  {
    sanityPodcast {
      title
      description
      links {
        _key
        image {
          ...Image
        }
        url
      }
    }
  }
`

const PodcastPage = ({data:{sanityPodcast:{title, description, links}}}) => {
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
      <h1 className="text-4xl uppercase">{title}</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <p className="text-xl my-14">{description}</p>
      <div className="grid grid-cols-2 gap-5 md:flex md:space-x-5 mb-14">
        {links.map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            key={link._key}
            width="200"
          >
            <SanityImage {...link.image}></SanityImage>
          </a>
        ))}
      </div>
      <div id="buzzsprout-large-player"></div>
    </Layout>
  )
}

export default PodcastPage
