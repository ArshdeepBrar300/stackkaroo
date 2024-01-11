
import Home from './components/Home/Home';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Choose from './components/Choose/Choose';
import Bubbles from './components/Bubbles';
import DigitalServices from './components/DigitalServices/DigitalServices';
import SeoServices from './components/SeoServices/SeoServices';
import JobPlacement from './components/JobPlacement/JobPlacement';
const LANDINGPAGE = () => {
  return (
    <div className="landing-page">
        <Bubbles/>
        <Home/>
        <AboutUs/>
       <Choose/>
        <DigitalServices/>
        <SeoServices/>
        <JobPlacement/>

    </div>
  );
};

export default LANDINGPAGE;
