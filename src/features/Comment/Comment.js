import React, { useState } from 'react';
import moment from 'moment';
import Avatar from '../Avatar/Avatar';
import shortenNumber from '../../utilities/shortenNumber';

import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
} from 'react-icons/ti';

import { CommentDiv, MetaData, Author, CreatedTime, VoteContainer, VoteButton, VoteUps } from './CommentStyles';

const Comment = (props) => {
  const { comment } = props;
  const [voteValue, setVoteValue] = useState(0);

  const onHandleVote = (newValue) => {
    if (newValue === voteValue) {
      return setVoteValue(0);
    } else if (newValue === 1) {
      return setVoteValue(1);
    } else {
      return setVoteValue(-1);
    }
  };

  const renderUpVote = () => {
    if (voteValue === 1) {
      return <TiArrowUpThick style={{ fontSize: "1.5rem" }} />;
    }
    return <TiArrowUpOutline style={{ fontSize: "1.5rem" }} />;
  };

  const renderDownVote = () => {
    if (voteValue === -1) {
      return <TiArrowDownThick style={{ fontSize: "1.5rem" }} />;
    }
    return <TiArrowDownOutline style={{ fontSize: "1.5rem" }} />;
  };

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

      <VoteContainer>
          <VoteButton
            type="button"
            onClick={() => onHandleVote(1)}
            aria-label="Up vote"
          >
            {renderUpVote()}
          </VoteButton>
          <VoteUps>
            {shortenNumber(comment.ups + voteValue, 1)}
          </VoteUps>
          <VoteButton
            type="button"
            onClick={() => onHandleVote(-1)}
            aria-label="Down vote"
          >
            {renderDownVote()}
          </VoteButton>
        </VoteContainer>

    </CommentDiv>
  );
};

export default Comment;
