import { Button, Avatar } from '@mui/material'
import React from 'react'
import './TweetBox.css'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars.githubusercontent.com/u/58042797?v=4"/>
                    <input type="text" placeholder='write a tweet here' />
                </div>
                <input 
                    className="tweetBox__inputImage"
                    type="text" 
                    placeholder='enter image url'
                />
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
