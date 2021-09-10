import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bulma/css/bulma.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
