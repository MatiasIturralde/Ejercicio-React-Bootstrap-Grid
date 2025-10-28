import logo from './logo.svg';
import './index.css';
import GridComponent from './components/GridComponent';
import NavBarComponent from './components/NavBarComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarComponent />
        <GridComponent />
      </header>
    </div>
  );
}

export default App;
