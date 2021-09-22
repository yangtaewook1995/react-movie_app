import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function DetailPresenter({ result, error, loading }) {
  return (
    <div>
      <span>Detail</span>
    </div>
  );
}

DetailPresenter.propTypes = {
  result: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
