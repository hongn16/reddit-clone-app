import React from 'react';
import moment from 'moment';
import Avatar from '../Avatar/Avatar';

// Import Comment styles.
import { CommentDiv, MetaData, Author, CreatedTime } from './CommentStyles';

const Comment = (props) => {
  const { comment } = props;
  return (
    <CommentDiv>
      <MetaData>
        <Avatar name={comment.author} />
        <Author>{comment.author}</Author>
        <CreatedTime>
          {moment.unix(comment.created_utc).fromNow()}
        </CreatedTime>
      </MetaData>
      {comment.body}
    </CommentDiv>
  );
};

export default Comment;
