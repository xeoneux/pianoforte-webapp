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
import SongList from 'components/SongList';

import 'react-alice-carousel/lib/alice-carousel.css';

const BodyAreaWrapper = styled(Flex)`
  color: #152334;
  padding-left: 5vw;
`;

const BodyTitle = styled.h1`
  font-family: 'Open Sans', sans-serif;
`;

const Featured = styled.div``;

const songCards = [
  <SongCard url="https://placeimg.com/500/500/any" />,
  <SongCard url="https://placeimg.com/400/400/any" />,
  <SongCard url="https://placeimg.com/300/300/any" />,
  <SongCard url="https://placeimg.com/600/600/any" />,
  <SongCard url="https://placeimg.com/700/700/any" />,
  <SongCard url="https://placeimg.com/200/200/any" />,
];

function BodyArea() {
  return (
    <BodyAreaWrapper width={5 / 6} bg="#f5f5f5" flexDirection="column">
      <BodyTitle>Featured</BodyTitle>
      <Featured>
        <AliceCarousel
          dotsDisabled
          buttonsDisabled
          mouseDragEnabled
          items={songCards}
          responsive={{ 0: { items: 4 } }}
        />
      </Featured>

      <BodyTitle>Suggested New Tracks</BodyTitle>
      <SongList />
    </BodyAreaWrapper>
  );
}

BodyArea.propTypes = {};

export default BodyArea;
