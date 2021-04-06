import React from "react"

import Layout from "../components/Layout"
import Card from "../components/Card"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import SanityImage from "gatsby-plugin-sanity-image"
import ArticleCard from "../components/ArticleCard"

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
      <Helmet>
        <title>Andy Miller III - Home</title>
        <script
          type="text/javascript"
          charset="utf-8"
          src="https://www.buzzsprout.com/362981.js?player=small&limit=1&container_id=buzzsprout-small-player-362981-limit-1"
        ></script>
      </Helmet>
      <section className="grid grid-cols-12 gap-5">
        <SanityImage
          {...mainImage}
          width="500"
          alt="profile"
          className="row-span-3 col-span-4 bg-gray-100 rounded-md mb-5 h-500px w-full object-cover"
        ></SanityImage>
        <div className="col-span-8">
          <h1 className="text-3xl sm:text-7xl font-thin">{aboutHeader}</h1>
          <h2 className="text-xl sm:text-4xl text-gray-700 mt-5 font-light">
            {aboutSubHeader}
          </h2>
        </div>
        <div className="col-span-12 sm:row-span-2 sm:col-span-3 sm:-ml-10 px-5 -mt-14 sm:p-0 sm:mt-0">
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
        <div className="col-span-full px-5 sm:p-0 sm:row-span-2 sm:col-span-5 ">
          <Card
            eyebrow="Untitled Podcast"
            title="Listen to the Latest Episode"
            classes="bg-gradient-to-b from-gray-100 to-gray-200"
          >
            <div id="buzzsprout-small-player-362981-limit-1"></div>
          </Card>
        </div>
      </section>

      <hr className="my-14 border-red-900 border-solid"></hr>

      <div className="grid grid-cols-12 gap-5">
        <section className="col-start-1 col-end-7">
          <h1 className="col-start-2 col-end-9 text-3xl mb-10 uppercase">
            Recent Articles
          </h1>
          <div className="space-y-6">
            <ArticleCard post={posts[0]}></ArticleCard>
            <ArticleCard post={posts[1]}></ArticleCard>
          </div>
        </section>

        <div className="w-px bg-red-900 col-start-8"></div>

        <section className="col-start-9 col-end-13">
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
