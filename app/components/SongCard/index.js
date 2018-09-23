/**
 *
 * SongCard
 *
 */

import React from 'react';
import { Card } from 'rebass';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const SongCardWrapper = styled(Card)`
  width: 15vw;
  height: 15vw;
  margin: 0 15px;
`;

function SongCard() {
  return (
    <SongCardWrapper
      bg="red"
      borderRadius={30}
      backgroundImage="https://loremflickr.com/320/240"
    />
  );
}

SongCard.propTypes = {};

export default SongCard;
