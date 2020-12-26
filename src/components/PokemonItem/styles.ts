import styled from 'styled-components';
import getColorByValue from '../../utils/getColorByValue';

interface BarProps {
  value: number;
}

export const Container = styled.div`
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
    max-width: 330px;

    > div {
      height: 100%;
      width: ${props => (props.value * 100) / 300}%;
      background: ${props => getColorByValue(props.value)};
      border-radius: 3px;
    }
  }
`;
