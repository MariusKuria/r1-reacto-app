import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';

const animals = [
  { name: 'Racoon', color: 'skyblue', big: false },
  { name: 'Fox', color: 'brown', big: false },
  { name: 'Moose', color: 'yellow', big: true },
  { name: 'Wolf', color: 'gray', big: false }
];

// const animals = ['Racoon', 'Fox', 'Moose', 'Wolf'];

function App() {
  //zemiau apsirasom state'us
  const [h2Color, setH2Color] = useState('crimson'); // tokie state'ai vadinami hookais.
  const [count, setCount] = useState(1);

  const clickIt = () => {
    setH2Color(c => c === 'crimson' ? 'yellow' : 'crimson');
  }

  const add1 = () => {
    setCount(c => c + 1);
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className="card">
          <div className="card-header">
            <h2 style={{ color: h2Color }}>Forest Book (page {count})</h2>
          </div>
          <ul className="list-group list-group-flush">

            {
              animals.map((a, i) =>
                <li key={i} className={'list-group-item' + (a.big ? ' big' : '')} style={{ color: a.color }}>
                  {a.name}
                </li>)
            }
          </ul>
        </div>

        <button type="button" className="btn btn-warning mt-4" onClick={clickIt}>CLICK</button>
        <button type="button" className="btn btn-danger mt-4" onClick={add1}>+1</button>

      </header>
    </div>
  );
}

export default App;
