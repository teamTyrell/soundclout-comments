const { db } = require('../../config.js');

const readPlaylistsBySongId = song_id => {

  return new Promise((resolve, reject) => {

    db('songsPlaylists')
      .where({ song_id })
      .select('playlist_id')
      .then(playlistIds => {

        const promises = [];

        playlistIds.forEach(({ playlist_id }) => {

          promises.push(
            db('playlists')
              .where({ id: playlist_id })
              .select()
          );

        });

        Promise.all(promises)
          .then(playlists => {
            resolve(playlists[0]);
          }).catch(reject);

      }).catch(reject);

  });

};

const readSongsByPlaylistId = playlist_id => {

  return new Promise((resolve, reject) => {

    db('songsPlaylists')
      .where({ playlist_id })
      .select('song_id')
      .then(songIds => {
        const promises = [];

        songIds.forEach(({ song_id }) => {

          promises.push(
            db('songs')
              .where({ id: song_id })
              .select()
          );

        });

        Promise.all(promises)
          .then(songs => {
            resolve(songs);
          }).catch(reject);

      }).catch(reject);

  });

};

module.exports = {
  readPlaylistsBySongId,
  readSongsByPlaylistId,
};