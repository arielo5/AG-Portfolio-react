import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <br></br>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/services" component={Services} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
