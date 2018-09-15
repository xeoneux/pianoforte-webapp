/**
 *
 * PlayerView
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectPlayerView from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class PlayerView extends React.Component {
  render() {
    return <div />;
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
