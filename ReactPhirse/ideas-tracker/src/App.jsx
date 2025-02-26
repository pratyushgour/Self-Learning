import { useState } from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import { IdeasProvider } from "./Context/ideas";
import { UserProvider } from "./Context/User";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  
  return (
    <UserProvider>
      <IdeasProvider> 
        <Navbar />
        <main>{isLoginPage ? <Login /> : <Home />}</main>
      </IdeasProvider>
    </UserProvider>
  );
}

export default App;
