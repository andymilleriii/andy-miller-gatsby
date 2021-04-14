import React from "react"
import { Link } from "gatsby"
import NavDropdown from "./NavDropdown"

const Navbar = () => {
  return (
    <header className="container flex flex-col md:flex-row justify-between items-center h-20 mt-5 mb-12">
      <Link to="/" className="text-2xl font-medium tracking-wider">
        ANDY MILLER III
      </Link>
      <nav className="md:text-lg space-x-3 md:space-x-5 tracking-wide uppercase flex">
        <Link to="/" activeClassName="underline">
          Home
        </Link>
        <Link
          to="/articles/"
          activeClassName="underline"
          partiallyActive={true}
        >
          Articles
        </Link>
        <NavDropdown
          label="Media"
          path="media"
          links={[
            { path: "podcast", label: "Podcast" },
            { path: "videos", label: "Videos" },
            { path: "books", label: "Books" },
          ]}
        />
        <NavDropdown
          label="About"
          path="about"
          links={[
            { path: "bio", label: "Bio" },
            { path: "speaking-request", label: "Speaking Request" },
          ]}
        />
        <Link to="/contact" activeClassName="underline">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
