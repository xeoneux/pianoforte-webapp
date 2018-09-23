/**
 *
 * PlayerView
 *
 */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled, { ThemeProvider } from 'styled-components';

import Frame from 'components/Frame';
import { playerTheme } from 'tools/theme';
import injectSaga from 'utils/injectSaga';
import Keyboard from 'containers/Keyboard';
import injectReducer from 'utils/injectReducer';
import { boardLinesPropType } from 'components/Board';

import saga from './saga';
import reducer from './reducer';
import { makeSelectBoardLines, makeSelectMeasureData } from './selectors';

const PlayerViewOuter = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: top 0.3s ease;
  top: ${props => (props.opened ? 0 : 85)}vh;
`;

const PlayerViewInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BarWrapper = styled.div`
  width: 100%;
  height: 15vh;
`;

const Frames = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
  position: relative;
`;

/* eslint-disable react/prefer-stateless-function */
export class PlayerView extends React.Component {
  state = { opened: false };

  render() {
    return (
      <ThemeProvider theme={playerTheme}>
        <PlayerViewOuter opened={this.state.opened}>
          <PlayerViewInner>
            <BarWrapper
              onClick={() => this.setState({ opened: !this.state.opened })}
            />
            <Frames>
              <Frame
                boardLines={this.props.boardLines}
                measureData={this.props.measureData}
              />
            </Frames>
            <Keyboard />
          </PlayerViewInner>
        </PlayerViewOuter>
      </ThemeProvider>
    );
  }
}

PlayerView.propTypes = {
  measureData: PropTypes.array,
  boardLines: boardLinesPropType,
};

const mapStateToProps = createStructuredSelector({
  boardLines: makeSelectBoardLines(),
  measureData: makeSelectMeasureData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'playerView', reducer });
const withSaga = injectSaga({ key: 'playerView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PlayerView);
