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
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ url }) => url});

  :hover {
    cursor: pointer;
  }

  ::before {
    bottom: 0;
    height: 33%;
    content: '';
    width: inherit;
    filter: blur(6px);
    position: absolute;
    background: inherit;
    background-position: 0 100%;
  }

  ::after {
    bottom: 0;
    height: 33%;
    content: '';
    opacity: 0.6;
    width: inherit;
    position: absolute;
    background-color: white;
  }
`;

function SongCard(props) {
  return <SongCardWrapper {...props} />;
}

SongCard.propTypes = {};

export default SongCard;
