import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
  }

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
