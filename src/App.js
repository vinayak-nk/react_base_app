import React from 'react'
import { Article, Brand, CTA, Feature, Navigation } from './Components'
import { About, Features, Footer, Header, Blog, Possibility } from './Containers'
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navigation />
        <Header />
      </div>
      <Brand />
      <About />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
