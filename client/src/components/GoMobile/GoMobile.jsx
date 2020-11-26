import React from 'react';
import './GoMobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';

const GoMobile = props => (
  <div className='GoMobile'>

    <div className='GoMobile__heading'>
      <h3>Go Mobile</h3>

      <button
        onClick={ props.handleClose }
        className='GoMobile__close-button'
       >
         x
      </button>

    </div>

    <div className='GoMobile__badge-container'>

      <img
        src='https://soundclout-images.s3.ca-central-1.amazonaws.com/appstore-badge.png'
        alt='Applestore badge'
      />

      <img
        src='https://soundclout-images.s3.ca-central-1.amazonaws.com/playstore-badge.png'
        alt='Playstore badge'
      />

    </div>

  </div>
);

export default GoMobile;