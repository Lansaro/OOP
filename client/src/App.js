import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PersonCard from './components/PersonCard';

function App() {
  const users = [
    {
      firstName: 'Jack',
      lastName: 'Sparrow',
      age: 35,
      hairColor: 'Black'
    },
    {
      firstName: 'Erick',
      lastName: 'Rockie',
      age: 12,
      hairColor: 'Blonde'
    },
    {
      firstName: 'George',
      lastName: 'Orwell',
      age: 85,
      hairColor: 'Gray'
    },
    {
      firstName: 'Jordan',
      lastName: 'Petersen',
      age: 50,
      hairColor: 'Gray'
    },
  ]
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Big Inversion</h1>
          </div>
          <div>
            <Link to={`/`}><button>Back To Home</button></Link>
          </div>
        </header>
        <div className="App-body">
          <Routes>
            <Route path='/' element={<PersonCard users={users} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
