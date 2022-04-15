import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import PropTypes from 'prop-types';
import './CharacterTemplate.scss';

export const CharacterTemplate = ({ api, title }) => {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCharacterInfo(data.results);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [api]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error loading the data</p>;
  }

  return (
    <>
      <h1>{title}</h1>
      <Button text="Return Home" path="/" />
      <div className="flex-container">
        {characterInfo.map((character, id) => (
          <div key={id} className="character-container">
            <h2>{character.name}</h2>
            <img src={character.image} alt="character avatar" />
          </div>
        ))}
      </div>
    </>
  );
};

CharacterTemplate.propTypes = {
  api: PropTypes.string,
  title: PropTypes.string,
};
