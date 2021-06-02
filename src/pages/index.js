import React from "react"

import Layout from "../components/Layout"
import Card from "../components/Card"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"
import ArticleCard from "../components/ArticleCard"
import PodcastPlayer from "../components/PodcastPlayer"

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
        excerpt(limit: 200)
        previewText
      }
    }
    allSanityPost(sort: { fields: publishedAt, order: DESC }, limit: 3) {
      posts: nodes {
        title
        slug {
          current
        }
        mainImage {
          asset {
            url
          }
          ...ImageWithPreview
        }
        id
        publishedAt(formatString: "MMMM D")
        previewText
        excerpt(limit: 180)
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
      <section className="grid mobile-template md:tablet-template xl:desktop-template gap-5">
        <SanityImage
          {...mainImage}
          width="600"
          alt="profile"
          className="grid-image bg-gray-100 rounded-md md:mb-5 h-500px w-full object-cover"
        ></SanityImage>
        <div className="grid-title text-center md:text-left">
          <h1 className="text-3xl sm:text-7xl font-thin uppercase">
            {aboutHeader}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-500 mt-5 font-extralight">
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
            footer={
              <Link to={"/articles/" + featuredPost.slug.current}>
                Read More
              </Link>
            }
            classes="bg-gradient-to-b from-red-800 to-red-900"
            theme="dark"
          >

              <p className="text-lg">{featuredPost.previewText ? featuredPost.previewText : featuredPost.excerpt}</p>

          </Card>
        </div>
        <div className="grid-podcast">
          <Card
            eyebrow="Untitled Podcast"
            title="Listen to the Latest Episode"
            footer={
              <Link to="/media/podcast" className="mt-5">
                All Episodes
              </Link>
            }
            classes="bg-gray-100"
          >
            <PodcastPlayer></PodcastPlayer>
          </Card>
        </div>
      </section>

      <hr className="my-14 border-red-900 border-solid"></hr>

      <div className="grid xl:grid-cols-12 gap-5">
        <section className="col-start-1 xl:col-end-7">
          <h1 className="text-3xl mb-10 uppercase">Recent Articles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
            {posts
              .filter((post) => post.id !== featuredPost.id)
              .slice(0, 2)
              .map((post) => (
                <ArticleCard post={post}></ArticleCard>
              ))}
          </div>
        </section>

        <hr className="my-14 border-red-900 border-solid xl:hidden"></hr>
        <div className="w-px bg-red-900 xl:col-start-8 hidden xl:block"></div>

        <section className= "xl:col-start-9 xl:col-end-13">
          <h1 className="text-3xl mb-10 uppercase">About</h1>
          <div className="block md:flex xl:block md:space-x-6 xl:space-x-0">
            <SanityImage
            {...aboutImage}
            width="500"
            className="rounded-md w-full md:w-80 xl:w-full object-cover"
            alt="Andy Miller and Family"
          ></SanityImage>
          <p className="text-lg mt-5">{aboutContent}</p>
          </div>

        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
