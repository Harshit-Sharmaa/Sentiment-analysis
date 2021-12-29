import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Card = (props) => {

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.imgsrc} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.username}</h5>
                        <p className="card-text">{props.tweet}</p>
                        <p className="card-text"><small className="text-muted">Created on {props.time}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;