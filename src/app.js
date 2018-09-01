import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'


import Key from './components/Key';
import Label from './components/Label';

import { calculatorActions } from './state/actions';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  display: flex;
  flex-direction: column;

  transform: translate(-50%, -50%);

  width: 800px;
  height: 600px;
`;

const Calc = styled.div`
  display: flex;
  flex: 1 0 500px;
  background-color: #D3D0D0;
`;

const Header = styled.div`
  flex: 1 0 100px; 
  background-color: transparent;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.1);
  box-sizing: border-box;
  padding: 15px;
`;

const Column = styled.div`
  display: flex;
  
  flex-direction: column
  flex: 1 0 auto;
`;


const Calculator = class Calculator extends Component {
  onDigitTyped = (value) => () => {
    this.props.dispatch(calculatorActions.typeNumber(value))
  }
  render() {
    return (
        <Container>
        <Header>
        <Label text={this.props.input} />
        <Label text='10' align='right'/>
        </Header>
        <Calc>
            <Column>
            <Key primary>C</Key>
            <Key onClick={this.onDigitTyped(7)}>7</Key>
            <Key onClick={this.onDigitTyped(4)}>4</Key>
            <Key onClick={this.onDigitTyped(1)}>1</Key>
            <Key onClick={this.onDigitTyped(0)}>0</Key>
            </Column>
            <Column>
            <Key primary>&times;</Key>
            <Key onClick={this.onDigitTyped(8)}>8</Key>
            <Key onClick={this.onDigitTyped(5)}>5</Key>
            <Key onClick={this.onDigitTyped(2)}>2</Key>
            <Key></Key>
            </Column>
            <Column>
            <Key primary> &divide;</Key>
            <Key onClick={this.onDigitTyped(9)}>9</Key>
            <Key onClick={this.onDigitTyped(6)}>6</Key>
            <Key onClick={this.onDigitTyped(3)}>3</Key>
            <Key big>.</Key>
            </Column>
            <Column>
            <Key></Key>
            <Key primary>+</Key>
            <Key primary>-</Key>
            <Key primary merged bg={'#2ABAE9'}>=</Key>
            </Column>
        </Calc>
        </Container>
    );
  }
};

export default connect(({input}) => ({input}))(Calculator);
