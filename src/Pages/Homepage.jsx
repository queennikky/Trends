import React from "react";
import SearchForm from "../components/SearchForm";
import MealList from "../MealList";

const Homepage = () => {
  return (
    <div>
      <SearchForm />
      <MealList />
    </div>
  );
};

export default Homepage;
