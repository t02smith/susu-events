import React from 'react'

import { Link } from "react-router-dom"

import "../style/css/components/FeedCard.css"

function FeedCard({ post, society }) {
    return (
        <Link to={`/events/${post.eventId}`} className="feed-card">
            <div className="feed-card-title">
                <img src={society.logo} alt="" />
                <div>
                    <h2>{post.title}</h2>
                    <h3>{post.author}@<b>{society.name}</b></h3> 
                </div>
            </div>            
            <p>{post.description}</p>
            <p to={`/events/${post.eventId}`}>Read more...</p>
        </Link>
    )
}

export default FeedCard
