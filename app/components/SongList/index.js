/**
 *
 * SongList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const SongListWrapper = styled.div`
  display: flex;
`;

const SongListItem = styled.li`
  width: 64vw;
  height: 64px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  transition: all 0.3s;

  :hover {
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0px 0px 20px 7.5px rgba(0, 0, 0, 0.1);
  }
`;

const SongListItemImage = styled.img`
  width: 42px;
  height: 42px;
  margin: 0 16px;
  border-radius: 50%;
`;

const SongListItemText = styled.p`
  margin: 0 16px;
  color: #434f5b;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`;

function SongList() {
  return (
    <SongListWrapper>
      <ul>
        <SongListItem>
          <SongListItemImage src="https://placeimg.com/100/100/any" />
          <SongListItemText>The Dark Side</SongListItemText>
        </SongListItem>
        <SongListItem>
          <SongListItemImage src="https://placeimg.com/200/200/any" />
          <SongListItemText>The Dark Side</SongListItemText>
        </SongListItem>
        <SongListItem>
          <SongListItemImage src="https://placeimg.com/150/150/any" />
          <SongListItemText>The Dark Side</SongListItemText>
        </SongListItem>
        <SongListItem>
          <SongListItemImage src="https://placeimg.com/125/125/any" />
          <SongListItemText>The Dark Side</SongListItemText>
        </SongListItem>
        <SongListItem>
          <SongListItemImage src="https://placeimg.com/175/175/any" />
          <SongListItemText>The Dark Side</SongListItemText>
        </SongListItem>
      </ul>
    </SongListWrapper>
  );
}

SongList.propTypes = {};

export default SongList;
