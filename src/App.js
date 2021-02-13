import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className='header-color' title="Norma Cruz" scroll>
          <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Norma Cruz"  >
          <Navigation>
            <a href="/aboutme">About Me</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>

  );
}

export default App;
