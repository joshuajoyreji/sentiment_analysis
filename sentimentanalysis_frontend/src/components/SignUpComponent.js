import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/urls";

function SignUp({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/register/`, {
        username: username,
        email: email,
        password: password,
      })
      .then(
        (response) => {
          console.log(response);
          if (response.status === 201) {
            navigate("/home");
            setIsLoggedIn(true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //       const userData = {
  //         username,
  //         email,
  //         password,
  //       };

  //       const response = await axios.post(`${baseUrl}/api/signup/`, userData);

  //   if (response.status === 200) {
  //     // Signup successful, handle the response or redirect to a success page
  //     console.log(response)
  //   } else {
  //     // Signup failed, handle the error
  //   }
  // } catch (error) {
  //   console.log(error)
  //   // Handle any other errors
  // }

  //   setUsername('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="offset-5 mt-5">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-4">
              <label htmlFor="username" className="form-label fs-5">
                Username:<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
                autoComplete='off'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fs-5">
                Email:<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                autoComplete='off'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fs-5">
                Password:<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="btn bttn">
              Sign Up
            </button>
          </form>
          <p className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
