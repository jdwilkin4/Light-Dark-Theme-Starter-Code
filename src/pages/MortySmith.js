import { CharacterTemplate } from "../components/CharacterTemplate";
import { MORTY_API } from "../constants/urls";

export const MortySmithPage = () => {
  return <CharacterTemplate api={MORTY_API} title="Morty Smith Page" />;
};
