import styled, { css } from 'styled-components';
import getCategoryColor from '../../utils/getCategoryColor';

interface CategoryProps {
  categoryType: string;
  selected: boolean;
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
  min-height: 40px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 0;

  ${props =>
    props.selected
      ? css`
          background-color: ${getCategoryColor(props.categoryType)};
          color: #f8f7f7;
        `
      : css`
          color: ${getCategoryColor(props.categoryType)};
          background-color: #f8f7f7;
        `}

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
