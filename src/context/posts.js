import React, { createContext, useReducer, useContext } from "react";

export const PostsContext = createContext();

// Initial Instagram Posts
const initialPosts = [
  {
    id: 1,
    username: "Your Story",
    userImage: "images/avatars/ceci.jpeg",
    postImage: "https://picsum.photos/id/2/200/200",
    likes: 100,
    comments: 115,
    commentsData: [
      {
        id: 0,
        username: "mariela",
        text: "This is a comment"
      },
      {
        id: 1,
        username: "mimi",
        text: "This is a comment"
      }
    ],
    date: "2020-01-01-00-00-00",
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    username: "Your Story",
    userImage: "images/avatars/ceci.jpeg",
    postImage: "https://picsum.photos/id/2/200/200",
    likes: 100,
    comments: 115,
    commentsData: [
      {
        id: 0,
        username: "mariela",
        text: "This is a comment"
      },
      {
        id: 1,
        username: "mimi",
        text: "This is a comment"
      }
    ],
    date: "2020-01-01-00-00-00",
    isLiked: false,
    isSaved: false,
  }
];

// Actions
export const ADD_POST = "ADD_POST";

// Action creators
export function addPost(text) {
  return { type: ADD_POST, text };
}

// Reducer
export function postsReducer(state, action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action];
    default:
      return state;
  }
}

function PostsProvider(props) {
  const [posts, dispatch] = useReducer(postsReducer, initialPosts);

  const postsData = { posts, dispatch };

  return <PostsContext.Provider value={postsData} {...props} />;
}

function usePostsContext() {
  return useContext(PostsContext);
}

export { PostsProvider, usePostsContext };