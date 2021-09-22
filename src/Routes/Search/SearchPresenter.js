import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0px 20px;
  margin-top: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

function SearchPresenter({
  movieResults,
  tvResults,
  error,
  loading,
  searchTerm,
  handleSubmit,
  updateTerm,
}) {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movies or TV Shows..."
          value={searchTerm}
          onChange={updateTerm}
        ></Input>
      </Form>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map((movie) => {
                return <span key={movie.id}>{movie.title}</span>;
              })}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
              {tvResults.map((show) => {
                return <span key={show.id}>{show.name}</span>;
              })}
            </Section>
          )}
        </>
      )}
    </Container>
  );
}

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
