import profileReducer, {addPost, deletePost} from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likesCount: 15
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 23
    },
    {
      id: 3,
      message: "blabla",
      likesCount: 23
    },
    {
      id: 4,
      message: "dada",
      likesCount: 23
    },
  ]
}

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPost("it-kamasutra.com");
  // 2. action
  let newState = profileReducer(state, action);

//  3. expectations
  expect (newState.posts.length).toBe(5);
})

it('message of new posts should be corrected', () => {
  // 1. test data
  let action = addPost("it-kamasutra.com");
  // 2. action
  let newState = profileReducer(state, action);

//  3. expectations
  expect (newState.posts[4].message).toBe("it-kamasutra.com");
})

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);

//  3. expectations
  expect (newState.posts.length).toBe(3);
})

it(`after deleting length shouldn't be decremented if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(1000);
  // 2. action
  let newState = profileReducer(state, action);

//  3. expectations
  expect (newState.posts.length).toBe(4);
})
