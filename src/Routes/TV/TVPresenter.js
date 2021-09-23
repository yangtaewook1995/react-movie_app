import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "Components/Loader";
import Error from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

function TVPresenter({ topRated, popular, airingToday, error, loading }) {
  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((show) => (
            <Poster
              title={show.original_name}
              imageUrl={show.poster_path}
              key={show.id}
              id={show.id}
              isshow={false}
              rating={show.vote_average}
              year={
                show.first_air_date ? show.first_air_date.substring(0, 4) : ""
              }
            ></Poster>
          ))}
        </Section>
      )}

      {airingToday && airingToday.length > 0 && (
        <Section title="AiringToday Shows">
          {airingToday.map((show) => (
            <Poster
              title={show.original_name}
              imageUrl={show.poster_path}
              key={show.id}
              id={show.id}
              isshow={false}
              rating={show.vote_average}
              year={
                show.first_air_date ? show.first_air_date.substring(0, 4) : ""
              }
            ></Poster>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <Poster
              title={show.original_name}
              imageUrl={show.poster_path}
              key={show.id}
              id={show.id}
              isshow={false}
              rating={show.vote_average}
              year={
                show.first_air_date ? show.first_air_date.substring(0, 4) : ""
              }
            ></Poster>
          ))}
        </Section>
      )}
      {error && <Error text={Error}></Error>}
    </Container>
  );
}

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
