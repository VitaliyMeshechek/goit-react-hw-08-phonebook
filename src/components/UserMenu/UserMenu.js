import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Container, Paragraph, LogoutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Container>
      <Paragraph>Welcome, {user.name}!</Paragraph>
      <Stack direction="row" spacing={1}>
      <Avatar {...stringAvatar(`${user.name}`)} sx={{ bgcolor: deepOrange[500], margin: '8px' }} />
      </Stack>
      <LogoutButton
      onClick={() => dispatch(logOut())}
      sx={{  color: '#FFFFFF', margin: '7px' }}
      >
        Logout
      </LogoutButton>
    </Container>
  );
};
