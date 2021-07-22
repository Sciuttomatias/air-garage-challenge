import Home from './components/Home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
    
  );
}

export default App;
