import React, { Component } from 'react';
import './App.css';
import {Header, Navigation, Layout, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Landing from './components/landingpage'
function App() {
  return (
    <div className="demo-big-content">
      <Layout fixedHeader>
        <Header className="header-color" title={<span><span style={{ color: '#ffd' }}>Andy's </span><strong>Portfolio</strong></span>}>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main/>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
