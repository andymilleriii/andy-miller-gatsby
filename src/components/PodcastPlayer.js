import React from "react"
// import { Helmet } from "react-helmet"

const PodcastPlayer = () => {
  return (
    <div>
      {/* <Helmet>
          <script
            type="text/javascript"
            charset="utf-8"
            src="https://www.buzzsprout.com/362981.js?player=small&limit=1&container_id=buzzsprout"
          ></script>
        </Helmet>
        <div id="buzzsprout"></div> */}
      <iframe
        className="w-full overflow-hidden"
        id="buzzsprout"
        scrolling="no"
        title="Podcast Player"
        src="https://www.buzzsprout.com/362981/8283813-easter-sunday-message?client_source=small_player&amp;iframe=true"
      ></iframe>
    </div>
  )
}

export default PodcastPlayer
