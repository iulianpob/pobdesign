import { Header } from '../shared/header/Header';
import { HeroText } from './hero-text/HeroText';
import { Reason } from './reason/Reason';
import MenuIcon from '@mui/icons-material/Menu';
import './home.css';
import logo from '../../assets/logo.png';

export const Home = () => {
  return (
    <div className='home-container'>
      <div className='desktop-menu'>
        <Header />
      </div>
      <div className='mobile-menu'>
        <img src={logo} alt='logo pobdesign' className='header-logo' />
        <MenuIcon className='hamburger-menu' sx={{ fontSize: '40px' }} />
      </div>
      <div className='content-container'>
        <HeroText />
        <Reason />
      </div>
    </div>
  );
};
