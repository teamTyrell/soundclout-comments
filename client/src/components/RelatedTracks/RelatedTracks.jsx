import React from 'react';
import './RelatedTracks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMusic,
  faPlay,
  faHeart,
  faRetweet,
  faCommentAlt,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import {
  formatNumber,
} from '../../lib/utils';
import{
  Button,
} from '../components';

const RelatedTracks = props => {

  const tracks = [];

  for (let i = 0; i < 3; i++) {
    if (props.tracks[i]) tracks.push(props.tracks[i]);
  }

  return (
    <div className='RelatedTracks'>

      <div className='RelatedTracks__heading'>
        <FontAwesomeIcon
          icon={ faMusic }
          className='RelatedTracks__songs-icon'
        />

        <h3>Related Tracks</h3>

        <a href='#'>View All</a>

      </div>

      <ul className='RelatedTracks__tracks-list'>
        {
          props.tracks &&
            tracks.map((song, index) => (
              <li className='RelatedTracks__track-container' key={ index }>

                <div className='RelatedTracks__track'>

                  <img
                    className='RelatedTracks__track-image'
                    src={ `https://soundclout-images.s3.ca-central-1.amazonaws.com/${ song.album.image_url }` }
                    alt=''
                    width='50'
                    height='50'
                  />

                  <div className='RelatedTracks__track-info-container'>

                    <a className='RelatedTracks__artist-name' href='#'><span>{ song.album.artist.name }</span></a>

                    <a className='RelatedTracks__track-name' href='#'><span>{ song.name }</span></a>

                    <div className='RelatedTracks__alt-info'>

                      <div className='RelatedTracks__plays RelatedTracks__alt-info-item'>

                        <FontAwesomeIcon
                          icon={ faPlay }
                          className='RelatedTracks__play-icon RelatedTracks__icon'
                        />

                        <span>{ formatNumber(song.plays) }</span>

                      </div>

                      <div className='RelatedTracks__likes RelatedTracks__alt-info-item'>

                        <FontAwesomeIcon
                          icon={ faHeart }
                          className='RelatedTracks__likes-icon RelatedTracks__icon'
                        />

                        <span>{ song.likes }</span>

                      </div>

                      <div className='RelatedTracks__reposts RelatedTracks__alt-info-item'>

                        <FontAwesomeIcon
                          icon={ faRetweet }
                          className='RelatedTracks__reposts-icon RelatedTracks__icon'
                        />

                        <span>{ song.reposts }</span>

                      </div>

                      <div className='RelatedTracks__comments RelatedTracks__alt-info-item'>

                        <FontAwesomeIcon
                          icon={ faCommentAlt }
                          className='RelatedTracks__comments-icon RelatedTracks__icon'
                        />

                        <span>100</span>

                      </div>

                    </div>

                  </div>
                </div>

                <div className='RelatedTracks__track-overlay'>

                  <div className='RelatedTracks__track-actions'>

                    <button className='RelatedTracks__play-button'>
                      <FontAwesomeIcon
                        icon={ faPlay }
                        className='RelatedTracks__play-button-icon'
                      />
                    </button>

                    <div className='RelatedTracks__action-buttons'>

                      <Button type='default' size='small'>
                        <FontAwesomeIcon
                          icon={ faHeart }
                          className='RelatedTracks__like-button-icon'
                        />
                      </Button>

                      <Button type='default' size='small'>
                        <FontAwesomeIcon
                          icon={ faEllipsisH }
                          className='RelatedTracks__more-button-icon'
                        />
                      </Button>

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

export default RelatedTracks;