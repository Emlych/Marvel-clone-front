//RAF : distinction avec login et implémenter login

import axios from "axios";
import React, { useState } from "react";
import "../Modal/modal.css";

const Modal = ({ modalType, setSignupModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //handle form
  const handleName = (event) => setUsername(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:4000/user/signup", {
          username,
          email,
          password,
        });
        console.log("response ==>", response);
        if (response.data.token) setUsername(response.data.token);
      } catch (error) {
        console.log("error ==>", error.message);
        if (error.response.status === 409)
          setErrorMessage("cet email est déjà utilisé");
      }
    };
    fetchData();
  };

  return (
    <div className="modal">
      {/* modal type : sign up */}
      <div className="modal__content">
        <button
          className="close"
          onClick={() => {
            setSignupModal(false);
            document.body.style.overflow = "scroll";
          }}
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={handleName}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePassword}
          />
          <span>{errorMessage}</span>
          <input type="submit" value="S'inscrire" className="submit primary" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
