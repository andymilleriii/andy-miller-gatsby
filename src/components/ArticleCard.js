import React from "react"
import { Link } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"

const ArticleCard = ({ post }) => {
  return (
    <div className="rounded-md shadow bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col xl:flex-row xl:h-72">
      <div  className="h-60 w-full xl:h-full xl:w-60">
        <SanityImage
          {...post.mainImage}
          width="250"
          alt={post.title}
          className="w-full h-full object-cover rounded-t-md xl:rounded-l-md xl:rounded-r-none"
        ></SanityImage>
      </div>
      <div className="p-5 h-full">
        <h2 className="text-gray-600 text-sm mb-4">{post.publishedAt}</h2>
        <h1 className="font-medium text-lg tracking-wider mb-5 uppercase">
          <Link to={"/articles/" + post.slug.current}>{post.title}</Link>
        </h1>
        <p className="mb-6 text-lg overflow-hidden">{post.previewText}</p>
        <Link to={"/articles/" + post.slug.current} className="text-red-600">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard
