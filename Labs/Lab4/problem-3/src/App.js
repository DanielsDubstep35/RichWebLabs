import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Body from './components/body';

let noteNumberTracker = 0;

function App() {
  return (
    <Body
      noteNumberTracker={noteNumberTracker++}
    >

    </Body>
  );
}

export default App;
