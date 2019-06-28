import React, { useState } from "react";
import axios from "axios";

import DonutAdmin from "./add-donuts/donut-admin";

const Auth = () => {
  const [userName, handleNameInput] = useState("");
  const [userPass, handlePasswordInput] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  const handleLoginSubmit = e => {
    setIsLoading(true);
    e.preventDefault();
    axios
      .post("https://bottega-edonut-db.herokuapp.com/login", {
        username: userName,
        password: userPass
      })
      .then(response => {
        setIsLoading(false);
        console.log(response);
        if (response.data.valid === true) {
          setName(response.data.name);
          setUserId(response.data.id);
          setIsAdmin(true);
        } else if (response.data.valid === false) {
          setErrorText(response.data.reason);
        } else {
          console.log("idek");
        }
      })
      .catch(error => {
        setErrorText("An error occurred", error);
      });
  };

  return (
    <div className="auth-wrapper">
      <div>{isLoading ? "Loading" : null}</div>
      <div>{name ? name : errorText}</div>
      <form onSubmit={e => handleLoginSubmit(e)}>
        <input
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={e => handleNameInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={userPass}
          onChange={e => handlePasswordInput(e.target.value)}
        />
        <button type="submit" />
      </form>
      {isAdmin ? <DonutAdmin name={name} userId={userId} /> : null}
    </div>
  );
};

export default Auth;
