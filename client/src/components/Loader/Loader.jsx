import React from 'react';
import loaderGif from '../../assets/images/loader.gif';
import './Loader.css';

class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  componentDidMount() {

    const loaderContainer = document.querySelector('#loader-container');
    const eventListener = () => {

      const loaderRect = loaderContainer.getBoundingClientRect();
      if ((loaderRect.top - window.innerHeight) + 120 < 0) {

        if (!this.props.initialLoad) {

          window.removeEventListener('scroll', eventListener);

          setTimeout(() => {

            this.props.loadComments(() => {

              window.addEventListener('scroll', eventListener);

            });

          }, 800);

        }

      }

    };

    window.addEventListener('scroll', eventListener);

  }

  render() {

    return (
      <div id='loader-container' className='Loader'>
        <img src='https://soundclout-images.s3.ca-central-1.amazonaws.com/loader.gif' alt='Loader GIF'></img>
      </div>
    );
  }
};

export default Loader;