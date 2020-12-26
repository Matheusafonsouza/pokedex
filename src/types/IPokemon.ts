import IStats from './IStats';

export default interface IPokemon {
  name: string;
  url: string;
  types: string[];
  stats: IStats[];
  img_url: string;
}
