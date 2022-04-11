import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [user, setuser] = useState(true);
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
