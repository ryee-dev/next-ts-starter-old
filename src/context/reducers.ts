import { PostActions, PostProps, Types } from '../utils/types';

export const postsReducer = (state: PostProps[], action: PostActions) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          imageUpload: action.payload.imageUpload,
        },
      ];
    case Types.Remove:
      return [...state.filter((post) => post.id !== action.payload.id)];
    default:
      return state;
  }
};
