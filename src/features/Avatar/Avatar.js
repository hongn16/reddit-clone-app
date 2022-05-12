import React from 'react'

// Import Avatar styles.
import { AvatarImg } from './AvatarStyles';

const Avatar = (props) => {
  const { name } = props;

  return (
    <AvatarImg
      src={`https://api.adorable.io/avatars/10/${name}`}
      alt={`${name} profile`}
    />
  );
};

export default Avatar;

