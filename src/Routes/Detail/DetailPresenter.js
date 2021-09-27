import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import noPoster from "../../asset/noPosterSmall.png";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import youtube from "../../asset/youtube.jpeg";

//ToDo
// youtube video 추가
// IMDB 링크 (id로)
// 영화사
// 나라

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 70px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Cover = styled.div`
  background-size: cover;
  height: 100%;
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Youtube = styled.div`
  margin-top: 30px;
`;

const YoutubeItem = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const YoutubeLogo = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 15px;
  width: 15px;
  background-size: cover;
  margin-right: 3px;
  background-position: center center;
`;

function DetailPresenter({ result, error, loading, videoLink }) {
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Netflix</title>
      </Helmet>
      <Loader></Loader>
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Netflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
      ></Backdrop>
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original/${result.poster_path}`
              : `${noPoster}`
          }
        ></Cover>
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>.</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>.</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <Youtube>
            <ul>
              {videoLink &&
                videoLink.map((val, idx) => (
                  <li key={val}>
                    <a href={val}>
                      <YoutubeItem>
                        <YoutubeLogo bgUrl={`${youtube}`} />
                        <YoutubeItem>Official Video {idx + 1}</YoutubeItem>
                      </YoutubeItem>
                    </a>
                  </li>
                ))}
            </ul>
          </Youtube>
        </Data>
      </Content>
    </Container>
  );
}

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  videoLink: PropTypes.array,
};

export default DetailPresenter;
