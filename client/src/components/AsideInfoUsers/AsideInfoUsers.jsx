import React from 'react';
import './AsideInfoUsers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AsideInfoUsers = props => (
  <div className='AsideInfoUsers'>

    <div className='AsideInfoUsers__heading'>
      {
        props.icon &&
          <FontAwesomeIcon
            icon={ props.icon }
            className='AsideInfoUsers__heading-icon'
          />
      }

      <h3>{ props.text && props.text }</h3>

      <a href='#'>View All</a>

    </div>

    <ul className='AsideInfoUsers__users-list'>
      {
        props.users &&
          props.users.map((user, index) => (
            <li className='AsideInfoUsers__user' key={ index }>

              <img
                className='AsideInfoUsers__user-image'
                src={ `https://soundclout-images.s3.ca-central-1.amazonaws.com/${ user.image_url }` }
                alt=''
                width='40'
                height='40'
              />

            </li>
          ))
      }
    </ul>

  </div>
);

export default AsideInfoUsers;