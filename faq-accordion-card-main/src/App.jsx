import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Card from './components/Card';
import svgFull from '../images/illustration-woman-online-desktop.svg';
import smallBoxSvg from '../images/illustration-box-desktop.svg'
import Svg from './components/Svg';

function App() {

  return (
    <BodyDiv>
      <Card imageSource={svgFull} smallBox={smallBoxSvg}></Card>
      {/* <Svg /> */}
    </BodyDiv>
  )
}

export default App

const BodyDiv = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%));
`
