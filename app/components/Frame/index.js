/**
 *
 * Frame
 *
 */

import debug from 'debug';
import React from 'react';
import posed from 'react-pose';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Board from 'components/Board';
import Measure from 'components/Measure';
import { playerTheme } from 'tools/theme';

const log = debug('frame:main');

const FrameInner = posed.div({
  end: {
    top: `${playerTheme.framesHeight}vh`,
    transition: ({ idx }) => ({ ease: 'linear', duration: 2000 * idx }),
  },
  begin: {
    top: ({ idx }) =>
      `${playerTheme.framesHeight - playerTheme.singleFrameHeight * idx}vh`,
  },
});

const FrameOuter = styled(FrameInner)`
  width: 100%;
  position: absolute;
  height: ${({ theme }) => theme.singleFrameHeight}vh;
`;

/* eslint-disable react/prefer-stateless-function */
class Frame extends React.Component {
  state = { pose: 'begin' };

  componentDidMount() {
    // setTimeout(() => this.setState({ pose: 'end' }), 3000);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.measureData &&
          this.props.measureData.map((measure, index) => (
            <FrameOuter
              idx={index}
              key={measure.index}
              onValueChange={{}}
              pose={this.state.pose}
              onPoseComplete={() => log('pose updated')}
            >
              <Board {...this.props} />
              <Measure measure={measure} />
            </FrameOuter>
          ))}
      </React.Fragment>
    );
  }
}

Frame.propTypes = {};

export default Frame;
