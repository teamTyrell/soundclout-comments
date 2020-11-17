import React from 'react';
import './App.css';
import {
  ArtistInfo,
} from '../components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className='App__container'>

        <div className='App__comments-heading'>

        </div>

        <div className='App__comments-body'>

          <div className='App__artist-container'>
            <ArtistInfo />
          </div>

          <div className='App__comments-container'>

          </div>

        </div>

      </div>
    );
  }
}

export default App;