import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

function TVPresenter({ topRated, popular, airingToday, error, loading }) {
  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((show) => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}

      {airingToday && airingToday.length > 0 && (
        <Section title="AiringToday Shows">
          {airingToday.map((show) => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <span key={show.id}>{show.name}</span>
          ))}
        </Section>
      )}
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
