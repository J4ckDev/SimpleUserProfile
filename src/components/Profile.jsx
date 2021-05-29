import React, { useState, Fragment } from "react";
import { Cards } from "./Cards";

export function Profile(props) {
  const [otherUsers, setOtherUsers] = useState(null);
  const [isOtherUsersFill, setOtherUsersFill] = useState(false);

  async function getUsers() {
    await fetch("https://60aec5625b8c300017deb3a5.mockapi.io/api/users?p=1&l=9")
      .then((response) => response.json())
      .then((json) => setOtherUsers(json));
    setOtherUsersFill(true);
  }

  return (
    <Fragment>
      <div className="profile">
        <div className="details">
          <h2>Bienvenid@ {props.newUser.names.split(" ")[0]}</h2>
          <p>Esta es tu información personal</p>
          <p>
            <i className="icon-user-outline"></i>
            {props.newUser.names} {props.newUser.surnames}
          </p>
          <p>
            <i className="icon-mail"></i>
            {props.newUser.email}
          </p>
          <p>
            <i className="icon-phone-outline"></i>
            {props.newUser.telephone}
          </p>
          <p>
            <i className="icon-location-outline"></i>
            {props.newUser.city}, {props.newUser.country}
          </p>
          <button id="Send" onClick={getUsers}>
            Ver otros usuarios<i className="icon-users-outline"></i>
          </button>
        </div>
        <div className="cards">
          {isOtherUsersFill ? (
            <h3 className="titleCards">Usuarios registrados</h3>
          ) : null}
          <Cards otherUsers={otherUsers} isOtherUsersFill={isOtherUsersFill} />
        </div>
      </div>
    </Fragment>
  );
}
