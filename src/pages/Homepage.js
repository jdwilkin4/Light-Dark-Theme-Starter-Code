import React from 'react';
import { Button } from '../components/Button';
import '../App.scss';

export const Homepage = () => {
  return (
    <>
      <h1>Rick and Morty Demo App</h1>
      <Button path="/rick" text="Rick Sanchez" />
      <Button path="/morty" text="Morty Smith" />
    </>
  );
};
