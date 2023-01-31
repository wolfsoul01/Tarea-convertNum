import './App.css'
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Componentes/Home';
import Convertor from './Componentes/Convertor';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/converter">Converter</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/converter" component={Convertor} />
      </Switch>
    </div>
  )
}

export default App