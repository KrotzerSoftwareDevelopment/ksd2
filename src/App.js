import React from 'react';
import Navigation from './FilePages/Navigation';
import Consult from './FilePages/Consult';
import About from './FilePages/About';
import Contact from './FilePages/Contact';
import Portfolio from './FilePages/Portfolio';
import Footer from './FilePages/Footer.js';
import './FilePages/Styles.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './FilePages/HomePage.js';
function App() {
  return (
    <div className="App">
    <Navigation />
    <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Consult" component={Consult} />
          <Route path="/Portfolio" component={Portfolio} />
    </Switch>
    <Homepage />
    <Footer />
    </div>
  );
}

export default App;
