
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/NavBar/index'
import TopMenu from './components/TopBar';
import CarouselHero from './components/HeroCarousel';

// import Section from './components/OffersCard/index'

function App() {
 
  return (
    <div >
      <TopMenu />
      <Navbar />
      <CarouselHero />
    </div>
  );
}



export default App;
