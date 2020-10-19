import React, { useContext } from 'react';
import { AppContext } from '../../context';
// import { PostsListProps, Types } from "../../utils/types";
import { Container, Box } from 'theme-ui';

const PostsList = () => {
  const {
    state: { posts },
  } = useContext(AppContext);

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
      {posts.map((post) => (
        <Box key={post.id}>
          <h1>{post.name}</h1>
          <img src={post.imageUpload} alt={`${post.name}-image`} />
        </Box>
      ))}
    </Container>
  );
};

export default PostsList;
