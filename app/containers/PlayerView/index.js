/**
 *
 * PlayerView
 *
 */

import React from 'react';
import { compose } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled, { ThemeProvider } from 'styled-components';

import { playerTheme } from 'tools/theme';
import Keyboard from 'containers/Keyboard';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import makeSelectPlayerView from './selectors';

const PlayerViewWrapper = styled.div`
  width: 100%;
  position: absolute;
  transition: top 0.3s;
  top: ${props => (props.opened ? 0 : 90)}%;
`;

/* eslint-disable react/prefer-stateless-function */
export class PlayerView extends React.Component {
  state = { opened: false };

  render() {
    return (
      <ThemeProvider theme={playerTheme}>
        <PlayerViewWrapper
          opened={this.state.opened}
          onClick={() => this.setState({ opened: !this.state.opened })}
        >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              Navbar
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Keyboard />
        </PlayerViewWrapper>
      </ThemeProvider>
    );
  }
}

PlayerView.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  playerview: makeSelectPlayerView(),
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

export default compose(
  withReducer,
  withConnect,
)(PlayerView);
