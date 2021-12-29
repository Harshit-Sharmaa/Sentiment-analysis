import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Card = (props) => {

    return (
        <div className="card rounded-4 mb-3" style={{ maxWidth: "540px" }}>
            <div className="d-flex flex-row align-items-center p-4 gap-4">
                <img src={props.imgsrc} className="img-fluid rounded-circle h-25" alt="..." />
                <span className="user">{props.username}</span>
            </div>
            <div className="row g-0">
                <div className="col-md-8 card-body">
                    <p className="card-text">{props.tweet}</p>
                </div>
            </div>
            <div className="card-footer text-muted">
                Created on {props.time}
            </div>
        </div>
    )
}
export default Card;