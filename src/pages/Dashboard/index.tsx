import React from 'react';
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

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar>
        <Category>NORMAL</Category>
      </Sidebar>
      <Content>
        <PokemonItem>
          <Pokemon>
            <img
              src="https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png"
              alt="pokemon"
            />
            <PokemonDescription>
              <span>Charizard</span>
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
        <PokemonItem>
          <Pokemon>
            <img
              src="https://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/1200px-006Charizard.png"
              alt="pokemon"
            />
            <PokemonDescription>
              <span>Charizard</span>
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
      </Content>
    </Container>
  );
};

export default Dashboard;
