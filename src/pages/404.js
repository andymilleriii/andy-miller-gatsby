import { Link } from "gatsby";
import React from 'react'
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className="text-5xl text-center mt-40">Page Not Found</h1>
      <p className="text-xl text-center my-10">Sorry, the page you are looking for cannot be found.</p>
      <p className="text-center">
        <Link
          to="/"
          className="text-red-800 border  bg-white border-red-800 text-center rounded-md py-2 px-4 uppercase hover:bg-red-50"
        >
          Return Home
        </Link>
      </p>
    </Layout>
  )
}

export default NotFoundPage

