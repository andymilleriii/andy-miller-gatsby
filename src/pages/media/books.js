import React from "react"
import Layout from "../../components/Layout"
import SanityImage from "gatsby-plugin-sanity-image"
import { graphql } from "gatsby"

export const query = graphql`
  {
    sanityBookPage {
      books {
        image {
          ...ImageWithPreview
        }
        description
        link
        subtitle
        title
      }
    }
  }
`

const BookPage = ({
  data: {
    sanityBookPage: { books },
  },
}) => {
  return (
    <Layout>
      <h1 className="text-4xl uppercase">Books</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <div className="space-y-20">
      {books.map((book) => (
        <div key={book.title} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 mb-10">
          <SanityImage
            {...book.image}
            alt={book.title}
            width={500}
            className="w-full"
          ></SanityImage>
          <div className="col-span-1 xl:col-span-2">
            <h1 className="text-4xl font-serif mb-3">{book.title}</h1>
            <h1 className="text-xl uppercase mb-7">{book.subtitle}</h1>
            <p className="text-lg mb-10">{book.description}</p>
            <a
              target="_blank"
              rel="noreferrer"
              href={book.link}
              className="text-red-800 border  bg-white border-red-800 text-center rounded-md py-2 px-4 uppercase hover:bg-red-50"
            >
              Learn More
            </a>
          </div>
        </div>
        ))}
        </div>
    </Layout>
  )
}

export default BookPage
