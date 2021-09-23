import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

function HomePresenter({ nowPlaying, popular, upcoming, error, loading }) {
  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              title={movie.original_title}
              imageUrl={movie.poster_path}
              key={movie.id}
              id={movie.id}
              isMovie={true}
              rating={movie.vote_average}
              year={
                movie.release_date ? movie.release_date.substring(0, 4) : ""
              }
            ></Poster>
          ))}
        </Section>
      )}

      {upcoming && upcoming.length > 0 && (
        <Section title="UpComing Movies">
          {upcoming.map((movie) => (
            <Poster
              title={movie.original_title}
              imageUrl={movie.poster_path}
              key={movie.id}
              id={movie.id}
              isMovie={true}
              rating={movie.vote_average}
              year={
                movie.release_date ? movie.release_date.substring(0, 4) : ""
              }
            ></Poster>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map((movie) => (
            <Poster
              title={movie.original_title}
              imageUrl={movie.poster_path}
              key={movie.id}
              id={movie.id}
              isMovie={true}
              rating={movie.vote_average}
              year={
                movie.release_date ? movie.release_date.substring(0, 4) : ""
              }
            ></Poster>
          ))}
        </Section>
      )}
      {error && <Error text={Error}></Error>}
    </Container>
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
