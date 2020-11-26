import axios from 'axios';

export const formatSongTime = num => {

  let seconds = 0;
  let minutes = 0;


  for (let i = 1; i <= num; i++) {

    seconds++;

    if (seconds % 60 === 0) {
      minutes++;
      seconds = 0;
    }

  }

  minutes = minutes.toString();
  seconds = seconds.toString();

  return `${ minutes }:${ seconds.length < 2 ? `0${ seconds }` : seconds }`
}

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

export const getRandomTracks = (songs = 100, num = 3) => {

  return new Promise((resolve, reject) => {

    const songPromises = [];
    const songsCache = {};

    for (let i = 0; i < num; i++) {

      let songId = Math.floor(Math.random() * songs) + 1;
      while (songsCache[songId]) {
        let songId = Math.floor(Math.random() * songs) + 1;
      }
      songsCache[songId] = songId;

      songPromises.push(getSong(songId));

    }

    Promise.all(songPromises)
      .then(songs => {

        const albumPromises = [];

        songs.forEach(({ album_id }) => albumPromises.push(getAlbum(album_id)))

        Promise.all(albumPromises)
          .then(albums => {

            songs.forEach((song, i) => {

              song.album = albums[i];
              delete song.album_id;
              delete song.artist_id;

            });

            resolve(songs);

          }).catch(reject);

      }).catch(reject);
  });

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

export const getRandomUsers = (num = 9, totalUsers = 100) => {

  return new Promise((resolve, reject) => {

    const userCache = { 0: 0 };
    const userIds = [];

    for (let i = 0; i < num; i++) {

      let userId = 0;
      while (userId in userCache) {
        userId = Math.floor(Math.random() * totalUsers) + 1;
      }

      userIds.push(userId);

    }

    const promises = [];

    userIds.forEach(id => {

      promises.push(axios({
        url: `/api/users/${ id }`,
        method: 'GET',
      }).then(({ data }) => data));
    });

    Promise.all(promises)
      .then(users => {
        resolve(users);
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

export const getAlbum = id => {

  return new Promise((resolve, reject) => {

    axios({
      url: `/api/albums/${ id }`,
      method: 'GET',
    }).then(({ data }) => resolve(data))
    .catch(reject);

  });
}

export const getSongPlaylists = song_id => {

  return new Promise((resolve, reject) => {

    axios({
      url: `/api/songs/${ song_id }/playlists`,
      method: 'GET',
    }).then(({ data }) => {
      resolve(data);
    }).catch(reject);

  });

};