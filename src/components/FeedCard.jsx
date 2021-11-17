import React from 'react'

import "../style/css/components/FeedCard.css"

function FeedCard({ post, society }) {
    return (
        <div className="feed-card">
            <img src={society.logo} alt="" />
            <div className="feed-card-content">
                <h2>{post.title}</h2>
                <h3>{post.author}@<b>{society.name}</b></h3>
                <p>{post.description}</p>
            </div>
        </div>
    )
}

export default FeedCard
