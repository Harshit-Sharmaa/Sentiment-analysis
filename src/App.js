import React, { useState } from "react"
import "./index.css"
import Piechart from "./Piechart"
import Card from "./Card"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap"


const App = () => {
  const [hashtag, setHashtag] = useState("")
  const giveValue = (event) => {
    setHashtag(event.target.value)
  }
  const [Data, setData] = useState()

  const getInfo = async () => {
    console.log(hashtag)
    const response = await fetch(`https://twitter-sa-api.herokuapp.com/?query=${hashtag}`);
    const resp = await response.json()
    setData(resp)
  }



  return (
    <>
      <div className="header">
        <h1 className="heading">Sentiment Analysis</h1>
        <input type="text" onChange={giveValue} placeholder="#yourHashtagHere" className="hashtag" />
        <button onClick={getInfo} className="button">Search</button>
      </div>
      {Data && <Piechart value={Data} />}
      {Data &&
        <Container>
          <Row className="text-center">
            <Col md={4} sm={6} xs={6}>
              <Card imgsrc={Data?.Tweets?.tweets[0].profile_image} username={Data?.Tweets?.tweets[0].user_name} tweet={Data?.Tweets?.tweets[0].Tweet_Text} time={Data?.Tweets?.tweets[0].created_at} />
            </Col>
            <Col md={4} sm={6} xs={6}>
              <Card imgsrc={Data?.Tweets?.tweets[1].profile_image} username={Data?.Tweets?.tweets[1].user_name} tweet={Data?.Tweets?.tweets[1].Tweet_Text} time={Data?.Tweets?.tweets[1].created_at} />
            </Col>
            <Col md={4} sm={6} xs={6}>
              <Card imgsrc={Data?.Tweets?.tweets[2].profile_image} username={Data?.Tweets?.tweets[2].user_name} tweet={Data?.Tweets?.tweets[2].Tweet_Text} time={Data?.Tweets?.tweets[2].created_at} />
            </Col>
            <Col md={4} sm={6} xs={6}>
              <Card imgsrc={Data?.Tweets?.tweets[3].profile_image} username={Data?.Tweets?.tweets[3].user_name} tweet={Data?.Tweets?.tweets[3].Tweet_Text} time={Data?.Tweets?.tweets[3].created_at} />
            </Col>
            <Col md={4} sm={6} xs={6}>
              <Card imgsrc={Data?.Tweets?.tweets[4].profile_image} username={Data?.Tweets?.tweets[4].user_name} tweet={Data?.Tweets?.tweets[4].Tweet_Text} time={Data?.Tweets?.tweets[4].created_at} />
            </Col>
          </Row>
        </Container>
      }


    </>
  )

}

export default App;
