import React, {Component} from 'react';
import {Route, Redirect, Router} from "react-router-dom";
import Home from '../../components/Home';
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';
import Services from '../../components/Services';
import "bulma/css/bulma.min.css";

class Header extends Component {
    render() {
        return (
            <Router>
                <div className="row Header" id="header">
                    <Navigation/>
                </div>

                <div className="content">
                    <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/services" component={Services}/>
                </div>
            </Router>
        )
    }
}

export default Header;