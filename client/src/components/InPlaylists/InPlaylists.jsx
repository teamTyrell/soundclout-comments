import React from 'react';
import './InPlaylists.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLayerGroup,
  faHeart,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';

const InPlaylists = props => {

  const playlists = [];

  if (props.song) {
    for (let i = 0; i < 3; i++) {
      if (props.song.playlists[i]) playlists.push(props.song.playlists[i]);
    }
  }

  return (
    <div className='InPlaylists'>

      <div className='InPlaylists__heading'>
        <FontAwesomeIcon
          icon={ faLayerGroup }
          className='InPlaylists__playlists-icon'
        />

        <h3>In Playlists</h3>

        <a href='#'>View All</a>

      </div>

      <ul className='InPlaylists__playlist-list'>
        {
          props.song &&
          playlists.map((playlist, index) => (
            <li className='InPlaylists__playlist' key={ index }>

              <div className='InPlaylists__playlist-image-container'>
                <img
                  className='InPlaylists__playlist-image'
                  src={ props.song && `https://soundclout-images.s3.ca-central-1.amazonaws.com/${ playlist.image_url }` }
                  width='50'
                  height='50'
                />
              </div>

                <div className='InPlaylists__playlist-info-container'>

                  <a className='InPlaylists__user-name' href='#'><span>{ playlist.user.name }</span></a>

                  <a className='InPlaylists__playlist-name' href='#'><span>{ playlist.name }</span></a>

                  <div className='InPlaylists__alt-info'>

                    <div className='InPlaylists__likes InPlaylists__alt-info-item'>

                      <FontAwesomeIcon
                        icon={ faHeart }
                        className='InPlaylists__likes-icon InPlaylists__icon'
                      />

                      <span>{ playlist.likes }</span>

                    </div>

                    <div className='InPlaylists__reposts InPlaylists__alt-info-item'>

                      <FontAwesomeIcon
                        icon={ faRetweet }
                        className='InPlaylists__reposts-icon InPlaylists__icon'
                      />

                      <span>{ playlist.reposts }</span>

                    </div>

                  </div>

                </div>

            </li>
          ))
        }
      </ul>

    </div>
  );
};

export default InPlaylists;
