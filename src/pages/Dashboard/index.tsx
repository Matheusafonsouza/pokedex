import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import { Container, Sidebar, Category, Content } from './styles';

import ICategory from '../../types/ICategory';
import IPokemon from '../../types/IPokemon';
import ITypeItem from '../../types/ITypeItem';
import IStatItem from '../../types/IStatItem';
import IStats from '../../types/IStats';

import PokemonItem from '../../components/PokemonItem';

interface CategoryResponse {
  count: number;
  results: ICategory[];
}

interface PokemonResponse {
  count: number;
  results: IPokemon[];
}

interface SinglePokemonResponse {
  name: string;
  sprites: {
    front_default: string;
  };
  species: {
    url: string;
  };
  types: ITypeItem[];
  stats: IStatItem[];
}

const Dashboard: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([]);
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

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
        async (pokemon: IPokemon) => {
          const { data } = await axios.get<SinglePokemonResponse>(pokemon.url);

          const fixedPokemon: IPokemon = {
            name: capitalizeFirstLetter(data.name),
            url: pokemon.url,
            img_url: data.sprites.front_default,
            types: data.types.map((typeItem: ITypeItem) => typeItem.type.name),
            stats: data.stats.map((statsItem: IStatItem) => {
              const fixedStat: IStats = {
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
        const fixedPokemons = pokemons.filter((pokemon: IPokemon) =>
          pokemon.types.includes(type),
        );

        setFilteredPokemons(fixedPokemons);
      }
      setSelectedCategory(type);
    },
    [pokemons],
  );

  return (
    <Container>
      <Sidebar>
        <Category
          categoryType="all"
          onClick={() => handleChangeCategory('all')}
          selected={selectedCategory === 'all'}
        >
          ALL
        </Category>
        {categories.map((category: ICategory) => (
          <Category
            key={category.name}
            categoryType={category.name}
            onClick={() => handleChangeCategory(category.name)}
            selected={selectedCategory === category.name}
          >
            {category.name.toUpperCase()}
          </Category>
        ))}
      </Sidebar>
      <Content>
        {filteredPokemons.map((pokemon: IPokemon) => (
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
