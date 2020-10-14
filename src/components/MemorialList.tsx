import React from 'react';
import { Container } from 'theme-ui';

const MemorialList: React.FC = () => {
  return (
    <Container
      my={[3]}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
      }}
    >
      (display cat memorial list here)
    </Container>
  );
};

export default MemorialList;
