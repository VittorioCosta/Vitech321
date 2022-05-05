
/* eslint-disable */
import { 
  BrowserRouter as Router, 
  Route, 
  Routes as Switch } 
from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import FormSuccess from './components/form/FormSuccess';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="row">
        <Switch>
          <Route path='/' exact element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/form-success' element={<FormSuccess />} />
        </Switch>     
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
