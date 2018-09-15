/**
 *
 * Keyboard
 *
 */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';

import Key from './Key';
import reducer from './reducer';
import makeSelectKeyboard, { makeSelectKeyWidth } from './selectors';

const KeyboardWrapper = styled.div``;

/* eslint-disable react/prefer-stateless-function */
export class Keyboard extends React.Component {
  render() {
    return (
      <KeyboardWrapper>
        {this.props.keyboard.keys.map((key, index) => (
          <Key
            index={index}
            key={key.note}
            type={key.type}
            position={key.position}
            keyWidth={this.props.keyWidth}
          />
        ))}
      </KeyboardWrapper>
    );
  }
}

Keyboard.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  keyboard: PropTypes.object.isRequired,
  keyWidth: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  keyWidth: makeSelectKeyWidth(),
  keyboard: makeSelectKeyboard(),
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

const withReducer = injectReducer({ key: 'keyboard', reducer });

export default compose(
  withReducer,
  withConnect,
)(Keyboard);
