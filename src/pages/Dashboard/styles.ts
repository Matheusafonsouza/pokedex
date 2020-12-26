import styled from 'styled-components';
import getCategoryColor from '../../utils/getCategoryColor';
import getColorByValue from '../../utils/getColorByValue';

interface BarProps {
  value: number;
}

interface CategoryProps {
  categoryType: string;
}

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
  color: ${props => getCategoryColor(props.categoryType)};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => getCategoryColor(props.categoryType)};
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

export const Pokemon = styled.div`
  height: 80%;
  width: 35%;
  background: #fff;
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

export const PokemonTypes = styled.div`
  span + span {
    margin-left: 5px;
  }

  font-weight: 400;
`;

export const PokemonData = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
`;

export const PokemonDetail = styled.div<BarProps>`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  font-size: 15px;

  span {
    color: #66625c;
    font-weight: 400;
    margin-right: 10px;
    text-align: start;
    white-space: nowrap;
  }

  p {
    color: #000;
    font-weight: 300;
    margin-right: 10px;
  }

  & + div {
    margin-top: 10px;
  }

  > div {
    width: 70%;
    background: #66625c;
    border-radius: 3px;
    min-width: 330px;

    > div {
      height: 100%;
      width: ${props => (props.value * 100) / 300}%;
      background: ${props => getColorByValue(props.value)};
      border-radius: 3px;
    }
  }
`;
