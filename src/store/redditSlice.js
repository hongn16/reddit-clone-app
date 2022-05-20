import { createSlice, createSelector } from '@reduxjs/toolkit';
// Import Reddit API.
import { getSubredditPosts, getPostComments } from '../api/reddit';

// Declare initial state.
const initialState = {
  posts: [],
  error: false,
  isLoading: false,
  searchTerm: '',
  selectedSubreddit: '/r/pics/',
};

const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    // Set posts into array.
    setPosts(state, action) {
      state.posts = action.payload;
    },
    // Set posts loading.
    startGetPosts(state) {
      state.isLoading = true;
      state.error = false;
    },
    // Set posts successful.
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    // Set post failed.
    getPostsFailed(state) {
      state.isLoading = false;
      state.error = true;
    },
    // Set search term.
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    // Set selected subreddit and clear search term.
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
      state.searchTerm = '';
    },
    // Toggle comments.
    toggleShowingComments(state, action) {
      state.posts[action.payload].showingComments = !state.posts[action.payload]
        .showingComments;
    },
    // Load comments.
    startGetComments(state, action) {
      // If we're hiding comment, don't fetch the comments.
      state.posts[action.payload].showingComments = !state.posts[action.payload]
        .showingComments;
      if (!state.posts[action.payload].showingComments) {
        return;
      }
      state.posts[action.payload].loadingComments = true;
      state.posts[action.payload].error = false;
    },
    // Set comments successful.
    getCommentsSuccess(state, action) {
      state.posts[action.payload.index].loadingComments = false;
      state.posts[action.payload.index].comments = action.payload.comments;
    },
    // Set comments failed.
    getCommentsFailed(state, action) {
      state.posts[action.payload].loadingComments = false;
      state.posts[action.payload].error = true;
    },
  },
});

// Export actions.
export const {
  setPosts,
  getPostsFailed,
  getPostsSuccess,
  startGetPosts,
  setSearchTerm,
  setSelectedSubreddit,
  toggleShowingComments,
  getCommentsFailed,
  getCommentsSuccess,
  startGetComments,
} = redditSlice.actions;

// Export reducer.
export default redditSlice.reducer;

// This is a Redux Thunk that gets posts from a subreddit.
export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(startGetPosts());
    const posts = await getSubredditPosts(subreddit);

    // We are adding showingComments and comments as additional fields to handle showing them when the user wants to. We need to do this because we need to call another API endpoint to get the comments for each post.
    const postsWithMetadata = posts.map((post) => ({
      ...post,
      showingComments: false,
      comments: [],
      loadingComments: false,
      errorComments: false,
    }));
    dispatch(getPostsSuccess(postsWithMetadata));
  } catch (error) {
    dispatch(getPostsFailed());
  }
};

// This is a Redux Thunk that gets comments from a subreddit.
export const fetchComments = (index, permalink) => async (dispatch) => {
  try {
    dispatch(startGetComments(index));
    const comments = await getPostComments(permalink);
    
    dispatch(getCommentsSuccess({ index, comments }));
  } catch (error) {
    dispatch(getCommentsFailed(index));
  }
};

// Export selectors.
const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    if (searchTerm !== '') {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return posts;
  }
);
