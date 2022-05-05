import React, { createContext, useReducer, useContext } from "react";

export const StoriesContext = createContext();

// Initial Instagram Stories
const initialStories = [
  {
    id: 0,
    username: "Your Story",
    image: "images/avatars/ceci.jpeg"
  },
  {
    id: 1,
    username: "mariela",
    image: "images/avatars/mariela.jpeg"
  },
  {
    id: 2,
    username: "mimi",
    image: "images/avatars/mimi.jpeg"
  },
  {
    id: 3,
    username: "random",
    image: "https://picsum.photos/id/2/200/200"
  },
  {
    id: 4,
    username: "anna",
    image: "images/avatars/anna.jpeg"
  }
];

// Actions
export const ADD_STORY = "ADD_STORY";

// Action creators
export function addStory(text) {
  return { type: ADD_STORY, text };
}

// Reducer
export function storyReducer(state, action) {
  switch (action.type) {
    case ADD_STORY:
      return [...state, action];
    default:
      return state;
  }
}

function StoryProvider(props) {
  const [stories, dispatch] = useReducer(storyReducer, initialStories);

  const storiesData = { stories, dispatch };

  return <StoriesContext.Provider value={storiesData} {...props} />;
}

function useStoriesContext() {
  return useContext(StoriesContext);
}

export { StoryProvider, useStoriesContext };