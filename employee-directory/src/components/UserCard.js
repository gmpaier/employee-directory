import React from "react";

function UserCard(props) {
  return(
    <div className="card mb-3" style={{"maxWidth": "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.image} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name.first} {props.name.last} ({props.gender.slice(0, 1)})</h5>
            <p className="card-text">{props.nat} | {props.dob}</p>
            <p className="card-text">{props.email} | {props.phone}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard;