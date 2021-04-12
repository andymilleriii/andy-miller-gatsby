import getYouTubeID from "get-youtube-id"
import React from "react"
import PortableText from "react-portable-text"
import YoutubeEmbed from "./YoutubeEmbed"

const FormattedPortableText = ({ content }) => {
  return (
    <PortableText
      className="text-lg portable-text"
      content={content}
      serializers={{
        link: (props) => (
          <a
            className="text-red-700 underline"
            target="_blank"
            rel="noreferrer"
            {...props}
          >
            {props.children}
          </a>
        ),
        li: ({ children }) => (
          <li className="list-disc list-inside">{children}</li>
        ),
        normal: ({ children }) => <p className="text-lg mb-5">{children}</p>,
        h1: ({ children }) => (
          <h1 className="font-medium text-4xl mt-14 mb-10">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-medium text-3xl mt-14 mb-6">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-bold text-2xl mt-14 mb-5">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="font-bold text-1xl mt-14 mb-5">{children}</h4>
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-10 pl-10 border-l-2 text-gray-800 italic">
            {children}
          </blockquote>
        ),
        image: (props) => (
          <img src={props.asset.url} alt="" className="my-10 max-h-96"></img>
        ),
        youtube: ({ url }) => {
          const id = getYouTubeID(url)
          return <YoutubeEmbed embedId={id} className="mb-5"/>
        },
      }}
    ></PortableText>
  )
}

export default FormattedPortableText
