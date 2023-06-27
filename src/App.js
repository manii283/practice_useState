import {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
  setCount(count+1)
  }

  const decreaseHandler = () => {
    setCount(count-1)
  }

  return (
    <div className="App">
      <input type='number' value={count}/>
     <button onClick={increaseHandler}>Increase</button>
     <button onClick={decreaseHandler}>decrease</button>
    </div>
  );
}

export default App;
