import React from "react"
import { Link } from "gatsby"

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
        <div className="relative group">
          <Link
            onClick={(e) => e.preventDefault()}
            to="/media"
            activeClassName="underline"
            partiallyActive={true}
            className="cursor-default group-hover:text-gray-500 group-hover:no-underline"
          >
            Media
          </Link>
          <div className="absolute z-10 bg-white hidden group-hover:flex flex-col p-3 -left-3 space-y-2 rounded">
            <Link to="/media/podcast" activeClassName="underline">
              Podcast
            </Link>
            <Link to="/media/videos" activeClassName="underline">
              Videos
            </Link>
            <Link to="/media/books" activeClassName="underline">
              Books
            </Link>
          </div>
        </div>
        <div className="relative group">
          <Link
            onClick={(e) => e.preventDefault()}
            to="/about"
            activeClassName="underline"
            partiallyActive={true}
            className="cursor-default group-hover:text-gray-500 group-hover:no-underline"
          >
            About
          </Link>
          <ul className="absolute z-10 bg-white hidden group-hover:block p-3 -left-3 space-y-2 rounded">
            <li>
              <Link to="/about/bio" activeClassName="underline">
                Bio
              </Link>
            </li>
            <li>
              <Link
                to="/about/speaking-request"
                activeClassName="underline"
                className="whitespace-nowrap"
              >
                Speaking Request
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/contact" activeClassName="underline">
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
