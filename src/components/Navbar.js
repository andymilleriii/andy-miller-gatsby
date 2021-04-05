import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header className="container flex justify-between items-center h-20 mt-5 mb-12">
      <Link to="/" className="text-2xl font-medium">Andy Miller III</Link>
      <nav className="text-lg space-x-5">
        <Link to="/">Home</Link>
        <Link to="/articles/">Articles</Link>
        <Link>Media</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar
