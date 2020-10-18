import React, { useState } from 'react';
import { Container } from 'theme-ui';
import { Button } from 'semantic-ui-react';

// import MemorialList from '../components/MemorialList';
import NewPostModal from '../components/NewPostModal';
import PostsList from '../components/Posts';

export const Home = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Container
      py={[4]}
      sx={{
        height: '100vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        maxWidth: '1028px',
      }}
    >
      <Button onClick={() => setOpen(true)}>Open Form</Button>
      <PostsList />
      <NewPostModal
        // @ts-ignore
        open={open}
        setOpen={setOpen}
      />
    </Container>
  );
};

export default Home;
