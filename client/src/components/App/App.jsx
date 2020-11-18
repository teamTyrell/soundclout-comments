import React from 'react';
import './App.css';
import {
  ArtistInfo,
  FollowLogin,
} from '../components';
import {
  getSongs,
  getArtist,
  getSongComments,
  getRandomSongAndData,
} from '../../lib/utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      comments: {},
      artist: {},
    };
  }

  componentDidMount() {

    if (this.state.songs.length > 0) {

      getRandomSongAndData(this.state.songs)
        .then(({ song, comments, artist }) => {
          this.setState({ currentSong: song, comments, artist });
        }).catch(console.log);

    } else {

      getSongs()
        .then(songs => {

          this.setState({ songs });
          getRandomSongAndData(songs)
            .then(({ song, comments, artist }) => {
              this.setState({ currentSong: song, comments, artist });
            }).catch(console.log);

        }).catch(console.log);

    }

  }

  render() {
    return (
      <div className='App__container'>

        <div className='App__comments-heading'>

        </div>

        <div className='App__comments-body'>

          <div className='App__artist-container'>

            <ArtistInfo
              { ...this.state }
            />

          </div>

          <div className='App__comments-container'>

            <FollowLogin
              { ...this.state }
            />

          </div>

        </div>

      </div>
    );
  }
}

export default App;