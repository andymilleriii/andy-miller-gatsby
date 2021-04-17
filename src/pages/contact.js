import React from "react"
import Layout from "../components/Layout"
import { useForm } from "@formspree/react"

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xrgrgjpn")
  return (
    <Layout>
      <h1 className="text-4xl uppercase">Contact</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      {state.succeeded ? (
        <div>
          <p>Thank you, your submission has been received.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="block max-w-xl space-y-5">
          <label className="block">
            <span className="text-gray-700">Full Name</span>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full rounded"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Subject</span>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="mt-1 block w-full rounded"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="mt-1 block w-full rounded"
            />
          </label>
          <input type="text" name="_gotcha" className="hidden" />
          <button
            type="submit"
            className="text-lg rounded border border-black bg-gray-100 py-1 px-4"
          >
            Send
          </button>
        </form>
      )}
    </Layout>
  )
}

export default ContactPage
