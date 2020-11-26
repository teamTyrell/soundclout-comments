import React from 'react';
import './InAlbums.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

const InAlbums = props => {

  return (
    <div className='InAlbums'>

      <div className='InAlbums__heading'>
        <FontAwesomeIcon
          icon={ faLayerGroup }
          className='InAlbums__albums-icon'
        />

        <h3>In Albums</h3>

        <a href='#'>View All</a>

      </div>

      <div className='InAlbums__album'>

        <div className='InAlbums__album-image-container'>
          <img
            className='InAlbums__album-image'
            src={ props.song && `https://soundclout-images.s3.ca-central-1.amazonaws.com/${ props.song.album.image_url }` }
            width='50'
            height='50'
          />
        </div>

        <div className='InAlbums__album-info-container'>

          <a className='InAlbums__artist-name' href='#'><span>{ props.song && props.song.artist.name }</span></a>
          <a className='InAlbums__album-name' href='#'><span>{ props.song && props.song.name }</span></a>

          <div className='InAlbums__alt-info-container'>
            <h5>Album - { props.song && props.song.album.release_date.split(' ')[2] }</h5>
          </div>

        </div>

      </div>

    </div>
  );
};

export default InAlbums;