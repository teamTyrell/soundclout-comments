import axios from 'axios';

export const formatNumber = num => {

  const numArr = num.toString().split('');
  let number = '';
  let j = 1;

  for (let i = numArr.length - 1; i >= 0; i--) {

    number = numArr[i] + number;
    if (j % 3 === 0 && i !== 0) {
      number = ',' + number;
    }
    j++;

  }

  return number;

};

export const getRandomSongAndData = songs => {

  return new Promise((resolve, reject) => {

    const index = Math.floor(Math.random() * songs.length - 1);
    const song = songs[index];

    getArtist(song.artist_id)
      .then(artist => {

        getSongComments(song.id)
          .then(comments => {

            resolve({ song, comments, artist });

          }).catch(reject);

      }).catch(reject);

  });

};

export const getSongComments = (song_id, page = 1, results = 10) => {

  return new Promise((resolve, reject) => {

    axios({
      url: `/api/songs/${ song_id }/comments?page=${ page }&results=${ results }`,
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