/**
 *
 * AppPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PlayerView from 'containers/PlayerView/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAppPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const AppPageWrapper = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  /* position: relative; */
  /* overflow: hidden; */
`;

/* eslint-disable react/prefer-stateless-function */
export class AppPage extends React.Component {
  render() {
    return (
      <AppPageWrapper>
        <Helmet>
          <title>AppPage</title>
          <meta name="description" content="Description of AppPage" />
        </Helmet>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
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
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                type="submit"
                className="btn btn-outline-success my-2 my-sm-0"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <PlayerView />
      </AppPageWrapper>
    );
  }
}

AppPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  apppage: makeSelectAppPage(),
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

const withReducer = injectReducer({ key: 'appPage', reducer });
const withSaga = injectSaga({ key: 'appPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AppPage);
