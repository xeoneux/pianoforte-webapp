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

  render() {
    return (
      <React.Fragment>
        <FrameOuter
          idx={1}
          onValueChange={{}}
          pose={this.state.pose}
          onPoseComplete={() => log('pose updated')}
        >
          <Board {...this.props} />
          <Measure
            keyWidth={this.props.keyWidth}
            tracks={
              this.props.measures &&
              this.props.measure.notes.map(track =>
                track.filter(note => note.measure.index === 0),
              )
            }
          />
          asdf
        </FrameOuter>
        <FrameOuter
          idx={2}
          onValueChange={{}}
          pose={this.state.pose}
          onPoseComplete={() => log('pose updated')}
        >
          <Board {...this.props} />
          asdf
        </FrameOuter>
        <FrameOuter
          idx={3}
          onValueChange={{}}
          pose={this.state.pose}
          onPoseComplete={() => log('pose updated')}
        >
          <Board {...this.props} />
          asdf
        </FrameOuter>
      </React.Fragment>
    );
  }
}

Frame.propTypes = {};

export default Frame;
