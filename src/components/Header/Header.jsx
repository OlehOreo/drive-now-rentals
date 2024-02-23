import { AppHeader, Wrapper, Link, List } from './Header.styled';

export const Header = () => {
  return (
    <AppHeader>
      <Wrapper>
        <nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Rent a Car</Link>
            </li>
            <li>
              <Link to="/favorites">Favorite</Link>
            </li>
          </List>
        </nav>
      </Wrapper>
    </AppHeader>
  );
};
