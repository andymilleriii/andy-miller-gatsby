import React from "react"
import { Link } from "gatsby"
import SanityImage from 'gatsby-plugin-sanity-image'

const ArticleCard = ({post}) => {
  return (
    <div className="rounded-md shadow bg-gradient-to-b from-gray-100 to-gray-200 flex h-72">
      <SanityImage
        {...post.mainImage}
        width="250"
        alt=""
        className="w-1/3 object-cover rounded-l-md"
      ></SanityImage>
      <div className="p-5 h-full">
        <h2 className="text-gray-600 text-sm mb-4">{post.date}</h2>
        <h1 className="font-medium text-lg tracking-widest mb-5 uppercase">
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
