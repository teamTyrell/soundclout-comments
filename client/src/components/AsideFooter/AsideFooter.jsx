import React from 'react';
import './AsideFooter.css';

const AsideFooter = props => (
  <div className='AsideFooter'>

    <div className='AsideFooter__links-container'>
      <a href='#'>Legal</a> - <a href='#'>Privacy</a> - <a href='#'>Cookies</a> - <a href='#'>Creator Resources</a> - <a href='#'>Blog</a> - <a href='#'>Charts</a> - <a href='#'>Popular Searches</a>
    </div>

    <a className='AsideFooter__language' href='#'>Language: <span>English (US)</span></a>

  </div>
);

export default AsideFooter;