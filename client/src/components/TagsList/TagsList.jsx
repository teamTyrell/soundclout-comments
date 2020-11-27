import React from 'react';
import './TagsList.css';

const TagsList = props => (
  <ul className='TagsList'>
    {
      props.tags &&
        props.tags.map(({ id, name}) => (
          <li key={ id } className='TagsList__tag'>
            { `# ${ name }` }
          </li>
        ))
    }
  </ul>
);

export default TagsList;