import React from 'react'
import FeedCard from '../components/FeedCard'

import "../style/css/pages/Feed.css"
import Page from './Page'

const feed = require("../data/feed").default
const societies = require("../data/societies").default

function Feed() {
    return (
        <Page title={"My Events"} className="feed">
            <div className="feed-items">
                {
                    feed &&
                    feed.map((f, i) => <FeedCard 
                        post={f}
                        society={societies[f.society]}
                        key={i}
                    />)
                }
            </div>
        </Page>
    )
}

export default Feed
