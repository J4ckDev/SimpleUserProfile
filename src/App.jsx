import React, { useState, Fragment } from "react";
import { Form } from "./components/Form";
import { Profile } from "./components/Profile";
export function App() {
  const [newUser, setNewUser] = useState(null);
  const [isFormVisible, setFormVisible] = useState(true);
  
  async function addUser(user) {
    console.log(JSON.stringify(user));
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    await fetch(
      "https://60aec5625b8c300017deb3a5.mockapi.io/api/users",
      options
    )
      .then((response) => response.json())
      .then((json) => {
        setNewUser(json);
      });
    setFormVisible(false);
  }  

  return (
    <Fragment>
      {isFormVisible === true ? (
        <Form addUser={addUser} />
      ) : (
        <Profile newUser={newUser} />
      )}
    </Fragment>
  );
}
