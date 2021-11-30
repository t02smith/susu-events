import React from 'react'
import FeedCard from './FeedCard'

import "../style/css/pages/Feed.css"

const feed = require("../data/feed").default
const societies = require("../data/societies").default

function Feed({ filter }) {
    const fd = filter ? feed.filter(s => filter(s)): feed;

    return (
        <div className="feed-items">
            {
                fd && fd.length > 0 ?
                fd.map((f, i) => <FeedCard 
                    post={f}
                    society={societies[f.society]}
                    key={i}
                />):
                <p>Nothing to show here..</p>
            }
        </div>
    )
}

export default Feed
