import { CharacterTemplate } from "../components/CharacterTemplate";
import { RICK_API } from "../constants/urls";

export const RickSanchezPage = () => {
  return <CharacterTemplate api={RICK_API} title="Rick Sanchez Page" />;
};
