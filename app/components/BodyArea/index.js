/**
 *
 * BodyArea
 *
 */

import React from 'react';
import { Flex } from 'rebass';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import SongCard from 'components/SongCard';

const BodyAreaWrapper = styled(Flex)`
  padding: 0 5vw;
`;

const SongCardZone = styled(Flex)``;

function BodyArea() {
  return (
    <BodyAreaWrapper width={5 / 6} bg="#f5f5f5">
      asdf
      <SongCardZone>
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </SongCardZone>
    </BodyAreaWrapper>
  );
}

BodyArea.propTypes = {};

export default BodyArea;
