import React, { Component } from 'react';
import styled from 'styled-components';

import Key from '../components/Key';
import Label from '../components/Label';

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
  render() {
    return (
        <Container>
        <Header>
        <Label text='1+2+3+4' />
        <Label text='10' align='right'/>
        </Header>
        <Calc>
            <Column>
            <Key primary>C</Key>
            <Key>7</Key>
            <Key>4</Key>
            <Key>1</Key>
            <Key>0</Key>
            </Column>
            <Column>
            <Key primary>&times;</Key>
            <Key>8</Key>
            <Key>5</Key>
            <Key>2</Key>
            <Key></Key>
            </Column>
            <Column>
            <Key primary> &divide;</Key>
            <Key>9</Key>
            <Key>6</Key>
            <Key>3</Key>
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

export default Calculator;
