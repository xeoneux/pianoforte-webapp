/**
 *
 * TopBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TopBar() {
  return (
    <nav
      id="navbar-main"
      className="navbar navbar-top navbar-expand-md navbar-dark"
    >
      <div className="container-fluid">
        {/* <!-- Form --> */}
        <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex mr-lg-auto">
          <div className="form-group mb-0">
            <div className="input-group input-group-alternative">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-search" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search for songs, artists or genres..."
              />
            </div>
          </div>
        </form>
        {/* <!-- User --> */}
        <ul className="navbar-nav align-items-center d-none d-md-flex">
          <li className="nav-item dropdown">
            <a
              href="/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-toggle="dropdown"
              className="nav-link pr-0"
            >
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="User Display"
                    src="https://placeimg.com/100/100/people"
                  />
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold">
                    Jessica Jones
                  </span>
                </div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </a>
              <a href="../examples/profile.html" className="dropdown-item">
                <i className="ni ni-support-16" />
                <span>Support</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#!" className="dropdown-item">
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

TopBar.propTypes = {};

export default TopBar;
