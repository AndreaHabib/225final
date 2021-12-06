import React from "react";
import { Link } from "react-router-dom";

export default function EmployeeCard(props) {
  return (
    <div className="card employee" style={{ width: "18rem", margin: "10px" }}>
      {props.route === false ? (
        <img src={props.img} class="card-img-top" alt="employee" />
      ) : undefined}
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {props.route === false ? (
          <>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.dept} - {props.role}
            </h6>
            <p className="card-subtitle mt-4">{props.startDate}</p>
          </>
        ) : (
          <h6 className="card-subtitle mb-4 text-muted">{props.dept}</h6>
        )}
        {props.route === true ? (
          <Link
            to={{ pathname: `/employee/${props.id}` }}
            className="card-link"
          >
            Employee Info
          </Link>
        ) : undefined}
      </div>
    </div>
  );
}
