import React, {useState, useEffect} from 'react'
import './Navbar.css';
import './sub-list-media.css'
import { Link,Box } from '@mui/material';
import Person4Icon from '@mui/icons-material/Person4';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Search from "@mui/icons-material/Search";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Hamburger from 'hamburger-react';
// import LaptopMacIcon  from '@mui/icons-material/LaptopMac';
// import ComputerIcon from '@mui/icons-material/Computer';
// import MonitorIcon from '@mui/icons-material/Monitor';
// import HardwareIcon from '@mui/icons-material/Hardware';
// import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
// import HeadphonesBatteryIcon from '@mui/icons-material/HeadphonesBattery';
// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <Box>
    <nav>
<div>
    <button onClick={toggleNav} className="btn"> <Hamburger direction='ringht' size={12} color="black" duration={0.1}/> </button>
    </div>
      <Link href="#">
      <img className='msi-logo-nav' src="https://storage-asset.msi.com/frontend/imgs/logo.png" alt="MSI  Logo"></img>
             </Link>
      
      <ul className="list">
      <li className="items">PRODUCTS</li>
      <li className="items">ODM SOLUTIONS</li>
      <li className="items">WHAT'S NEW</li>
      <li className='items'>SUPPORT</li>
    </ul>
      <div className="ICONBOx">
            <a href="d,emomc" className="ICONButton">
               <Person4Icon className="ICONLogo"/>
            </a>
               <a href="nklx" className="ICONButton ICONButtonA">
                   <LocationOnIcon className="ICONLogo"/>
               </a>
                   <a href="skxl" className="ICONButton">
                       <Search className="ICONLogo"/>
                   </a>
      </div>
    </nav>
    <div>
    {(toggleMenu || screenWidth > 1030) && (
 <div className='listmenu'>
  <button className="items">PRODUCTS<use className='itemsicons'><ChevronRightIcon/></use></button>
  {/* <div className='sub-menu-container' >
  <button className="items-sub-product"><use className='sub-pro-icons'><LaptopMacIcon /></use>Laptops<use className='itemsicons-sub'><ChevronRightIcon/></use></button>
  <button className="items-sub-product"><use className='sub-pro-icons'><ComputerIcon /></use>Destops<use className='itemsicons-sub'><ChevronRightIcon/></use></button>
  <button className="items-sub-product"><use className='sub-pro-icons'><MonitorIcon /></use>Monitors<use className='itemsicons-sub'><ChevronRightIcon/></use></button>
  <button className="items-sub-product"><use className='sub-pro-icons'><HardwareIcon /></use>Graphics<use className='itemsicons-sub'><ChevronRightIcon/></use></button>
  <button className="items-sub-product"><use className='sub-pro-icons'><DeveloperBoardIcon/></use>Motherboards<use className='itemsicons-sub'><ChevronRightIcon/></use></button>
  <button className="items-sub-product"><use className='sub-pro-icons'><HeadphonesBatteryIcon/></use>Peripherals<use className='itemsicons-sub'><ChevronRightIcon/></use></button>
  <button className="items-sub-product"><use className='sub-pro-icons'><SettingsInputComponentIcon/></use>Components<use className='itemsicons-sub'><ChevronRightIcon/></use></button>
  </div> */}
  <button className="items">ODM SOLUTIONS<use className='itemsiconsA'><ChevronRightIcon/></use></button>
  <button className="items">WHAT'S NEW<use className='itemsiconsB'><ChevronRightIcon/></use></button>
  <button className="items">SUPPORT<use className='itemsiconsC'><ChevronRightIcon/></use></button>
 </div>
    )}
    </div>
   </Box>
  )
}