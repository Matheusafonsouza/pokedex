import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #f5f4f4;
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
