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
          <div className="container-fluid">
            {/* <!-- Toggler --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#sidenav-collapse-main"
              aria-controls="sidenav-main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* <!-- Brand --> */}
            <a className="navbar-brand pt-0" href="./index.html">
              <img
                src="./assets/img/brand/blue.png"
                className="navbar-brand-img"
                alt="..."
              />
            </a>
            {/* <!-- User --> */}
            <ul className="nav align-items-center d-md-none">
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link-icon"
                  href="/"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="ni ni-bell-55" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-arrow dropdown-menu-right"
                  aria-labelledby="navbar-default_dropdown_1"
                >
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="media align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="Image placeholder"
                        src="./assets/img/theme/team-1-800x800.jpg"
                      />
                    </span>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                  <div className=" dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </div>
                  <a href="./examples/profile.html" className="dropdown-item">
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </a>
                  <a href="./examples/profile.html" className="dropdown-item">
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </a>
                  <a href="./examples/profile.html" className="dropdown-item">
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </a>
                  <a href="./examples/profile.html" className="dropdown-item">
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
            {/* <!-- Collapse --> */}
            <div
              className="collapse navbar-collapse"
              id="sidenav-collapse-main"
            >
              {/* <!-- Collapse header --> */}
              <div className="navbar-collapse-header d-md-none">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="./index.html">
                      <img src="./assets/img/brand/blue.png" />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button
                      type="button"
                      className="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#sidenav-collapse-main"
                      aria-controls="sidenav-main"
                      aria-expanded="false"
                      aria-label="Toggle sidenav"
                    >
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Form --> */}
              <form className="mt-4 mb-3 d-md-none">
                <div className="input-group input-group-rounded input-group-merge">
                  <input
                    type="search"
                    className="form-control form-control-rounded form-control-prepended"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <span className="fa fa-search" />
                    </div>
                  </div>
                </div>
              </form>
              {/* <!-- Navigation --> */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="./index.html">
                    <i className="ni ni-tv-2 text-primary" /> Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./examples/icons.html">
                    <i className="ni ni-planet text-blue" /> Icons
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./examples/maps.html">
                    <i className="ni ni-pin-3 text-orange" /> Maps
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./examples/profile.html">
                    <i className="ni ni-single-02 text-yellow" /> User profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./examples/tables.html">
                    <i className="ni ni-bullet-list-67 text-red" /> Tables
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./examples/login.html">
                    <i className="ni ni-key-25 text-info" /> Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./examples/register.html">
                    <i className="ni ni-circle-08 text-pink" /> Register
                  </a>
                </li>
              </ul>
              {/* <!-- Divider --> */}
              <hr className="my-3" />
              {/* <!-- Heading --> */}
              <h6 className="navbar-heading text-muted">Documentation</h6>
              {/* <!-- Navigation --> */}
              <ul className="navbar-nav mb-md-3">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://demos.creative-tim.com/argon-dashboard/docs/getting-started/overview.html"
                  >
                    <i className="ni ni-spaceship" /> Getting started
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://demos.creative-tim.com/argon-dashboard/docs/foundation/colors.html"
                  >
                    <i className="ni ni-palette" /> Foundation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://demos.creative-tim.com/argon-dashboard/docs/components/alerts.html"
                  >
                    <i className="ni ni-ui-04" /> Components
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="main-content">
          {/* <!-- Top navbar --> */}
          <nav
            className="navbar navbar-top navbar-expand-md navbar-dark"
            id="navbar-main"
          >
            <div className="container-fluid">
              {/* <!-- Form --> */}
              <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                <div className="form-group mb-0">
                  <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-search" />
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Search"
                      type="text"
                    />
                  </div>
                </div>
              </form>
              {/* <!-- User --> */}
              <ul className="navbar-nav align-items-center d-none d-md-flex">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link pr-0"
                    href="/"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="media align-items-center">
                      <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt="Image placeholder"
                          src="../assets/img/theme/team-4-800x800.jpg"
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
                    <a
                      href="../examples/profile.html"
                      className="dropdown-item"
                    >
                      <i className="ni ni-single-02" />
                      <span>My profile</span>
                    </a>
                    <a
                      href="../examples/profile.html"
                      className="dropdown-item"
                    >
                      <i className="ni ni-settings-gear-65" />
                      <span>Settings</span>
                    </a>
                    <a
                      href="../examples/profile.html"
                      className="dropdown-item"
                    >
                      <i className="ni ni-calendar-grid-58" />
                      <span>Activity</span>
                    </a>
                    <a
                      href="../examples/profile.html"
                      className="dropdown-item"
                    >
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
          {/* <!-- Header --> */}
          <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
            <div className="container-fluid">
              <div className="header-body">
                {/* <!-- Card stats --> */}
                <div className="row">
                  <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              Traffic
                            </h5>
                            <span className="h2 font-weight-bold mb-0">
                              350,897
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i className="fas fa-chart-bar" />
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-success mr-2">
                            <i className="fa fa-arrow-up" /> 3.48%
                          </span>
                          <span className="text-nowrap">Since last month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              New users
                            </h5>
                            <span className="h2 font-weight-bold mb-0">
                              2,356
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                              <i className="fas fa-chart-pie" />
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-danger mr-2">
                            <i className="fas fa-arrow-down" /> 3.48%
                          </span>
                          <span className="text-nowrap">Since last week</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              Sales
                            </h5>
                            <span className="h2 font-weight-bold mb-0">
                              924
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                              <i className="fas fa-users" />
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-warning mr-2">
                            <i className="fas fa-arrow-down" /> 1.10%
                          </span>
                          <span className="text-nowrap">Since yesterday</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <h5 className="card-title text-uppercase text-muted mb-0">
                              Performance
                            </h5>
                            <span className="h2 font-weight-bold mb-0">
                              49,65%
                            </span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                              <i className="fas fa-percent" />
                            </div>
                          </div>
                        </div>
                        <p className="mt-3 mb-0 text-muted text-sm">
                          <span className="text-success mr-2">
                            <i className="fas fa-arrow-up" /> 12%
                          </span>
                          <span className="text-nowrap">Since last month</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Page content --> */}
          <div className="container-fluid mt--7">
            {/* <!-- Table --> */}
            <div className="row">
              <div className="col">
                <div className="card shadow">
                  <div className="card-header border-0">
                    <h3 className="mb-0">Card tables</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-items-center table-flush">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Project</th>
                          <th scope="col">Budget</th>
                          <th scope="col">Status</th>
                          <th scope="col">Users</th>
                          <th scope="col">Completion</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <div className="media align-items-center">
                              <a
                                href="/"
                                className="avatar rounded-circle mr-3"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/bootstrap.jpg"
                                />
                              </a>
                              <div className="media-body">
                                <span className="mb-0 text-sm">
                                  Argon Design System
                                </span>
                              </div>
                            </div>
                          </th>
                          <td>$2,500 USD</td>
                          <td>
                            <span className="badge badge-dot mr-4">
                              <i className="bg-warning" /> pending
                            </span>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-1-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-2-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Alexander Smith"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-3-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-4-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">60%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: 60 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <div className="dropdown">
                              <a
                                className="btn btn-sm btn-icon-only text-light"
                                href="/"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <a className="dropdown-item" href="/">
                                  Action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="media align-items-center">
                              <a
                                href="/"
                                className="avatar rounded-circle mr-3"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/angular.jpg"
                                />
                              </a>
                              <div className="media-body">
                                <span className="mb-0 text-sm">
                                  Angular Now UI Kit PRO
                                </span>
                              </div>
                            </div>
                          </th>
                          <td>$1,800 USD</td>
                          <td>
                            <span className="badge badge-dot">
                              <i className="bg-success" /> completed
                            </span>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-1-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-2-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Alexander Smith"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-3-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-4-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">100%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: 100 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <div className="dropdown">
                              <a
                                className="btn btn-sm btn-icon-only text-light"
                                href="/"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <a className="dropdown-item" href="/">
                                  Action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="media align-items-center">
                              <a
                                href="/"
                                className="avatar rounded-circle mr-3"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/sketch.jpg"
                                />
                              </a>
                              <div className="media-body">
                                <span className="mb-0 text-sm">
                                  Black Dashboard
                                </span>
                              </div>
                            </div>
                          </th>
                          <td>$3,150 USD</td>
                          <td>
                            <span className="badge badge-dot mr-4">
                              <i className="bg-danger" /> delayed
                            </span>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-1-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-2-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Alexander Smith"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-3-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-4-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">72%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    aria-valuenow="72"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: 72 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <div className="dropdown">
                              <a
                                className="btn btn-sm btn-icon-only text-light"
                                href="/"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <a className="dropdown-item" href="/">
                                  Action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="media align-items-center">
                              <a
                                href="/"
                                className="avatar rounded-circle mr-3"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/react.jpg"
                                />
                              </a>
                              <div className="media-body">
                                <span className="mb-0 text-sm">
                                  React Material Dashboard
                                </span>
                              </div>
                            </div>
                          </th>
                          <td>$4,400 USD</td>
                          <td>
                            <span className="badge badge-dot">
                              <i className="bg-info" /> on schedule
                            </span>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-1-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-2-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Alexander Smith"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-3-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-4-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">90%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    aria-valuenow="90"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: 90 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <div className="dropdown">
                              <a
                                className="btn btn-sm btn-icon-only text-light"
                                href="/"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <a className="dropdown-item" href="/">
                                  Action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <div className="media align-items-center">
                              <a
                                href="/"
                                className="avatar rounded-circle mr-3"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/vue.jpg"
                                />
                              </a>
                              <div className="media-body">
                                <span className="mb-0 text-sm">
                                  Vue Paper UI Kit PRO
                                </span>
                              </div>
                            </div>
                          </th>
                          <td>$2,200 USD</td>
                          <td>
                            <span className="badge badge-dot mr-4">
                              <i className="bg-success" /> completed
                            </span>
                          </td>
                          <td>
                            <div className="avatar-group">
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Ryan Tompson"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-1-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Romina Hadid"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-2-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Alexander Smith"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-3-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                              <a
                                href="/"
                                className="avatar avatar-sm"
                                data-toggle="tooltip"
                                data-original-title="Jessica Doe"
                              >
                                <img
                                  alt="Image placeholder"
                                  src="../assets/img/theme/team-4-800x800.jpg"
                                  className="rounded-circle"
                                />
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <span className="mr-2">100%</span>
                              <div>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: 100 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-right">
                            <div className="dropdown">
                              <a
                                className="btn btn-sm btn-icon-only text-light"
                                href="/"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <a className="dropdown-item" href="/">
                                  Action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Another action
                                </a>
                                <a className="dropdown-item" href="/">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer py-4">
                    <nav aria-label="...">
                      <ul className="pagination justify-content-end mb-0">
                        <li className="page-item disabled">
                          <a className="page-link" href="/" tabindex="-1">
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="/">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            2 <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Footer --> */}
            <footer className="footer">
              <div className="row align-items-center justify-content-xl-between">
                <div className="col-xl-6">
                  <div className="copyright text-center text-xl-left text-muted">
                    © 2018{' '}
                    <a
                      href="https://www.creative-tim.com"
                      className="font-weight-bold ml-1"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        className="nav-link"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="nav-link"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="http://blog.creative-tim.com"
                        className="nav-link"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                        className="nav-link"
                        target="_blank"
                      >
                        MIT License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
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
