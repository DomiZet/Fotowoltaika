
import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components//services/Services';
import Projects from './components/projects/Projects';
import Comments from './components/comments/Comments';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.scss';
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Projects />
      <Comments />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
