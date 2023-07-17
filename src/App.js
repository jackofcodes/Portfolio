
import './App.css';
import Banner from './components/Banner'
import  NavBar  from './components/NavBar'
import Skills from './components/Skills'
import Contact from './components/Contact'
import {Footer} from './components/Footer'
import {Projects} from './components/Projects'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
     
    </div>
  );
}

export default App;
