/**
 *
 * SongCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const SongCardWrapper = styled.div`
  width: 15vw;
  height: 15vw;
  overflow: hidden;
  position: relative;
  border-radius: 30px;
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ url }) => url});

  ::before {
    bottom: 0;
    width: 100%;
    height: 33%;
    content: '';
    opacity: 0.3;
    position: absolute;
    background-color: black;
  }
`;

function SongCard(props) {
  return <SongCardWrapper {...props} />;
}

SongCard.propTypes = {};

export default SongCard;
