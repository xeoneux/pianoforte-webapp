import styled from 'styled-components';

const keyWidth = 1;
const keyHeight = 25;

const PianoKey = styled.div`
  cursor: pointer;
  position: absolute;
  box-sizing: border-box;
  border: 1px solid gray;
  transition: all 0.1s ease;
  border-radius: 0 0 5px 5px;
  transform-origin: top center;
  transform: translate(0, 0) rotateX(0);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  z-index: ${({ type }) => (type === 'white' ? 90 : 100)};
  width: ${({ type, theme }) =>
    type === 'white' ? keyWidth : keyWidth * theme.crossWidthRatio}vw;
  height: ${({ type, theme }) =>
    type === 'white' ? keyHeight : keyHeight * theme.crossWidthRatio}vh;
  background: ${({ type, active }) => {
    if (active) return type === 'white' ? 'black' : 'white';
    return type === 'white' ? 'white' : 'black';
  }};
  left: ${({ type, index, position, theme }) =>
    type === 'white'
      ? position * keyWidth
      : (index - position - 1) * keyWidth +
        (keyWidth - (keyWidth * theme.crossWidthRatio) / 2)}vw;
`;

//   ({ value, index, state, keyWidth }) => ({
//
//
//     transform: state.active === true ? 'rotateX(-1deg) scale(0.95)' : null,
//     width:
//       value.type === 'white'
//         ? `${keyWidth}vw`
//         : `${keyWidth * crossWidthRatio}vw`,
//     height:
//       value.type === 'white'
//         ? `${keyHeight}vh`
//         : `${keyHeight * crossHeightRatio}vh`,
//   }),
// );
// `

export default PianoKey;
