import { Link } from 'react-router-dom';
import './menu.css';

export const Menu = () => {
  return (
    <div className='container-menu'>
      <Link className='button button-navi' to='/'>
        Home
      </Link>
      <Link className='button button-navi' to='/'>
        Story
      </Link>
      <Link className='button button-navi' to='/'>
        Tech
      </Link>
      <Link className='button button-navi' to='/'>
        Why
      </Link>
      <Link className='button button-navi' to='/'>
        Contact
      </Link>
    </div>
  );
};
