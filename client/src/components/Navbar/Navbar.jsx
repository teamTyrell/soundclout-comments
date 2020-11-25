import React from 'react';
import './Navbar.css';
import {
  Button,
} from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';

const Navbar = props => (
  <nav className='Navbar'>

    <div className='container Navbar__container'>

      <a href='#' className='Navbar__logo-container'>

        <FontAwesomeIcon
          icon={ faSoundcloud }
          className='Navbar__logo'
        />

        {
          !props.collapseButtons &&
            <h1 className='Navbar__logo-text'>SOUNDCLOUT</h1>
        }

      </a>

      <ul className='Navbar__links-list'>
        <li>
          <a href='#' className='Navbar__link'>Home</a>
        </li>

        <li>
          <a href='#' className='Navbar__link'>Stream</a>
        </li>

        <li>
          <a href='#' className='Navbar__link'>Library</a>
        </li>
      </ul>

      <div className='Navbar__search-input-container'>

        <input
          className='Navbar__search-input'
          placeholder='Search for artists, bands, tracks, podcasts'
        />

      </div>

      <div className='Navbar__actions-container'>

        <Button type='secondary'>
          Sign in
        </Button>

        <Button className='Navbar__create-account-button'>
          Create account
        </Button>

        <a href='#' className='Navbar__link Navbar__action-link'>Upload</a>

        <a href='#' className='Navbar__more-link'>

          <FontAwesomeIcon
            icon={ faEllipsisH }
            className='Navbar__more-icon'
          />

        </a>

      </div>

    </div>

  </nav>
);

export default Navbar;