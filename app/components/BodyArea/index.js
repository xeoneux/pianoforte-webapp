/**
 *
 * BodyArea
 *
 */

import React from 'react';
import { Flex } from 'rebass';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';

import SongCard from 'components/SongCard';

import 'react-alice-carousel/lib/alice-carousel.css';

const BodyAreaWrapper = styled(Flex)`
  color: #152334;
  padding-left: 5vw;
`;

const BodyTitle = styled.h1`
  font-family: 'Open Sans', sans-serif;
`;

const songCards = [
  <SongCard url="https://loremflickr.com/500/500" />,
  <SongCard url="https://loremflickr.com/400/400" />,
  <SongCard url="https://loremflickr.com/300/300" />,
  <SongCard url="https://loremflickr.com/600/600" />,
  <SongCard url="https://loremflickr.com/700/700" />,
  <SongCard url="https://loremflickr.com/200/200" />,
];
function BodyArea() {
  return (
    <BodyAreaWrapper width={5 / 6} bg="#f5f5f5" flexDirection="column">
      <BodyTitle>Featured</BodyTitle>
      <AliceCarousel
        startIndex={3}
        dotsDisabled
        buttonsDisabled
        mouseDragEnabled
        items={songCards}
        responsive={{ 0: { items: 4.2 } }}
      />
      <BodyTitle>Suggested New Tracks</BodyTitle>
    </BodyAreaWrapper>
  );
}

BodyArea.propTypes = {};

export default BodyArea;
