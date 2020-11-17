import React from 'react';
import './ArtistInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const ArtistInfo = props => (

  <div className='ArtistInfo'>

    <img
      className='ArtistInfo__profile-image'
      src='#'
      width='120'
      height='120'
      alt=''
    ></img>

    <h4 className='ArtistInfo__artist-name'>Trippie Redd</h4>

    <div className='ArtistInfo__info-container'>

      <div className='ArtistInfo__followers'>
        <FontAwesomeIcon
          icon={ faUserFriends }
          className='ArtistInfo__followers-icon'
        />
        <span>1.42M</span>
      </div>

      <div className='ArtistInfo__tracks'>
        <FontAwesomeIcon
          icon={ faMusic }
          className='ArtistInfo__followers-icon'
        />
        <span>201</span>
      </div>

    </div>

    <button>Follow</button>
  </div>

);

export default ArtistInfo;