import NavBar from './component/Navbar/NavBar';
import {Box} from '@mui/material';
import Slider from './component/slider';
import Titan from './component/third/titan/titan';
import Megz from './component/third/MEGZ790/MEGZ790';
import Geforce from './component/third/Geforce/Geforce';
import Four from './component/fourth/fourth';
import Fifthmain from './component/fifth/fifthmain';
import Sixth from './component/sixth/sixth';
import Seven from './component/seven/seven';
import Eight from './component/eight/eight';
import Eightmedia from './component/eight/eightmedia';
import Footer from './component/footer/footer';
import './App.css'
function App() {
  return (
    <Box className='box-container'>
    <NavBar/>
    <Slider />
    <div className='second-container'>
      <Titan />
      <Megz />
      <Geforce />
    </div>
    <div>
      <Four />
    </div>
    <div>
      <Fifthmain />
    </div>
    <div>
      <Sixth />
    </div>
    <div>
      <Seven />
    </div>
    <div className='eight-stack'>
      <Eight />
    </div>
    <div className='eight-media'>
      <Eightmedia />
    </div>
    <div>
      <Footer />
    </div>
    </Box>
  );
}

export default App;
