import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import {
  Container,
  Sidebar,
  Category,
  Content,
  Pokemon,
  PokemonItem,
  PokemonDescription,
  PokemonTypes,
  PokemonData,
  PokemonDetail,
} from './styles';

interface Category {
  name: string;
  url: string;
}

interface CategoryResponse {
  count: number;
  results: Category[];
}

interface Stats {
  value: number;
  name: string;
}

interface Pokemon {
  name: string;
  url: string;
  types: string[];
  stats: Stats[];
  img_url: string;
}

interface PokemonResponse {
  count: number;
  results: Pokemon[];
}

interface StatItem {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface TypeItem {
  type: {
    name: string;
  };
}

interface SinglePokemonResponse {
  name: string;
  sprites: {
    front_default: string;
  };
  species: {
    url: string;
  };
  types: TypeItem[];
  stats: StatItem[];
}

const Dashboard: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function loadInformation() {
      const categoriesResponse = await api.get<CategoryResponse>('type');
      const pokemonsResponse = await api.get<PokemonResponse>('pokemon', {
        params: {
          offset: 0,
          limit: 1118,
        },
      });

      const fixedPokemons = pokemonsResponse.data.results.map(
        async (pokemon: Pokemon) => {
          const { data } = await axios.get<SinglePokemonResponse>(pokemon.url);

          const fixedPokemon: Pokemon = {
            name: capitalizeFirstLetter(data.name),
            url: pokemon.url,
            img_url: data.sprites.front_default,
            types: data.types.map((typeItem: TypeItem) => typeItem.type.name),
            stats: data.stats.map((statsItem: StatItem) => {
              const fixedStat: Stats = {
                name: statsItem.stat.name,
                value: statsItem.base_stat,
              };

              return fixedStat;
            }),
          };

          return fixedPokemon;
        },
      );

      const pokemonDataFixed = await Promise.all(fixedPokemons);

      setCategories(categoriesResponse.data.results);
      setPokemons(pokemonDataFixed);
    }

    loadInformation();
  }, []);

  const handleChangeCategory = useCallback(
    (type: string) => {
      if (type === 'all') {
        setFilteredPokemons(pokemons);
      } else {
        const fixedPokemons = pokemons.filter((pokemon: Pokemon) =>
          pokemon.types.includes(type),
        );

        setFilteredPokemons(fixedPokemons);
      }
    },
    [pokemons],
  );

  return (
    <Container>
      <Sidebar>
        <Category
          categoryType="all"
          onClick={() => handleChangeCategory('all')}
        >
          ALL
        </Category>
        {categories.map((category: Category) => (
          <Category
            key={category.name}
            categoryType={category.name}
            onClick={() => handleChangeCategory(category.name)}
          >
            {category.name.toUpperCase()}
          </Category>
        ))}
      </Sidebar>
      <Content>
        {filteredPokemons.map((pokemon: Pokemon) => (
          <PokemonItem key={pokemon.name}>
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
              {pokemon.stats.map((pokemonStat: Stats) => (
                <PokemonDetail key={pokemonStat.name} value={pokemonStat.value}>
                  <span>{pokemonStat.name}</span>
                  <p>{pokemonStat.value}</p>
                  <div>
                    <div />
                  </div>
                </PokemonDetail>
              ))}
            </PokemonData>
          </PokemonItem>
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
