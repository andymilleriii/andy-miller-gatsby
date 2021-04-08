import React from "react"
import { Link } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"

const ArticleCard = ({ post }) => {
  return (
    <div className="rounded-md  shadow bg-gradient-to-b from-gray-100 to-gray-200 flex flex-wrap xl:h-80">
      <SanityImage
        {...post.mainImage}
        width="250"
        alt={post.title}
        className="rounded-t-md xl:rounded-r-none xl:rounded-l-md object-cover w-full h-60 xl:w-1/3 xl:h-full"
      ></SanityImage>
      <div className="p-5 xl:h-full w-full xl:w-2/3 flex flex-col place-content-between">
        <div>
          <h2 className="text-gray-600 text-sm mb-4">{post.publishedAt}</h2>
          <h1 className="font-medium text-red-800 text-lg tracking-wider mb-5 uppercase">
            <Link to={"/articles/" + post.slug.current}>{post.title}</Link>
          </h1>
          <p className="text-lg mb-6 overflow-hidden">{post.previewText}</p>
        </div>

        <Link
          to={"/articles/" + post.slug.current}
          className="text-red-800 border bg-gray-100 border-red-800 text-center rounded-md p-1 uppercase hover:bg-gray-50"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard
