import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Post from "./pages/Post";
const App = () => {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      {/* <Post /> */}
      <Login />
    </div>
  );
};

export default App;
