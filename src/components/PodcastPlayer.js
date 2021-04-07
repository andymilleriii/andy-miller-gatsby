import React from 'react'
import { Helmet } from "react-helmet"

const PodcastPlayer = () => {
    return (
      <div>
        <Helmet>
          <script
            type="text/javascript"
            charset="utf-8"
            src="https://www.buzzsprout.com/362981.js?player=small&limit=1&container_id=buzzsprout"
          ></script>
        </Helmet>
        <div id="buzzsprout"></div>
      </div>
    )
}

export default PodcastPlayer
