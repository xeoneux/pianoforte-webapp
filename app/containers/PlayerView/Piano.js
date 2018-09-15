import React from 'react';

import PianoKey from './PianoKey';

const Piano = ({ keys }) =>
  keys.map((key, index) => (
    <PianoKey
      index={index}
      key={key.note}
      type={key.type}
      position={key.position}
    />
  ));

export default Piano;
