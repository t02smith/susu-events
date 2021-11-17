import React from 'react'
import FeedCard from '../components/FeedCard'

import "../style/css/pages/Feed.css"

const feed = require("../data/feed").default
const societies = require("../data/societies").default

function Feed() {
    return (
        <div className="feed">
            <h1><b>My</b> Feed</h1>
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
        </div>
    )
}

export default Feed
