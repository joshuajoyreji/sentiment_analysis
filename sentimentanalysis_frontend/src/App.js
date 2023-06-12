import Main from "./components/MainComponent";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUpComponent";
import Login from "./components/LoginComponent";

function App() {
  axios
    .get("http://127.0.0.1:8000/")
    .then((response) => {
      // Handle the response data
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });

  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
