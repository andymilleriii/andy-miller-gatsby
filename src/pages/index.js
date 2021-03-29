import React from "react"

import Layout from "../components/Layout"
import Card from "../components/Card"
import { Helmet } from "react-helmet"
import picture from "../images/profile2.jpeg"
import ArticleCard from "../components/ArticleCard"

const IndexPage = () => {
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
          className="row-span-3 col-span-4 bg-gray-100 rounded-md mb-5"
        ></img>
        <div className="col-span-8">
          <h1 className="text-7xl font-thin">Andy Miller</h1>
          <h2 className="text-4xl text-gray-700 mt-5 font-light">
            Preacher, Teacher, Salvationist, Writer, Podcaster
          </h2>
        </div>
        <div className="row-span-2 col-span-3 -ml-10">
          <Card
            eyebrow="Featured Article"
            title='On "Changing the Army"'
            classes="bg-gradient-to-b from-red-800 to-red-900"
            theme="dark"
          >
            <p className="text-lg">
              A loyal soldier approached me, it was clear he had something
              important to say. It was Sunday and the holiness meeting had just
              finished. His index finger was pointed right at me ...
            </p>
            <br></br>
            <p>Read More</p>
          </Card>
        </div>
        <div className="row-span-2 col-span-5 rounded shadow">
          <Card
            eyebrow="Untitled Podcast"
            title="Listen to the Latest Episode"
            classes="bg-gradient-to-b from-gray-100 to-gray-200"
          >
            <div id="buzzsprout-small-player-362981-limit-1"></div>
          </Card>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-5 mt-40">
        <section className="col-start-1 col-end-7">
          <h1 className="col-start-2 col-end-9 text-3xl mb-10">
            Recent Articles
          </h1>
          <div className="space-y-6">
            <ArticleCard
            date="March 9"
            title="Here We Go: An Easter Sermon"
            previewText="A loyal soldier approached me, it was clear he had something important to say. It was Sunday and the holiness meeting had just finished. His index finger was pointed right at me and ..."
            slug="here-we-go-an-easter-sermon"
            image={picture}
          ></ArticleCard>
          <ArticleCard
            date="March 9"
            title="Here We Go: An Easter Sermon"
            previewText="A loyal soldier approached me, it was clear he had something important to say. It was Sunday and the holiness meeting had just finished. His index finger was pointed right at me and ..."
            slug="here-we-go-an-easter-sermon"
            image={picture}
          ></ArticleCard>
          </div>


        </section>

        <div className="w-px bg-red-900 col-start-8"></div>

        <section className="col-start-9 col-end-12">
          <h1 className="text-3xl mb-10">About</h1>
          <p className="text-lg">
            Andy Miller III and his wife, Abby, lead the work of The Salvation
            Army in Tampa, Florida. Andy holds degrees from Asbury University,
            Asbury Theological Seminary, and Southern Methodist University and
            is the author of Holistic Hospitality (2015) and Stay the Course
            (2016). The Millers have three children: Andy IV, Titus Wesley, and
            Georgia. Andy loves to think, read, and strategize about the mission
            of the church when he’s not playing with his kids or rooting for the
            Chicago Cubs.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
