import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("Authentication Failed");
        })
        .then((resObject) => {
          setuser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
