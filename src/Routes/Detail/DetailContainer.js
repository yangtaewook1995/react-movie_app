import { movieApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null,
    videoLink: null,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;

    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    this.isMovie = pathname.includes("/movie");
    let result = null;
    try {
      if (this.isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't get detail" });
    } finally {
      this.setState({
        loading: false,
        result: result,
      });
    }

    const {
      data: { results: videoArr },
    } = await movieApi.videos(parsedId);

    const parsedVideo = videoArr
      .map((video) => {
        return video.key;
      })
      .map((parsed) => {
        return `https://youtube.com/watch?v=${parsed}`;
      });

    this.setState({
      videoLink:
        parsedVideo.length > 10 ? parsedVideo.slice(0, 10) : parsedVideo,
    });
  }
  render() {
    const { result, loading, error, videoLink } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        videoLink={videoLink}
      ></DetailPresenter>
    );
  }
}

export default DetailContainer;
