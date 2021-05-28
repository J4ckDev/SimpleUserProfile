import React, { useState, Fragment } from "react";
import { Cards } from "./Cards";

export function Profile(props) {
  const [otherUsers, setOtherUsers] = useState(null);
  const [isOtherUsersFill, setOtherUsersFill] = useState(false);

  async function getUsers() {
    await fetch(
      "https://60aec5625b8c300017deb3a5.mockapi.io/api/users?p=1&l=10"
    )
      .then((response) => response.json())
      .then((json) => setOtherUsers(json));
      setOtherUsersFill(true);
  }

  return (
    <Fragment>
      <h2>Bienvenido {props.newUser.names.split(" ")[0]}</h2>
      <p>Esta es tu información personal</p>
      <p>{props.newUser.names}</p>
      <p>{props.newUser.surnames}</p>
      <p>{props.newUser.email}</p>
      <p>{props.newUser.telephone}</p>
      <p>{props.newUser.city}</p>
      <p>{props.newUser.country}</p>
      <button onClick={getUsers}>Ver otros usuarios</button>
      <hr />
      <Cards otherUsers={otherUsers} isOtherUsersFill={isOtherUsersFill}/>
    </Fragment>
  );
}
