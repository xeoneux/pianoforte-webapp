/**
 *
 * MainView
 *
 */

import React from 'react';
import { compose } from 'redux';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import saga from './saga';
import reducer from './reducer';
import makeSelectMainView from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class MainView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>MainView</title>
          <meta name="description" content="Description of MainView" />
        </Helmet>
        <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white">
          asdf
        </nav>
      </React.Fragment>
    );
  }
}

MainView.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainview: makeSelectMainView(),
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

const withReducer = injectReducer({ key: 'mainView', reducer });
const withSaga = injectSaga({ key: 'mainView', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainView);
