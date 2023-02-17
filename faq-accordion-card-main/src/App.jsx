
import './styles/App.css';
import Card from './components/Card';

import smallBoxSvg from '../images/illustration-box-desktop.svg'

function App() {

  return (
    <main className='body'>
      <Card smallBox={smallBoxSvg}></Card>
    </main>
  )
}

export default App


