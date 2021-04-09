import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="">{children}</div>
      </div>
      <div className=" bg-gray-800 text-white mt-32">
        <div className="container flex flex-col md:flex-row justify-center md:justify-between h-24 items-center">
          <p>Copyright © 2021 Andrew S. Miller III</p>
          <p>Contact information</p>
        </div>
      </div>
    </>
  )
}

export default Layout
