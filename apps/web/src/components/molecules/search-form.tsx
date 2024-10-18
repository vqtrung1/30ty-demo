import React from "react";
import Button from "../atoms/button";

const SearchForm = () => {
  return (
    <form>
      <input placeholder="Search..." />
      <Button label="Go" />
    </form>
  );
};

export default SearchForm;
