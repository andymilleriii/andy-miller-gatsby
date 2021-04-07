import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header className="container flex flex-col md:flex-row justify-between items-center h-20 mt-5 mb-12">
      <Link to="/" className="text-2xl font-medium tracking-wider">
        ANDY MILLER III
      </Link>
      <nav className="md:text-lg space-x-3 md:space-x-5 tracking-wide">
        <Link to="/" activeClassName="underline">
          HOME
        </Link>
        <Link to="/articles/" activeClassName="underline">
          ARTICLES
        </Link>
        <Link activeClassName="underline">MEDIA</Link>
        <Link activeClassName="underline">ABOUT</Link>
        <Link activeClassName="underline">CONTACT</Link>
      </nav>
    </header>
  )
}

export default Navbar
