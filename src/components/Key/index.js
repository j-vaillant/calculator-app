import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
 display: flex;
 border: 1px solid rgba(165, 165, 165, 0.1);
 flex: ${props => props.merged ? '2 0' : '1 0'};
 justify-content: center;
 align-items: center;
 cursor: pointer;
 background-color: ${props => props.bg};
`;

const Text = styled.span`
 color: ${props => props.primary ? '#2ABAE9' : '#271D1D'};
 font-size: ${props => props.big ? '6rem' : '3rem'};
 color: ${props => props.bg && '#FFF'};
`;

const Key = ({ children: text, onClick, primary = false, big = false, bg,  merged = false }) => (
  <Box onClick={onClick} merged={merged} bg={bg}>
    <Text {...{ big, primary, bg }}>{text}</Text>
  </Box>
);

Key.propTypes = {
  text: Proptypes.string,
};

Key.defaultProps = {
  text: '',
};

export default Key;
