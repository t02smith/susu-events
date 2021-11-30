import React from 'react'
import Feed from '../components/Feed'
import Page from './Page'

function MyFeed() {
    return (
        <Page title={"My Events"} className="feed">
            <Feed />
        </Page>
    )
}

export default MyFeed
