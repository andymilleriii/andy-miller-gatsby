import React from "react"

const Card = ({ eyebrow, title, classes, theme, children }) => {
  return (
    <div
      class={`rounded-md h-full shadow p-5 ${classes} ${
        theme === "dark" ? "text-white" : ""
      }`}
    >
      <h1 className="italic uppercase">{eyebrow}</h1>
      <h2 className="font-medium text-lg tracking-widest mt-1 mb-4">{title}</h2>
      <div>{children}</div>
    </div>
  )
}

export default Card
