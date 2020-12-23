import styled from 'styled-components';

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

export const Category = styled.button`
  height: 40px;
  width: 100%;
  background: #f8f7f7;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 0;
  color: #c13f27;
  font-weight: bold;

  transition: background-color 0.2s;

  &:hover {
    background-color: #c13f27;
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

export const PokemonTypes = styled.div``;

export const PokemonData = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
`;

export const PokemonDetail = styled.div`
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
      width: 50%;
      background: green;
      border-radius: 6px;
    }
  }
`;
