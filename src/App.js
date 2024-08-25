import './App.css';
import Navbar from './Nav';
import Slider from './Slider';
import Reviews from "./Rev";
import Benefits from "./Benefits"
import Recent from './Recent';
import Scope from './Scope';
import Pricing from './Pricing';
import Faq from './Faq';
// import Footer from "./Footer"
import Footer2 from './Footer2';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Reviews/>
      <Slider/>
      <Benefits/>
      <Recent/>
      <Scope/>
      <Pricing/>
      <Faq/>
      <Footer2/>
      
    </div>

  );
}

export default App;

