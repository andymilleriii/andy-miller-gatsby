import React, { useState } from "react"
import { Link } from "gatsby"

const NavDropdown = ({ label, path, links }) => {
  const [state, setState] = useState("hidden")

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget
    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // You can invoke a callback or add custom logic here
        setState("hidden")
      }
    }, 0)
  }

  return (
    <div role="button" className="relative group" onBlur={handleBlur}>
      <Link
        onFocus={() => setState("visible")}
        onClick={(e) => e.preventDefault()}
        to={"/" + path}
        activeClassName="underline"
        partiallyActive={true}
        className={
          "cursor-default group-hover:text-gray-500 group-hover:no-underline" +
          " " +
          (state === "visible" ? "text-gray-500 no-underline" : "")
        }
      >
        {label}
      </Link>
      <ul
        className={
          (state === "visible" ? "flex" : "hidden") +
          " " +
          "absolute z-10 bg-white group-hover:flex flex-col p-3 -left-3 space-y-2 rounded"
        }
      >
        {links.map((link) => (
          <li key={link.path}>
            {link.external ? (
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`md:whitespace-nowrap ${link.hideOnLarge && "block lg:hidden"}`}
              >{link.label}</a>
            ) : (
              <Link
                to={link.path}
                activeClassName="underline"
                className={`md:whitespace-nowrap ${link.hideOnLarge && "block lg:hidden"}`}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavDropdown
