import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';
import About from './about';

const Main = () => (
  <Switch>
    <Route exact path="/">
      <Landingpage/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/resume"> 
     <Resume/>
    </Route>
    <Route path="/projects">
     <Projects/>
    </Route>
  </Switch>
)

export default Main;