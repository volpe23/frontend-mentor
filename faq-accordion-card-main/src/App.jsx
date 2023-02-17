import { useState } from 'react';
import './styles/App.css';
import Card from './components/Card';
import svgFull from '../images/illustration-woman-online-desktop.svg';
import smallBoxSvg from '../images/illustration-box-desktop.svg'

function App() {

  return (
    <main className='body'>
      <Card imageSource={svgFull} smallBox={smallBoxSvg}></Card>
    </main>
  )
}

export default App


