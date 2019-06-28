import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  const [userName, handleNameInput] = useState("");
  const [userPass, handlePasswordInput] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

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
      <div>{isLoading ? "Loading" : errorText}</div>
      <div>{name ? name : null}</div>
      <form onSubmit={e => handleLoginSubmit(e)}>
        <input
          placeholder="UserName"
          value={userName}
          onChange={e => handleNameInput(e.target.value)}
        />
        <input
          placeholder="Password"
          value={userPass}
          onChange={e => handlePasswordInput(e.target.value)}
        />
        <button type="submit" />
      </form>
    </div>
  );
};

export default Auth;
