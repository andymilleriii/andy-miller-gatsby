import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container min-h-screen">
        <div className="">{children}</div>
      </div>
      <div className=" bg-gray-800 text-white mt-40">
        <div className="container flex justify-between h-24 items-center">
          <p>Copyright © 2021 Andrew S. Miller III</p>
          <p>Contact information</p>
        </div>
      </div>
    </>
  )
}

export default Layout
