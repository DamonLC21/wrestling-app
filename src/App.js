import './App.css';
import WrestlerCard from './components/WrestlerCard'
import { useState } from 'react'
import wrestlersList from './wrestlers'

function App(props) {
  const [wrestlers, setWrestlers] = useState(wrestlersList)

  const showWrestlers = () => {
    return wrestlers.map(({name, image}) => {
      return <WrestlerCard name={name} image={image} />
    })
  }

  return (
    <div className="App"> 
      <ol className="wrestlers-list">
        {showWrestlers()}
      </ol>
    </div>
  );
}

export default App;
