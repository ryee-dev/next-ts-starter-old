import React from 'react';
import { Container } from 'theme-ui';
import { Button } from 'semantic-ui-react';

export const Home = (): JSX.Element => (
  <Container
    sx={{
      height: '100vh',
      boxSizing: 'border-box',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Button>Open Form</Button>
  </Container>
);

export default Home;
