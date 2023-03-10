import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';

export const AppMenu = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static" sx={{ bgcolor: "#1E90FF" }}>
      <Container maxWidth="xl">
      <Toolbar disableGutters>
      <ImportContactsIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
      <Typography textAlign="center">
      <Navigation />
      </Typography>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </Container>
    </AppBar>
  );
};
