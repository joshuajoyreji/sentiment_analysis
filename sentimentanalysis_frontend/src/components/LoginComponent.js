import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../utils/urls';
import axiosInstance from '../auth/authHandler';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axiosInstance
      .post(`${baseUrl}/api/token/`, {
        email: email,
        password: password,
      })
      .then(
        (res) => {
          // console.log(res)
          localStorage.setItem("access_token", res.data.access);
          localStorage.setItem("refresh_token", res.data.refresh);
          axiosInstance.defaults.headers["Authorization"] =
            "Bearer " + localStorage.getItem("access_token");
          if (res.status === 200) {
            navigate("/home");
            setIsLoggedIn(true);
          }
        },
        (error) => {
          console.log(error)
        }
      );
}
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="offset-5 mt-5">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-4">
              <label htmlFor="email" className="form-label fs-5">
                Email:<span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fs-5">
                Password:<span style={{ color: 'red' }}>*</span>
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
              Login
            </button>
          </form>
          <p className="mt-3">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
