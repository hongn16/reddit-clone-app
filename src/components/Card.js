import React from 'react';

import { CardDiv } from './CardStyles';

const Card = (props) => {
  return <CardDiv>{props.children}</CardDiv>;
};

export default Card;