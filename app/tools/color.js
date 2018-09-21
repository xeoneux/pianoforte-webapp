import chroma from 'chroma-js';

const trackColors = {};

export const getTrackColor = (type, track) => {
  if (trackColors[type + track]) return trackColors[type + track];

  const randomColor = chroma.random();
  trackColors[`white${track}`] = randomColor.hex();
  trackColors[`black${track}`] = randomColor.darken().hex();
  return trackColors[type + track];
};
