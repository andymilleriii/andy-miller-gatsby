import React from "react"

import Layout from "../components/Layout"
import Card from "../components/Card"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import picture from "../images/profile2.jpeg"
import family from "../images/family.jpeg"
import family2 from "../images/family2.jpeg"
import easter from "../images/easter.jpg"
import ArticleCard from "../components/ArticleCard"

export const query = graphql`
  {
    sanityHomePage {
      aboutHeader
      aboutImage {
        _rawAsset
      }
      aboutContent
      aboutSubHeader
      featuredPost {
        id
        mainImage {
          _rawAsset
        }
        slug {
          current
        }
        title
        body {
          _rawChildren
        }
      }
    }
    allSanityPost(limit: 2) {
      posts: nodes {
        title
        slug {
          current
        }
        mainImage {
          _rawAsset
        }
        id
        publishedAt(formatString: "MMMM D")
        body {
          _rawChildren
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {

  const {sanityHomePage:{aboutHeader, aboutImage, aboutContent, aboutSubheader, featuredPost}, allSanityPost:{posts}} = data

  return (
    <Layout>
      <Helmet>
        <script
          type="text/javascript"
          charset="utf-8"
          src="https://www.buzzsprout.com/362981.js?player=small&limit=1&container_id=buzzsprout-small-player-362981-limit-1"
        ></script>
      </Helmet>
      <section className="grid grid-cols-12 gap-5 mt-12">
        <img
          src={picture}
          alt="profile"
          className="row-span-3 col-span-4 bg-gray-100 rounded-md mb-5 h-500px w-full object-cover"
        ></img>
        <div className="col-span-8">
          <h1 className="text-3xl sm:text-7xl font-thin">{aboutHeader}</h1>
          <h2 className="text-xl sm:text-4xl text-gray-700 mt-5 font-light">
            {aboutSubheader}
          </h2>
        </div>
        <div className="col-span-12 sm:row-span-2 sm:col-span-3 sm:-ml-10 px-5 -mt-14 sm:p-0 sm:mt-0">
          <Card
            eyebrow="Featured Article"
            title={featuredPost.title}
            classes="bg-gradient-to-b from-red-800 to-red-900"
            theme="dark"
          >
            <p className="text-lg">
              A loyal soldier approached me, it was clear he had something
              important to say. It was Sunday and the holiness meeting had just
              finished. His index finger was pointed right at me ...
            </p>
            <br></br>
            <Link to={'/articles/' + featuredPost.slug.current}>Read More</Link>
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
          <h1 className="col-start-2 col-end-9 text-3xl mb-10">
            Recent Articles
          </h1>
          <div className="space-y-6">
            <ArticleCard
              date={posts[0].publishedAt}
              title={posts[0].title}
              previewText="A loyal soldier approached me, it was clear he had something important to say. It was Sunday and the holiness meeting had just finished. His index finger was pointed right at me and ..."
              slug={posts[0].slug.current}
              image={easter}
            ></ArticleCard>
            <ArticleCard
              date="March 9"
              title="Miller Family News!"
              previewText="A loyal soldier approached me, it was clear he had something important to say. It was Sunday and the holiness meeting had just finished. His index finger was pointed right at me and ..."
              slug="here-we-go-an-easter-sermon"
              image={family2}
            ></ArticleCard>
          </div>
        </section>

        <div className="w-px bg-red-900 col-start-8"></div>

        <section className="col-start-9 col-end-13">
          <h1 className="text-3xl mb-10">About</h1>
          <img
            src={family}
            className="rounded-md"
            alt="Andy Miller and Family"
          ></img>
          <p className="text-lg mt-5">
            {aboutContent}
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
