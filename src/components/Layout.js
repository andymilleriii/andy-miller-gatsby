import { Link } from "gatsby";
import React from "react"
import { Helmet } from "react-helmet";
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Andy Miller III</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../static/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Helmet>
      <Navbar></Navbar>
      <div className="container">
        <div className="min-h-70vh">{children}</div>
      </div>
      <div className="bg-gray-800 text-white mt-16 md:mt-32">
        <div className="container flex flex-col md:flex-row justify-center md:justify-between h-24 items-center">
          <p>Copyright © 2021 Andrew S. Miller III</p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Layout
