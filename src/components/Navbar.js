import React from "react"
import { Link } from "gatsby"
import NavDropdown from "./NavDropdown"

const Navbar = () => {
  return (
    <header className="container flex flex-col md:flex-row justify-between items-center h-20 mt-5 mb-12">
      <Link to="/" className="text-2xl font-medium tracking-wider font-serif">
        Andy Miller III
      </Link>
      <nav className="md:text-lg space-x-3 md:space-x-5 tracking-wide uppercase flex">
        <Link to="/" activeClassName="underline">
          Home
        </Link>
        <Link
          to="https://courses.andymilleriii.com/p/contender-going-deeper-in-the-book-of-jude"
          activeClassName="underline"
          partiallyActive={true}
        >
          Courses
        </Link>
        <Link
          className="hidden lg:block"
          to="articles"
          activeClassName="underline"
          partiallyActive={true}
        >
          Articles
        </Link>
        <NavDropdown
          label="Media"
          path="media"
          links={[
            { path: "articles", label: "Articles", hideOnLarge: true },
            { path: "/media/podcast", label: "Podcast" },
            { path: "/media/videos", label: "Videos" },
            { path: "/media/books", label: "Books" },
          ]}
        />
        <NavDropdown
          label="About"
          path="about"
          links={[
            { path: "/about/bio", label: "Bio" },
            { path: "/about/speaking-request", label: "Speaking Requests" },
            { path: "/about/email-list", label: "Email List" },
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
