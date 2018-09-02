import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
 display: flex;
 flex: ${props => props.merged ? '2 0' : '1 0'};

border: 1px solid rgba(165, 165, 165, 0.1);
 justify-content: center;
 align-items: center;
 cursor: ${props => props.disabled ? 'default' : 'pointer' };
 background-color: ${props => props.bg};
`;

const Text = styled.span`
 color: ${props => props.primary ? '#2ABAE9' : '#271D1D'};
 font-size: ${props => props.big ? '5rem' : '3rem'};
 color: ${props => props.bg && '#FFF'};
`;

const Key = ({ children: text, onClick, primary, big, bg, disabled, merged }) => (
  <Box onClick={onClick} merged={merged} disabled={disabled} bg={bg}>
    <Text {...{ big, primary, bg }}>{text}</Text>
  </Box>
);

Key.propTypes = {
  text: Proptypes.string,
  children: Proptypes.string,
  onClick: Proptypes.func,
  primary: Proptypes.bool,
  big: Proptypes.bool,
  bg: Proptypes.string,
  merged: Proptypes.bool,
  disabled: Proptypes.bool,
};

Key.defaultProps = {
  text: '',
  children: '',
  onClick: null,
  primary: false,
  big: false,
  bg: null,
  merged: false,
  disabled: false,
};

export default Key;
