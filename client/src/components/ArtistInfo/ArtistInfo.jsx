import React from 'react';
import './ArtistInfo.css';
import {
  Button,
} from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const ArtistInfo = props => (

  <div className='ArtistInfo'>

    <img
      className='ArtistInfo__profile-image'
      src='#'
      width='120'
      height='120'
      alt=''
    ></img>

    <h4 className='ArtistInfo__artist-name'>{ props.artist.name }</h4>

    <div className='ArtistInfo__info-container'>

      <div
        title={ `${ props.artist.followers } followers`}
        className='ArtistInfo__followers'>
        <FontAwesomeIcon
          icon={ faUserFriends }
          className='ArtistInfo__followers-icon'
        />
        <span>{ props.artist.followers }</span>
      </div>

      <div
        title={ `${ props.artist.songs } tracks`}
        className='ArtistInfo__tracks'>
        <FontAwesomeIcon
          icon={ faMusic }
          className='ArtistInfo__followers-icon'
        />
        <span>{ props.artist.songs }</span>
      </div>

    </div>

    <Button size='small' type='primary'>

      <div className='ArtistInfo__button-content'>

        <FontAwesomeIcon
          icon={ faUserPlus }
          className='ArtistInfo__follow-button-icon'
        />

        <span>Follow</span>
      </div>

    </Button>
  </div>

);

export default ArtistInfo;