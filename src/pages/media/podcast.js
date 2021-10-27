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
      </Helmet>
      <h1 className="text-4xl uppercase">{title}</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <p className="text-xl my-14">{description} <a class="text-red-800 underline" href="https://feeds.transistor.fm/more-to-the-story-with-dr-andy-miller">View All Episodes</a></p>
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
      <iframe title="podcast" width="100%" height="390" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/more-to-the-story-with-dr-andy-miller/playlist"></iframe>
      <h1 className="text-4xl mt-14 uppercase">Captain's Corner</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <p className="text-xl my-14">Listen to an Archive of Captain's Corner. <a class="text-red-800 underline" href="https://feeds.transistor.fm/captains-corner-podcast-archives">View All Episodes</a></p>
      <iframe title="podcast" width="100%" height="390" frameborder="no" scrolling="no" seamless src="https://share.transistor.fm/e/captains-corner-podcast-archives/playlist"></iframe>
    </Layout>
  )
}

export default PodcastPage
