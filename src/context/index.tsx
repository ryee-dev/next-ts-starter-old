import React, { createContext, useReducer } from 'react';
import { ContextTypes, PostActions, PostsListProps } from '../utils/types';
import { postsReducer } from './reducers';

const initialState = {
  posts: [],
};

const AppContext = createContext<ContextTypes>({
  state: initialState,
  dispatch: () => null,
});

// const PostContext = createContext<PostsListProps>(initialState);

const mainReducer = ({ posts }: PostsListProps, action: PostActions) => ({
  posts: postsReducer(posts, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
