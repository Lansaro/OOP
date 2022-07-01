import logo from './logo.svg';
import './App.css';
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
      <div className="App">
        <header className="App-header">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>OOP: Putting it together</h1>
          </div>
        </header>
        <div className="App-body">
          {users.map((person, index) => {
            return (
              <div key={index}>
                <PersonCard
                  lastName={person.lastName}
                  firstName={person.firstName}
                  age={person.age}
                  hairColor={person.hairColor}
                />
              </div>
          )})}
        </div>
      </div>
  );
}

export default App;
