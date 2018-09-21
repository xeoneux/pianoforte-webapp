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

import PianoKey from './PianoKey';
import reducer from './reducer';
import { selectPianoKeys } from './selectors';

const KeyboardWrapper = styled.div`
  bottom: 0;
  width: 100%;
  position: absolute;
  height: ${({ theme }) => theme.keyboardHeight}vh;
`;

/* eslint-disable react/prefer-stateless-function */
export class Keyboard extends React.Component {
  render() {
    return (
      <KeyboardWrapper>
        {this.props.keys.map(pianoKey => (
          <PianoKey key={pianoKey.note} {...pianoKey} />
        ))}
      </KeyboardWrapper>
    );
  }
}

const pianoKeyPropType = PropTypes.shape({
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
});

export const pianoKeysPropType = PropTypes.arrayOf(pianoKeyPropType).isRequired;

Keyboard.propTypes = {
  keys: pianoKeysPropType,
};

const mapStateToProps = createStructuredSelector({
  keys: selectPianoKeys,
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
