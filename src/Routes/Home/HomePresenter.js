import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function HomePresenter({ nowPlaying, popular, upcoming, error, loading }) {
  return (
    <div>
      <span>Home</span>
    </div>
  );
}

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
