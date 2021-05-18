import logo from './logo.svg';
import './App.css';
import Buttons from './button'
import Dropdown from './components/Dropdown'

const clefOptions = ['treble', 'alto', 'tenor', 'bass']
const instrumentOptions = ['violin', 'cello', 'piano']

function App() {
  return (
    <div className="App">
      <Dropdown value={instrumentOptions} />
      <Dropdown value={clefOptions} />
      <Buttons />
    </div>
  );
}

export default App;
