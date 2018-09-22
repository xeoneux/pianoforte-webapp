/**
 *
 * AppPage
 *
 */

import debug from 'debug';
import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import PlayerView from 'containers/PlayerView/Loadable';
import { loadMidi } from 'containers/PlayerView/actions';

import saga from './saga';
import reducer from './reducer';
import makeSelectAppPage from './selectors';

const log = debug('app-page:main');

const AppPageWrapper = styled(Dropzone)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const HeaderWrapper = styled.div`
  height: 15vh;
`;

/* eslint-disable react/prefer-stateless-function */
export class AppPage extends React.Component {
  onDrop = files => {
    if (files.length) {
      const reader = new FileReader();
      reader.onerror = () => log('file reading has failed');
      reader.onabort = () => log('file reading was aborted');
      reader.onload = () => this.props.loadMidi(reader.result);

      reader.readAsArrayBuffer(files[0]);
    }
  };

  render() {
    return (
      <AppPageWrapper disableClick onDrop={this.onDrop}>
        <Helmet>
          <title>AppPage</title>
          <meta name="description" content="Description of AppPage" />
        </Helmet>
        <HeaderWrapper />
        <PlayerView />
      </AppPageWrapper>
    );
  }
}

AppPage.propTypes = {
  loadMidi: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  apppage: makeSelectAppPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadMidi: midi => dispatch(loadMidi(midi)),
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
