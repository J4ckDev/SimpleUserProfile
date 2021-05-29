import React from "react";

export function Card(props) {
  return (
    <div className="card">
      <p>
        <i className="icon-user-outline"></i>
        {props.user.names} {props.user.surnames}
      </p>
      <p>
        <i className="icon-mail"></i>
        {props.user.email}
      </p>
      <p>
        <i className="icon-phone-outline"></i>
        {props.user.telephone}
      </p>
      <p>
        <i className="icon-location-outline"></i>
        {props.user.city}, {props.user.country}
      </p>
    </div>
  );
}
