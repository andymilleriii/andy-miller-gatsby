import { Link } from "gatsby";
import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="min-h-70vh">{children}</div>
      </div>
      <div className="bg-gray-800 text-white mt-16 md:mt-32">
        <div className="container flex flex-col md:flex-row justify-center md:justify-between h-24 items-center">
          <p>Copyright © 2021 Andrew S. Miller III</p>
          <p><Link to="/contact">Contact</Link></p>
        </div>
      </div>
    </>
  )
}

export default Layout
