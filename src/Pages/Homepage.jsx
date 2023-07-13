import React from "react";
import SearchForm from "../Components/SearchForm";
import MealList from "../MealList";
import Banner from "../Components/Banner";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <SearchForm />
      <MealList />
    </div>
  );
};

export default Homepage;
