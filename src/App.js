
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Body from './components/Body/Body';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Expert from './components/Expert/Expert';
import Score from './components/Score/Score';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Body/>
      <Skills/>
      <Experience/>
      <Expert/>
      <Score/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
