import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header className="container flex flex-col md:flex-row justify-between items-center h-20 mt-5 mb-12">
      <Link to="/" className="text-2xl font-medium tracking-wider">ANDY MILLER III</Link>
      <nav className="md:text-lg space-x-5 tracking-wide">
        <Link to="/">HOME</Link>
        <Link to="/articles/">ARTICLES</Link>
        <Link>MEDIA</Link>
        <Link>ABOUT</Link>
        <Link>CONTACT</Link>
      </nav>
    </header>
  )
}

export default Navbar
