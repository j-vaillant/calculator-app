import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const Chooser = styled.div`
display: flex;

width: 200px;
`;

const StyledChoice = styled.span`
flex: 1 0; 

text-align: center;
cursor: pointer
background-color: ${props => props.selected ? '#D22828' : '#968E8E'};
`;

const Choice = ({ id, mode, label, onClick }) => {
  return (
    <StyledChoice onClick={() => onClick(id)} selected={id === mode}>{label}</StyledChoice>
  );
};

Choice.propTypes = {
  id: Proptypes.string.isRequired,
  mode: Proptypes.string.isRequired,
  label: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};

const Toggler = ({ mode, onClick }) => (
  <Chooser>
    <Choice id="user" label="User" onClick={onClick} mode={mode} />
    <Choice id="dev" label="Dev" onClick={onClick} mode={mode} />
  </Chooser>
);

Toggler.propTypes = {
  mode: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};


export default Toggler;
