import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image";
import FormattedPortableText from "../../components/FormattedPortableText";

export const query = graphql`
  {
    sanityAbout {
      _rawBio
      image {
        ...ImageWithPreview
      }
      name
    }
  }
`

const BioPage = ({data:{sanityAbout:{_rawBio, image, name}}}) => {
  return (
    <Layout>
      <h1 className="text-4xl uppercase">Bio</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <div>
        <SanityImage {...image} alt={name}></SanityImage>
        <FormattedPortableText content={_rawBio}></FormattedPortableText>
      </div>
    </Layout>
  )
}

export default BioPage
