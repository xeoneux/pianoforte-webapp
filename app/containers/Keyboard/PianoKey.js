import styled from 'styled-components';

const PianoKey = styled.div`
  cursor: pointer;
  position: absolute;
  box-sizing: border-box;
  border: 1px solid gray;
  transition: all 0.1s ease;
  border-radius: 0 0 5px 5px;
  transform-origin: top center;
  width: ${({ width }) => width}vw;
  left: ${({ offset }) => offset}vw;
  background: ${({ type }) => type};
  transform: translate(0, 0) rotateX(0);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  z-index: ${({ type }) => (type === 'white' ? 90 : 100)};
  height: ${({ type, theme }) =>
    type === 'white' ? 100 : 100 * theme.crossHeightRatio}%;

  :active {
    background: red;
  }
`;

export default PianoKey;
