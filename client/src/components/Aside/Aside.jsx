import React from 'react';
import './Aside.css';
import axios from 'axios';
import {
  RelatedTracks,
  InAlbums,
  InPlaylists,
  AsideInfoUsers,
  GoMobile,
  AsideFooter,
} from '../components';
import {
  getSong,
  getAlbum,
  getArtist,
  getRandomTracks,
  getSongPlaylists,
  getRandomUsers,
} from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';

class Aside extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedTracks: [],
      goMobileVisible: true,
    };

    this.closeGoMobile = this.closeGoMobile.bind(this);
  }

  closeGoMobile() {
    this.setState({ goMobileVisible: false });
  }

  componentDidMount() {

    getRandomUsers()
      .then(users => {
        this.setState({ likesUsers: users })
      }).catch(console.error);

    getRandomUsers()
      .then(users => {
        this.setState({ repostsUsers: users })
      }).catch(console.error);

    getRandomTracks()
      .then(songs => {
        this.setState({ relatedTracks: songs })
      }).catch(console.log);

    const song_id = Math.floor(Math.random() * 100) + 1;

    getSong(song_id)
      .then(song => {

        const { album_id } = song;
        const { artist_id } = song;

        getAlbum(album_id)
          .then(album => {

            getArtist(artist_id)
              .then(artist => {

                getSongPlaylists(song_id)
                  .then(playlists => {

                    song.playlists = playlists;
                    song.album = album;
                    song.artist = artist;

                    delete song.artist_id;
                    delete song.album_id;

                    this.setState({ currentSong: song });
                  }).catch(console.log);

              }).catch(console.log);

          }).catch(console.log);

      }).catch(console.log);

  }

  render() {
    return (
      <div className='Aside'>

        <div className='Aside__related-tracks'>

          <RelatedTracks
            tracks={ this.state.relatedTracks }
          />

        </div>

        <div className='Aside__in-albums'>

          <InAlbums
            song={ this.state.currentSong }
          />

        </div>

        <div className='Aside__in-playlists'>

          <InPlaylists
            song={ this.state.currentSong }
          />

        </div>

        <div className='Aside__likes'>

          <AsideInfoUsers
            icon={ faHeart }
            text={ `${ this.state.currentSong && this.state.currentSong.likes } likes`}
            users={ this.state.likesUsers }
          />

        </div>

        <div className='Aside__reposts'>

          <AsideInfoUsers
            icon={ faRetweet }
            text={ `${ this.state.currentSong && this.state.currentSong.reposts } reposts`}
            users={ this.state.repostsUsers }
          />

        </div>

        {
          this.state.goMobileVisible &&
            <div className='Aside__go-mobile'>

              <GoMobile
                handleClose={ this.closeGoMobile }
              />

            </div>
        }

        <div className='Aside__footer'>

          <AsideFooter />

        </div>

      </div>
    );
  }
}

export default Aside;