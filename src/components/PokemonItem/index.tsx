import React from 'react';
import IPokemon from '../../types/IPokemon';
import IStats from '../../types/IStats';
import {
  Container,
  Pokemon,
  PokemonDescription,
  PokemonTypes,
  PokemonData,
  PokemonDetail,
} from './styles';

interface PokemonItemProps {
  pokemon: IPokemon;
}

const PokemonItem: React.FC<PokemonItemProps> = ({
  pokemon,
}: PokemonItemProps) => {
  return (
    <Container>
      <Pokemon>
        <img src={pokemon.img_url} alt="pokemon" />
        <PokemonDescription>
          <span>{pokemon.name}</span>
        </PokemonDescription>
        <PokemonTypes>
          {pokemon.types.map((pokemonType: string) => (
            <span key={pokemonType}>{pokemonType}</span>
          ))}
        </PokemonTypes>
      </Pokemon>
      <PokemonData>
        {pokemon.stats.map((pokemonStat: IStats) => (
          <PokemonDetail key={pokemonStat.name} value={pokemonStat.value}>
            <span>{pokemonStat.name}</span>
            <p>{pokemonStat.value}</p>
            <div>
              <div />
            </div>
          </PokemonDetail>
        ))}
      </PokemonData>
    </Container>
  );
};

export default PokemonItem;
