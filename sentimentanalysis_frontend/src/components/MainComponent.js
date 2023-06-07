import React, {useState} from "react"
import Header from "./HeaderComponent"
import Search from "./SearchComponent"
import Login from "./LoginComponent"
import Home from "./HomeComponent"
import Profile from "./ProfileComponent"
import SignUp from "./SignUpComponent"
import { Routes, Route, Navigate } from 'react-router-dom';

function Main() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogout = () => {
        setIsLoggedIn(false); // Set isLoggedIn to false
    };
    return (
        <div>
            <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
            <Routes>
                <Route path="/home" element={<Home isLoggedIn={isLoggedIn}/>} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                    path="/login"
                    element={<Login setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route
                    path="/signup"
                    element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route path="/*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    );
}

export default Main;