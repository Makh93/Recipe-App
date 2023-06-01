import { Outlet, NavLink } from "react-router-dom";
import "../Components/Home.css";
import React from "react";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="Home">

      <div className="Links">
        <h1>Social Cheff</h1>
        <NavLink className="links" to="default">
          Home
        </NavLink>
        <NavLink className="links" to="recipes">
          Recipes
        </NavLink>
        <NavLink className="links" to="member">
          Member
        </NavLink>
        <NavLink className="links" to="login">
          Submit a Recipe
        </NavLink>
      </div>

      <Outlet />

      <Footer />
    </div>
  );
}
