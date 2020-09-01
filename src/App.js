import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Booking from './components/Booking';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/bookings' component={Booking} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:user_id' component={User} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
