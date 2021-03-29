import React from "react"
import { Link } from "gatsby"

const ArticleCard = ({ image, date, title, previewText, slug }) => {
  return (
    <div className="rounded-md shadow bg-gradient-to-b from-gray-100 to-gray-200 flex h-72">
      <img src={image} alt="" className="w-1/3 object-cover rounded-l-md"></img>
      <div className="p-5 h-full">
        <h2 className="text-gray-600 text-sm mb-4">{date}</h2>
        <h1 className="font-medium text-lg tracking-widest mb-5">{title}</h1>
        <p className="mb-6 text-lg overflow-hidden">{previewText}</p>
        <Link to={"/articles/" + slug} className="text-red-600">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard
