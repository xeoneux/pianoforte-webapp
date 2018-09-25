/**
 *
 * SideBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  z-index: 1;
  display: flex;
  box-shadow: -20px 0px 20px 20px rgba(0, 0, 0, 0.1);
`;

function SideBar() {
  return <SideBarWrapper width={1 / 6} bg="#f9f9f9" />;
}

SideBar.propTypes = {};

export default SideBar;
