import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppHeader = styled.header`
  background-color: #575757;
`;

export const Wrapper = styled.div`
  // Positioning

  // Box model
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 1440px;
  height: 75px;

  // Typography

  // Visual

  // Misc
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 20px 0;

  font-weight: 500;
  font-size: 20px;

  &.active {
    color: orange;
  }
`;
