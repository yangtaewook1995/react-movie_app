import { movieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    popular: null,
    upcoming: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();

      const {
        data: { results: popular },
      } = await movieApi.popular();

      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();

      this.setState({
        nowPlaying: nowPlaying,
        upcoming: upcoming,
        popular: popular,
      });
    } catch {
      this.setState({
        error: "Error Occur",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, popular, upcoming, loading, error } = this.state;
    console.log(this.state);
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        popular={popular}
        upcoming={upcoming}
        error={error}
        loading={loading}
      ></HomePresenter>
    );
  }
}

export default HomeContainer;
