import React from "react";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-2">
      <form onsubmit={handleSubmit} className="w-50 mx-auto">
        <label
          htmlFor="name"
          className="form-label text-success fw-bold fs-4 text-center"
        >
          Search for your favorite Meal
        </label>
        <input type="text" className="form-control" id="name" />
      </form>
    </div>
  );
};

export default SearchForm;
