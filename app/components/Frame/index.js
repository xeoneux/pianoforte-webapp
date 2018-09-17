/**
 *
 * Frame
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const FrameWrapper = styled.div`
  height: 45vh;
`;

/* eslint-disable react/prefer-stateless-function */
class Frame extends React.Component {
  render() {
    return <FrameWrapper />;
  }
}

Frame.propTypes = {};

export default Frame;
