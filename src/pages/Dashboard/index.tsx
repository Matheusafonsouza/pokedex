import React, { useEffect, useState } from 'react';
import api from '../../services/api';
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

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  results: Category[];
}

const Dashboard: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
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

      setCategories(categoriesResponse.data.results);
      setPokemons(pokemonsResponse.data.results);
    }

    loadInformation();
  }, []);

  return (
    <Container>
      <Sidebar>
        {categories.map((category: Category) => (
          <Category>{category.name.toUpperCase()}</Category>
        ))}
      </Sidebar>
      <Content>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonItem>
            <Pokemon>
              <img
                src="https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png"
                alt="pokemon"
              />
              <PokemonDescription>
                <span>{pokemon.name}</span>
                <p>Pokemon maneiro</p>
              </PokemonDescription>
              <PokemonTypes>
                <span>Dragão</span>
                <span>Fogo</span>
              </PokemonTypes>
            </Pokemon>
            <PokemonData>
              <PokemonDetail>
                <span>Speed</span>
                <p>130</p>
                <div>
                  <div />
                </div>
              </PokemonDetail>
              <PokemonDetail>
                <span>Speed</span>
                <p>130</p>
                <div>
                  <div />
                </div>
              </PokemonDetail>

              <PokemonDetail>
                <span>Speed</span>
                <p>130</p>
                <div>
                  <div />
                </div>
              </PokemonDetail>

              <PokemonDetail>
                <span>Speed</span>
                <p>130</p>
                <div>
                  <div />
                </div>
              </PokemonDetail>

              <PokemonDetail>
                <span>Speed</span>
                <p>130</p>
                <div>
                  <div />
                </div>
              </PokemonDetail>

              <PokemonDetail>
                <span>Speed</span>
                <p>130</p>
                <div>
                  <div />
                </div>
              </PokemonDetail>
            </PokemonData>
          </PokemonItem>
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
