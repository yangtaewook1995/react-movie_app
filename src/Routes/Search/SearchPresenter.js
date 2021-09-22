import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function SearchPresenter({
  movieResults,
  tvResults,
  error,
  loading,
  searchTerm,
  handleSubmit,
}) {
  return (
    <div>
      <span>Search</span>
    </div>
  );
}

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchPresenter;
