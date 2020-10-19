import React from 'react';

// Post

export interface PostProps {
  id: number;
  imageUpload: any;
  name: string;
}

export type PostPayload = {
  [Types.Create]: PostProps;
  [Types.Remove]: {
    id: number;
  };
};

// Post List

export interface PostsListProps {
  posts: PostProps[];
}

// Context, Reducers, Actions

export type ContextTypes = {
  state: PostsListProps;
  dispatch: React.Dispatch<any>;
};

export enum Types {
  Create = 'CREATE_POST',
  Remove = 'REMOVE_POST',
}

// export type Action =
//   | { type: 'ADD', add:  }
//   | { type: 'REMOVE' }

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type PostActions = ActionMap<PostPayload>[keyof ActionMap<PostPayload>];
