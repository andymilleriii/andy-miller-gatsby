import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image";
import FormattedPortableText from "../../components/FormattedPortableText";
import { Helmet } from "react-helmet";

export const query = graphql`
  {
    sanityAbout {
      _rawBio(resolveReferences: { maxDepth: 5 })
      image {
        asset {
          url
        }
        ...ImageWithPreview
      }
      name
    }
  }
`;

const BioPage = ({data:{sanityAbout:{_rawBio, image, name}}}) => {
  return (
    <Layout>
      <Helmet meta=
        {[
          {
            property: `og:title`,
            content: "Andy Miller III - Bio",
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: image.asset.url,
          },
        ]}>
      </Helmet>
      <h1 className="text-4xl uppercase">Bio</h1>
      <hr className="my-14 border-red-900 border-solid"></hr>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <FormattedPortableText content={_rawBio}></FormattedPortableText>
        <SanityImage
          {...image}
          alt={name}
          width={400}
          className="max-h-96 w-full object-cover rounded-md"
        ></SanityImage>
      </div>
    </Layout>
  )
}

export default BioPage
