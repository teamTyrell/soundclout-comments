import React from 'react';
import './App.css';
import {
  ArtistInfo,
  FollowLogin,
  CommentInput,
  Button,
  CommentsList,
  Loader,
} from '../components';
import {
  getSongs,
  getArtist,
  getSongComments,
  getRandomSongAndData,
  formatNumber,
} from '../../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faRetweet,
  faShareSquare,
  faPlay,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      currentSong: {},
      comments: {
        comments: [],
      },
      artist: {},
      commentInput: '',
      commentInputIsFocused: false,
      collapseButtons: false,
      loading: true,
      initialLoad: true,
    };

    this.loadComments = this.loadComments.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleInputFocus = this.toggleInputFocus.bind(this);
  }

  loadComments(handleListener) {

    const page = this.state.comments.page || 0;
    const id = this.state.currentSong.id || 0;

    getSongComments(id, page + 1, 10)
      .then(comments => {

        console.log(comments);

        this.setState({ comments: {
          ...this.state.comments,
          page: comments.page,
          pages: comments.pages,
          results: comments.results,
          comments: [
            ...this.state.comments.comments,
            ...comments.comments,
          ]}
        });

        handleListener();

      }).catch(console.log);

  }

  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value });

  }

  toggleInputFocus(e) {

    this.setState({ commentInputIsFocused: !this.state.commentInputIsFocused });
    console.log('test');
  }

  componentDidMount() {

    if (window.innerWidth <= 1240) this.setState({ collapseButtons: true });

    window.addEventListener('resize', () => {

      if (window.innerWidth <= 1240) {
        this.setState({ collapseButtons: true });
      } else {
        this.setState({ collapseButtons: false });
      }

    });

    if (this.state.songs.length > 0) {

      getRandomSongAndData(this.state.songs)
        .then(({ song, comments, artist }) => {
          this.setState({ initialLoad: false, currentSong: song, comments, artist });
        }).catch(console.log);

    } else {

      getSongs()
        .then(songs => {

          this.setState({ songs });
          getRandomSongAndData(songs)
            .then(({ song, comments, artist }) => {
              this.setState({ initialLoad: false, currentSong: song, comments, artist });
            }).catch(console.log);

        }).catch(console.log);

    }

  }

  componentDidUpdate() {

    if (
      this.state.comments.page
      >= this.state.comments.pages
      && this.state.loading === true
    ) this.setState({ loading: false });

  }

  render() {

    return (
      <div className='App__container'>

        <div className='App__comments-heading'>

          <div className='App__comment-input-container'>
            <CommentInput
              value={ this.state.commentInput }
              focused={ this.state.commentInputIsFocused }
              handleChange={ this.handleChange }
              toggleInputFocus={ this.toggleInputFocus }
            />
          </div>

          <div className='App__song-actions-container'>

            <div className='App__song-actions-buttons'>

              <Button type='secondary'>

                <div className='App__button-content'>
                  <FontAwesomeIcon
                    icon={ faHeart }
                    className='App__like-icon'
                  />
                  {
                    !this.state.collapseButtons && <span>Like</span>
                  }
                </div>

              </Button>

              <Button type='secondary'>

                <div className='App__button-content'>
                  <FontAwesomeIcon
                    icon={ faRetweet }
                    className='App__repost-icon'
                  />
                  {
                    !this.state.collapseButtons && <span>Repost</span>
                  }
                </div>

              </Button>

              <Button type='secondary'>

                <div className='App__button-content'>
                  <FontAwesomeIcon
                    icon={ faShareSquare }
                    className='App__share-icon'
                  />
                  {
                    !this.state.collapseButtons && <span>Share</span>
                  }
                </div>

              </Button>

              <Button type='secondary'>

                <div className='App__button-content'>
                  <FontAwesomeIcon
                    icon={ faPlay }
                    className='App__next-up-icon'
                  />
                  {
                    !this.state.collapseButtons && <span>Add to Next up</span>
                  }
                </div>

              </Button>

              <Button type='secondary'>

                <div className='App__button-content'>
                  <FontAwesomeIcon
                    icon={ faEllipsisH }
                    className='App__more-icon'
                  />
                  {
                    !this.state.collapseButtons && <span>More</span>
                  }
                </div>

              </Button>

            </div>

            <div className='App__song-actions-info'>

              <div
                title={
                  `${ this.state.currentSong.plays
                    && formatNumber(this.state.currentSong.plays) } plays`
                }
                className='App__song-info App__song-plays'>
                <FontAwesomeIcon
                  icon={ faPlay }
                  className='App__plays-icon'
                />
                <span>{
                  this.state.currentSong.plays
                    && formatNumber(this.state.currentSong.plays)
                }</span>
              </div>

              <div
                title={ `${ this.state.currentSong.likes } likes`}
                className='App__song-info App__song-like'>
                <FontAwesomeIcon
                    icon={ faHeart }
                    className='App__likes-icon'
                  />
                <span>{ this.state.currentSong.likes }</span>
              </div>

              <div
                title={ `${ this.state.currentSong.reposts } reposts` }
                className='App__song-info App__song-reposts'>
                <FontAwesomeIcon
                    icon={ faRetweet }
                    className='App__reposts-icon'
                />
                <span>{ this.state.currentSong.reposts }</span>
              </div>

            </div>

          </div>

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

            <div className='App__comments-meta-info'></div>

            <CommentsList
              comments={ this.state.comments }
            />

            {
              this.state.loading && <Loader { ...this.state } loadComments={ this.loadComments }/>
            }

          </div>

        </div>

      </div>
    );
  }
}

export default App;