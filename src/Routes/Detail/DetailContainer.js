import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null,
  };

  render() {
    const { result, loading, error } = this.state;

    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      ></DetailPresenter>
    );
  }
}

export default DetailContainer;
