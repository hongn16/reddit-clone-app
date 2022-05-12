import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatedList } from 'react-animated-list';

import Post from '../Post/Post';
import PostLoading from '../Post/PostLoading';
import getRandomNumber from '../../utilities/getRandomNumber';
import {
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
  fetchComments,
} from '../../store/redditSlice';

// Import Home styles.
import { ErrorDiv, ErrorButton } from './HomeStyles'; 

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  const onFetchPosts = () => {
    dispatch(fetchPosts(selectedSubreddit))
  };

  useEffect(onFetchPosts, [selectedSubreddit, dispatch]);

  const onToggleComments = (index) => {
    const getComments = (permalink) => {
      dispatch(fetchComments(index, permalink));
    };

    return getComments;
  };

  if (isLoading) {
    return (
      <AnimatedList animation="zoom">
        {Array(getRandomNumber(3, 10)).fill(<PostLoading />)}
      </AnimatedList>
    );
  }

  if (error) {
    return (
      <ErrorDiv>
        <h2>Failed to load posts.</h2>
        <ErrorButton
          type="button"
          onClick={() => dispatch(fetchPosts(selectedSubreddit))}
        >
          Try again
        </ErrorButton>
      </ErrorDiv>
    );
  }

  if (posts.length === 0) {
    return (
      <ErrorDiv>
        <h2>No posts matching "{searchTerm}"</h2>
        <ErrorButton onClick={() => dispatch(setSearchTerm(''))}>
          Go home
        </ErrorButton>
      </ErrorDiv>
    );
  }

  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          onToggleComments={onToggleComments(index)}
        />
      ))}
    </>
  );
};

export default Home;
