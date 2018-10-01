/**
 *
 * Featured
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Tilt from 'react-vanilla-tilt';
import styled from 'styled-components';

const cards = [
  { name: 'Traffic', count: '350,897', percent: '3.48%', text: 'Hello' },
  { name: 'Traffic', count: '350,897', percent: '3.48%', text: 'Hello' },
  { name: 'Traffic', count: '350,897', percent: '3.48%', text: 'Hello' },
  { name: 'Traffic', count: '350,897', percent: '3.48%', text: 'Hello' },
  { name: 'Traffic', count: '350,897', percent: '3.48%', text: 'Hello' },
  { name: 'Traffic', count: '350,897', percent: '3.48%', text: 'Hello' },
];

function Featured() {
  return (
    <div className="header bg-gradient-primary pb-8 pt-4 pt-md-7">
      <div className="container-fluid">
        <div className="header-body">
          {/* <!-- Card stats --> */}
          <div className="row">
            {cards.map(card => (
              <div className="col-xl-2 col-lg-6">
                <Tilt
                  style={{ cursor: 'pointer' }}
                  className="card card-stats mb-4 mb-xl-0"
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">
                          {card.name}
                        </h5>
                        <span className="h2 font-weight-bold mb-0">
                          {card.count}
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
                        <i className="fa fa-arrow-up" /> {card.percent}
                      </span>
                      <span className="text-nowrap">{card.text}</span>
                    </p>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Featured.propTypes = {};

export default Featured;
