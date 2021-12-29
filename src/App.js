import React, { useState } from "react";
import "./index.css";
import Piechart from "./Piechart";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const [hashtag, setHashtag] = useState("");
  const giveValue = (event) => {
    setHashtag(event.target.value);
  };

  const newHash = "#" - hashtag.toString();
  const [Data, setData] = useState();

  const getInfo = async () => {
    console.log(hashtag.toString())
    console.log(newHash);
    const response = await fetch(
      `https://twitter-sa-api.herokuapp.com/?query=${newHash}`
    );
    const resp = await response.json();
    setData(resp);
  };

  return (
    <>
      <div className="header mb-5 rounded-bottom shadow pb-5">
        <h1 className="heading">Sentiment Analysis</h1>
        <input
          type="text"
          onChange={giveValue}
          placeholder="#yourHashtagHere"
          className="hashtag"
        />
        <button onClick={getInfo} className="button">
          Search
        </button>
      </div>
      {Data && <Piechart value={Data} />}
      {Data && (
        <Container className="my-4">
          <Row className="text-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <Col md={4} sm={6} xs={12}>
                <Card
                  imgsrc={Data?.Tweets?.tweets[i].profile_image}
                  username={Data?.Tweets?.tweets[i].user_name}
                  tweet={Data?.Tweets?.tweets[i].Tweet_Text}
                  time={Data?.Tweets?.tweets[i].created_at}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default App;
