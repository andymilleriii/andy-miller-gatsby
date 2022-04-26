import React from "react";
import Layout from "../../components/Layout";
import EmailListSubscribeForm from "../../components/EmailListSubscribeForm";

const EmailList = () => {
  return (
    <Layout>
      <h1 className="text-4xl uppercase">Subscribe to my mailing list</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <p className="mb-8">Subscribe to my mailing list and receive my free resource on deeper preaching and teaching.</p>
      <EmailListSubscribeForm></EmailListSubscribeForm>
    </Layout>
  );
};

export default EmailList;
