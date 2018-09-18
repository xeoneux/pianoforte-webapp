/**
 *
 * Frame
 *
 */

import debug from 'debug';
import React from 'react';
import posed from 'react-pose';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const log = debug('frame:main');

const FrameInner = posed.div({
  end: {
    top: '60vh',
    transition: { ease: 'linear', duration: 2000 },
  },
  begin: { top: '15vh' },
});

const FrameOuter = styled(FrameInner)`
  width: 100%;
  height: 45vh;
  position: absolute;
  background-color: ${({ bg }) => bg};
`;

/* eslint-disable react/prefer-stateless-function */
class Frame extends React.Component {
  state = { pose: 'begin' };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ pose: 'end' });
    }, 2000);
  }

  render() {
    return (
      <FrameOuter
        bg={this.props.bg}
        onValueChange={{}}
        pose={this.state.pose}
        onPoseComplete={() => log('pose updated')}
      >
        asdf
      </FrameOuter>
    );
  }
}

Frame.propTypes = {
  bg: PropTypes.string,
};

export default Frame;
