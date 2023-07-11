import React from "react";
import { useGlobalContext } from "./context";
import Loading from "./Components/Loading";

const MealList = () => {
  const { isLoading, foods } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }
  if (foods.length < 1) {
    return <h1>No food found </h1>;
  }
  return <div>MealList</div>;
};

export default MealList;
