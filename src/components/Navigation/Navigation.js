import { useAuth } from 'hooks';
import { Span, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <StyledLink to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          <Span>Contacts</Span>
        </StyledLink>
      )}
    </>
  );
};
