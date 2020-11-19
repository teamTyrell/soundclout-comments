import React from 'react';
import {
  Button,
} from '../components';
import './FollowLogin.css';

const FollowLogin = props => (

  <div className='FollowLogin'>

    <h3 className='FollowLogin__cta-text'>
      Follow<span> { props.artist.name } </span>
      and others on SoundClout.
    </h3>

    <div className='FollowLogin__buttons-container'>

      <Button
        type='primary'
        size='medium'
      >
        Create a SoundClout account
      </Button>

      <Button
        type='secondary'
        size='medium'
      >
        Sign in
      </Button>
    </div>

  </div>

);

export default FollowLogin;