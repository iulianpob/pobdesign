import './header.css';
import logo from '../../../assets/logo.png';
import { Menu } from './Menu/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const Header = () => {
  return (
    <div className='container-header'>
      <div className='container-logo'>
        <img src={logo} alt='logo pobdesign' className='header-logo' />
      </div>
      <div className='header-menu'>
        <Router>
          <Menu />
        </Router>
      </div>
      <div className='header-social'>
        <a href='#'>
          <FacebookIcon className='button button-social' />
        </a>
        <a href='#'>
          <InstagramIcon className='button button-social' />
        </a>
        <a href='#'>
          <AccessAlarmIcon className='button button-social' />
        </a>
      </div>
    </div>
  );
};
