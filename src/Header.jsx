import React, { useState } from "react"

const Header = () => {
    const [hashtag, setHashtag] = useState("")

    const giveValue = (event) => {
        setHashtag(event.target.value)
    }

    const getInfo = async () => {
        console.log(hashtag)
        const response = await fetch(`https://twitter-sa-api.herokuapp.com/?query=${hashtag}`);
        const Data = await response.json();
        console.log(Data.Tweets.tweets[13].Tweet_Text)
    }
    return (
        <div className="header">
            <h1 className="heading">Sentiment Analysis</h1>
            <input type="text" onChange={giveValue} placeholder="#yourHashtagHere" className="hashtag" />
            <button onClick={getInfo} className="button">Search</button>
        </div>
    )
}

export default Header;