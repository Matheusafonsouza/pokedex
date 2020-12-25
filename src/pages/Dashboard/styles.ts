import styled from 'styled-components';

interface BarProps {
  value: number;
}

interface PokemonItemProps {
  pokemonColor: string;
}

interface CategoryProps {
  categoryType: string;
}

const getColorByValue = (value: number) => {
  if (value <= 75) {
    return '#DF4E49';
  }
  if (value <= 150) {
    return '#F59D1F';
  }
  if (value <= 225) {
    return '#F5C419';
  }
  if (value <= 300) {
    return '#60A041';
  }
  return '#DF4E49';
};

const getItemColor = (color: string) => {
  switch (color) {
    case 'black':
      return '#e4e4e4';
    case 'blue':
      return '#7d9cf0';
    case 'brown':
      return '#e3bf7c';
    case 'gray':
      return '#809da8';
    case 'green':
      return '#7ccb65';
    case 'pink':
      return '#eb5e74';
    case 'purple':
      return '#8774a8';
    case 'red':
      return '#c13f27';
    case 'white':
      return '#fff';
    case 'yellow':
      return '#f6c729';
    default:
      return '#fff';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'normal':
      return '#e4e4e4';
    case 'fighting':
      return '#c13f27';
    case 'flying':
      return '#a4a7f8';
    case 'poison':
      return '#8774a8';
    case 'ground':
      return '#ddaf58';
    case 'rock':
      return '#b79f35';
    case 'bug':
      return '#acc24d';
    case 'ghost':
      return '#b4a8c9';
    case 'steel':
      return '#85a1ab';
    case 'fire':
      return '#f3b88e';
    case 'water':
      return '#8da7f1';
    case 'grass':
      return '#68c644';
    case 'electric':
      return '#c8a55f';
    case 'psychic':
      return '#eb5c7a';
    case 'ice':
      return '#93d7d3';
    case 'dragon':
      return '#7272f7';
    case 'dark':
      return '#686868';
    case 'fairy':
      return '#E251FF';
    case 'unknown':
      return '#5A4D11';
    case 'shadow':
      return '#313131';
    default:
      return '#fff';
  }
};

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #f5f4f4;

  display: flex;
`;

export const Sidebar = styled.div`
  height: 100%;
  width: 8%;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  padding: 10px 5px 10px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const Category = styled.button<CategoryProps>`
  height: 40px;
  width: 100%;
  background: #f8f7f7;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 0;
  color: ${props => getTypeColor(props.categoryType)};
  font-weight: bold;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => getTypeColor(props.categoryType)};
    color: #f8f7f7;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const PokemonItem = styled.div`
  width: 100%;
  height: 400px;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Pokemon = styled.div<PokemonItemProps>`
  height: 80%;
  width: 35%;
  background: ${props => getItemColor(props.pokemonColor)};
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  img {
    height: 50%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 40px;
  }
`;

export const PokemonTypes = styled.div``;

export const PokemonData = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
`;

export const PokemonDetail = styled.div<BarProps>`
  display: flex;
  justify-content: space-around;
  color: grey;
  font-weight: bold;
  font-size: 15px;

  & + div {
    margin-top: 10px;
  }

  > div {
    width: 70%;
    background: grey;
    border-radius: 6px;

    > div {
      height: 100%;
      width: ${props => (props.value * 100) / 300}%;
      background: ${props => getColorByValue(props.value)};
      border-radius: 6px;
    }
  }
`;
