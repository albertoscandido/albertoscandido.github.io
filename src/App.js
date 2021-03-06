import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/projects" component={ Projects } />
        <Route exact path="/contact" component={ Contact } />
      </Switch>
    </>
  );
}

export default App;
