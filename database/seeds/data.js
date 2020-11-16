const faker = require('faker');

/**
 * For realistic data, make sure to set less
 * users than comments, less artists than
 * songs, and less songs than comments.
 */

const TOTAL_USERS = 200;
const TOTAL_ARTISTS = 20;
const TOTAL_SONGS = 100;
const TOTAL_COMMENTS = 10000; // 10000

const generateUsers = (n = TOTAL_USERS) => {

  const users = [];

  for (let i = 1; i <= n; i++) {

    const id = i;
    const name = i % 2 === 0
      ? faker.internet.userName()
      : `${ faker.name.firstName() } ${ faker.name.lastName() }`;

    const state = faker.address.state();
    const country = faker.address.country();
    const location = `${ state }, ${ country }`;
    const followers = Math.floor(Math.random() * TOTAL_USERS);

    users.push({ id, name, location, followers });

  }

  return users;

};

const generateArtists = (n = TOTAL_ARTISTS) => {

  const artists = [];

  for (let i = 1; i <= n; i++) {

    const id = i;
    const name = `${ faker.name.firstName() } ${ faker.name.lastName() }`;
    const followers = Math.floor(Math.random() * TOTAL_USERS);

    artists.push({ id, name, followers });

  }

  return artists;
};

const generateSongs = (n = TOTAL_SONGS) => {

  const songs = [];
  let artistId = 1;
  const increment = TOTAL_SONGS / TOTAL_ARTISTS;

  for (let i = 1; i <= n; i++) {

    const id = i;
    const plays = Math.floor(Math.random() * 150000) + 1000;
    const likes = Math.floor(Math.random() * TOTAL_USERS);
    const reposts = Math.floor(Math.random() * TOTAL_USERS);
    const artist_id = i % increment === 0 ? artistId++ : artistId;

    songs.push({ id, plays, likes, reposts, artist_id });
  }

  return songs;

};

const generateComments = (n = TOTAL_COMMENTS) => {

  const comments = [];
  let userId = 1;
  let songId = 1;
  // const incrementUser = TOTAL_COMMENTS / TOTAL_USERS;
  const incrementSong = TOTAL_COMMENTS / TOTAL_SONGS;

  let start = 1;
  let end = incrementSong;

  for (let i = 1; i <= n; i++) {

    const id = i;
    const text = faker.lorem.text();
    const song_at = Math.floor(Math.random() * 300);
    // const user_id = i % incrementUser === 0 ? userId++ : userId;
    const user_id = Math.floor(Math.random() * TOTAL_USERS) + 1;
    const song_id = i % incrementSong === 0 ? songId++ : songId;

    comments.push({ id, text, song_at, user_id, song_id });

  }

  return comments;

};

const generateReplies = () => {

  const replies = [];

  let id = 1;
  const range = TOTAL_COMMENTS / TOTAL_SONGS;
  for (let songId = 1; songId <= TOTAL_SONGS; songId++) {

    const firstComment = (songId * range) - (range - 1);
    const lastComment = songId * range;

    const replyIds = [];

    for (let i = firstComment; i <= lastComment; i++) {
      replyIds.push(i);
    }

    [ ...replyIds ].forEach(reply_id => {

      const isReply = Math.floor(Math.random() * 3) === 2;

      if (isReply) {

        const comment_id = Math.round(Math.random() * (lastComment - firstComment) + firstComment);

        if (replyIds.includes(comment_id)) {
          replyIds.splice(replyIds.indexOf(comment_id), 1);
        }

        if (reply_id !== comment_id && replyIds.includes(reply_id)) {
          replies.push({ id, reply_id, comment_id });
          id++;
        }


      }

    });

  }

  return replies;

};

module.exports = {
  generateUsers,
  generateArtists,
  generateSongs,
  generateComments,
  generateReplies,
};