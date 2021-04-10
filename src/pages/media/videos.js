import React from "react"
import Layout from "../../components/Layout"
import YoutubeEmbed from "../../components/YoutubeEmbed.js"
import { graphql } from "gatsby"
import getYouTubeID from "get-youtube-id"

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

const VideoPage = ({
  data: {
    sanityVideoPage: { videoLinks },
  },
}) => {
  return (
    <Layout>
      <h1 className="text-4xl uppercase">Videos</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {videoLinks.map((link) => (
          <div>
            <h1 className="overflow-ellipsis overflow-hidden whitespace-nowrap text-xl mb-6 w-11/12">
              <a
                href={link.url}
                key={link._key}
                target="_blank"
                rel="noreferrer"
              >
                {link.title}
              </a>
            </h1>
            <YoutubeEmbed embedId={getYouTubeID(link.url)}></YoutubeEmbed>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default VideoPage
