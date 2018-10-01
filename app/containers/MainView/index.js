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

import TopBar from 'components/TopBar';
import SideNav from 'components/SideNav';
import injectSaga from 'utils/injectSaga';
import Featured from 'components/Featured';
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
        <SideNav />
        <div className="main-content">
          {/* <!-- Top navbar --> */}
          <TopBar />
          <Featured />
          {/* <!-- Page content --> */}
          <div className="container-fluid mt--7">
            {/* <!-- Table --> */}
            <div className="row">
              <div className="col">
                <div className="card shadow">
                  <div className="card-header border-0">
                    <h3 className="mb-0">Popular Songs</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-items-center table-hover">
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
                          <a className="page-link" href="/" tabIndex="-1">
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
