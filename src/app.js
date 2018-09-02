import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


import Key from './components/Key';
import Label from './components/Label';
import Toggler from './components/Toggler';

import calculatorActions from './state/actions';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  display: flex;
  flex-direction: column;

  width: 800px;
  height: 600px;

  transform: translate(-50%, -50%);
`;

const Calc = styled.div`
  display: flex;
  flex: 1 0 480px;

  background-color: #D3D0D0;
`;

const Header = styled.div`
  display: flex;
  flex: 1 0 100px; 
  flex-direction: column;

  border: 1px solid rgba(0,0,0,0.1);
  box-sizing: border-box;
  padding: 15px;

  background-color: transparent;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column
  flex: 1 0 auto;
`;


const Calculator = class Calculator extends Component {
  onCommandPressed = (value) => () => {
    this.props.type(value)
  }
  onModeChanged = (mode) => {
    if (mode !== this.props.mode) {
      this.props.switchMode(mode)
    }
  }
  compute = () => {
    this.props.compute()
  }
  clear = () => {
    this.props.clear()
  }
  onKeyPressed = (e) => {
    if(e.keyCode == 32 && this.props.mode === 'dev'){
        this.props.monkeyType()
    }
  }
  componentDidMount() {
    window.addEventListener('keypress', this.onKeyPressed)
  }
   componentWillUnMount() {
    window.removeEventListener('keypress', this.onKeyPressed)
  }
  render() {
    return (
        <Container>
        <Header>
        <Label text={this.props.input} />
        <Label text={this.props.result} align='right'/>
        </Header>
        <Calc>
            <Column>
            <Key primary onClick={this.clear}>C</Key>
            <Key onClick={this.onCommandPressed(7)}>7</Key>
            <Key onClick={this.onCommandPressed(4)}>4</Key>
            <Key onClick={this.onCommandPressed(1)}>1</Key>
            <Key onClick={this.onCommandPressed(0)}>0</Key>
            </Column>
            <Column>
            <Key primary onClick={this.onCommandPressed("\u00D7")}>&times;</Key>
            <Key onClick={this.onCommandPressed(8)}>8</Key>
            <Key onClick={this.onCommandPressed(5)}>5</Key>
            <Key onClick={this.onCommandPressed(2)}>2</Key>
            <Key disabled></Key>
            </Column>
            <Column>
            <Key primary onClick={this.onCommandPressed("\u00F7")}> &divide;</Key>
            <Key onClick={this.onCommandPressed(9)}>9</Key>
            <Key onClick={this.onCommandPressed(6)}>6</Key>
            <Key onClick={this.onCommandPressed(3)}>3</Key>
            <Key big onClick={this.onCommandPressed('.')}>.</Key>
            </Column>
            <Column>
            <Key disabled></Key>
            <Key onClick={this.onCommandPressed('+')} primary>+</Key>
            <Key onClick={this.onCommandPressed('-')} primary>-</Key>
            <Key primary onClick={this.compute} merged bg={'#2ABAE9'}>=</Key>
            </Column>
        </Calc>
        <Toggler onClick={this.onModeChanged} mode={this.props.mode} />
        </Container>
    );
  }
};

function mapDispatchToProps(dispatch) {
   return bindActionCreators({
        monkeyType: calculatorActions.monkeyType,
        type: calculatorActions.type,
        switchMode: calculatorActions.switchMode,
        compute: calculatorActions.compute,
        clear: calculatorActions.clear,
    }, dispatch);
}

export default connect(({input, result, mode}) => ({input, result, mode}), mapDispatchToProps)(Calculator);
export { Calculator as PureCalculator }
