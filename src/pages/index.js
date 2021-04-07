import React from "react"

import Layout from "../components/Layout"
import Card from "../components/Card"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"
import ArticleCard from "../components/ArticleCard"
import PodcastPlayer from '../components/PodcastPlayer'

export const query = graphql`
  {
    sanityHomePage {
      aboutHeader
      aboutImage {
        ...ImageWithPreview
      }
      mainImage {
        ...ImageWithPreview
      }
      aboutContent
      aboutSubHeader
      featuredPost {
        id
        mainImage {
          ...ImageWithPreview
        }
        slug {
          current
        }
        title
        previewText
      }
    }
    allSanityPost(limit: 2) {
      posts: nodes {
        title
        slug {
          current
        }
        mainImage {
          asset {url}
          ...ImageWithPreview
        }
        id
        publishedAt(formatString: "MMMM D")
        previewText
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    sanityHomePage: {
      aboutHeader,
      aboutImage,
      mainImage,
      aboutContent,
      aboutSubHeader,
      featuredPost,
    },
    allSanityPost: { posts },
  } = data

  return (
    <Layout>
      <Helmet
        meta={[
          {
            property: `og:title`,
            content: "Andy Miller III",
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: mainImage.asset.url,
          },
        ]}
      >
        <title>Andy Miller III - Home</title>
      </Helmet>
      <section className="grid mobile-template md:tablet-template lg:desktop-template gap-5">
        <SanityImage
          {...mainImage}
          width="500"
          alt="profile"
          className="grid-image bg-gray-100 rounded-md md:mb-5 h-500px w-full object-cover"
        ></SanityImage>
        <div className="grid-title text-center md:text-left">
          <h1 className="text-3xl sm:text-7xl font-thin uppercase">
            {aboutHeader}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-4xl text-gray-700 mt-5 font-light">
            {aboutSubHeader}
          </h2>
        </div>
        <div className="grid-featured md:-ml-10">
          <Card
            eyebrow="Featured Article"
            title={
              <Link to={"/articles/" + featuredPost.slug.current}>
                {featuredPost.title}
              </Link>
            }
            classes="bg-gradient-to-b from-red-800 to-red-900"
            theme="dark"
          >
            <p className="text-lg">{featuredPost.previewText}</p>
            <br></br>
            <Link to={"/articles/" + featuredPost.slug.current}>Read More</Link>
          </Card>
        </div>
        <div className="grid-podcast">
          <Card
            eyebrow="Untitled Podcast"
            title="Listen to the Latest Episode"
            classes="bg-gradient-to-b from-gray-100 to-gray-200"
          >
            <PodcastPlayer></PodcastPlayer>
          </Card>
        </div>
      </section>

      <hr className="my-14 border-red-900 border-solid"></hr>

      <div className="grid md:grid-cols-12 gap-5">
        <section className="col-start-1 md:col-end-7">
          <h1 className="text-3xl mb-10 uppercase">Recent Articles</h1>
          <div className="space-y-6">
            <ArticleCard post={posts[0]}></ArticleCard>
            <ArticleCard post={posts[1]}></ArticleCard>
          </div>
        </section>

        <hr className="my-14 border-red-900 border-solid md:hidden"></hr>
        <div className="w-px bg-red-900 col-start-8 hidden md:block"></div>

        <section className="md:col-start-9 md:col-end-13">
          <h1 className="text-3xl mb-10 uppercase">About</h1>
          <SanityImage
            {...aboutImage}
            width="500"
            className="rounded-md"
            alt="Andy Miller and Family"
          ></SanityImage>
          <p className="text-lg mt-5">{aboutContent}</p>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
