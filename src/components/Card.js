import React from "react"

const Card = ({ eyebrow, title, footer, classes, theme, children }) => {
  return (
    <div
      className={`rounded-md h-full flex flex-col place-content-between shadow p-5 ${classes} ${
        theme === "dark" ? "text-white" : ""
      }`}
    >
      <div>
        <h1 className="italic">{eyebrow}</h1>
        <h2 className="font-medium lg:text-lg uppercase tracking-wider mt-1 mb-4">
          {title}
        </h2>
        <div>{children}</div>
      </div>
      <div className="mt-4">{footer}</div>
    </div>
  )
}

export default Card
