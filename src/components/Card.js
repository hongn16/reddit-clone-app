import React from 'react';

// Import Card styles.
import { CardDiv } from './CardStyles';

const Card = (props) => {
  return <CardDiv>{props.children}</CardDiv>;
};

export default Card;