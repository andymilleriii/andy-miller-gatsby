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
        <a
          className="hidden lg:block"
          href="https://courses.andymilleriii.com/p/contender-going-deeper-in-the-book-of-jude"
          target="_blank" rel="noopener noreferrer"
        >
          Courses
        </a>
        <Link
          className="hidden lg:block"
          to="/articles"
          activeClassName="underline"
          partiallyActive={true}
        >
          Articles
        </Link>
        <NavDropdown
          label="Media"
          path="media"
          links={[
            { path: "https://courses.andymilleriii.com/p/contender-going-deeper-in-the-book-of-jude", label: "Courses", hideOnLarge: true, external: true },
            { path: "/articles", label: "Articles", hideOnLarge: true },
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
            { path: "/contact", label: "Contact", hideOnLarge: false },
          ]}
        />
        <a target="_blank" rel="noopener noreferrer" href="https://cdn.forms-content.sg-form.com/45038ab9-ea82-11ed-9cb2-9691665902a5">
          Email List
        </a>
        {/* <Link to="/contact" activeClassName="underline" className="hidden lg:block">
          Contact
        </Link> */}
        <a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/donate/?hosted_button_id=2PWT3ZXQ4QRJE">Donate</a>
      </nav>
    </header>
  )
}

export default Navbar
