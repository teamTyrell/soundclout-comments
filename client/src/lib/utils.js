import axios from 'axios';

export const getRandomSongAndData = songs => {

  return new Promise((resolve, reject) => {

    const index = Math.floor(Math.random() * songs.length - 1);
    const song = songs[index];

    getArtist(song.artist_id)
      .then(artist => {

        getSongComments(song.id, 1, 25)
          .then(comments => {

            resolve({ song, comments, artist });

          }).catch(reject);

      }).catch(reject);

  });

};

export const getSongComments = (song_id, page, results) => {

  return new Promise((resolve, reject) => {

    axios({
      url: `/api/songs/${ song_id }/comments`,
      method: 'GET',
    }).then(({ data }) => resolve(data))
    .catch(reject);

  });

};

export const getSongs = () => {

  return new Promise((resolve, reject) => {

    axios({
      url: '/api/songs',
      method: 'GET',
    }).then(({ data }) => resolve(data))
    .catch(reject);

  });

};

export const getSong = id => {

  return new Promise((resolve, reject) => {

    axios({
      url: `/api/songs/${ id }`,
      method: 'GET',
    }).then(({ data }) => resolve(data))
    .catch(reject);

  });

};

export const getArtist = id => {

  return new Promise((resolve, reject) => {

    axios({
      url: `/api/artists/${ id }`,
      method: 'GET',
    }).then(({ data }) => resolve(data))
    .catch(reject);

  });
}