import React from "react";
import { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div className="block max-w-xl space-y-5">
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <label className="block">
        <span className="text-gray-800">Full Name</span>
        <input
          className="mt-1 block w-full rounded"
          required
          ref={(node) => (name = node)}
          type="text"
          placeholder="Your name"
        />
      </label>

      <label className="block">
        <span className="text-gray-800">Email</span>
        <input
          className="mt-1 block w-full rounded"
          ref={(node) => (email = node)}
          type="email"
          placeholder="Your email"
        />
      </label>

      <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_49c39b88e56023e8af73f670f_b11402d3e8" tabindex="-1" value=""></input></div>

      <button
        className="text-lg rounded border border-black bg-gray-100 py-1 px-4"
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
};

class EmailListSubscribeForm extends Component {
    render() {
        const url =
          "https://salvationarmy.us6.list-manage.com/subscribe/post?u=49c39b88e56023e8af73f670f&amp;id=b11402d3e8";
        return (
            <MailchimpSubscribe 
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm status={status} message={message} onValidated={formData => subscribe(formData)}></CustomForm>
                )}
            />
        )
    }
}

export default EmailListSubscribeForm;
