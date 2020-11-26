const errors = require('../../constants/errors');

const { songs } = require('../../../database/models');
const { readSongById, readSongs } = songs;

const { comments } = require('../../../database/models');
const { readCommentsBySongId } = comments;

const { replies } = require('../../../database/models');
const { readRepliesByCommentId } = replies;

const { users } = require('../../../database/models');
const { readUserById } = users;

const { playlists } = require('../../../database/models');
const { readPlaylistsBySongId, readSongsByPlaylistId } = playlists;

const getSongComments = (req, res, next) => {

  const { song_id } = req.params;
  const page = req.query.page || 1;
  const results = req.query.results || 25;

  try {

    readCommentsBySongId(song_id)
      .then(comments => {

        const total = comments.length;
        const userPromises = [];

        comments.forEach(({ user_id }) => {

          userPromises.push(readUserById(user_id));

        })

        Promise.all(userPromises)
          .then(users => {

            comments.forEach((comment, i) => {
              delete comment.user_id;
              comment.user = users[i]
            });

            const replyPromises = [];

            comments.forEach(({ id }, i) => {

              replyPromises.push(
                readRepliesByCommentId(id)
              );

            });

            Promise.all(replyPromises)
              .then(repliesData => {

                const replies = {};

                repliesData.forEach(commentReplies => {

                  if (commentReplies.length > 0) {

                    commentReplies.forEach(reply => {

                      let comment;
                      comments.forEach((com, i) => {

                        if (com.id === reply.reply_id) {
                          comment = com;
                          comments.splice(i, 1);
                        }

                      });

                      Array.isArray(replies[reply.comment_id])
                        ? (replies[reply.comment_id].push(comment))
                        : (replies[reply.comment_id] = [comment]);

                    });

                  }
                });

                comments.forEach(comment => comment.replies = replies[comment.id]);

                const pages = Math.ceil(comments.length / results);
                const stopIndex = (results * page) - 1;
                const startIndex = (stopIndex - results) + 1;

                const finalComments = comments.filter((comment, i) => {
                  return i >= startIndex && i <= stopIndex && comment !== null;
                });

                res.status(200).json({
                  page: parseInt(page),
                  pages,
                  results: finalComments.length,
                  total,
                  comments: finalComments
                })

            }).catch(next);

          }).catch(next);

      }).catch(readError => {
        next(readError);
      });


  } catch (error) {
    next(error);
  }
};

const getSongs = (req, res, next) => {

  try {

    readSongs()
      .then(songsData => {
        res.status(200).json(songsData);
      }).catch(readError => {
        next(readError);
      });

  } catch (error) {
    next(error);
  }

};

const getSongById = (req, res, next) => {

  try {

    const { id } = req.params;

    readSongById(id)
      .then(song => {

        if (song.length === 0) next(new Error(errors.SONG_NOT_FOUND));
        else res.status(200).json(song[0]);

      }).catch(readError => {
        next(readError);
      });

  } catch (error) {
    next(error);
  }

};

const getSongPlaylists = (req, res, next) => {

  const { song_id } = req.params;

  readPlaylistsBySongId(song_id)
    .then(playlists => {

      const songsPromises = [];

      playlists.forEach(({ id }) => {
        songsPromises.push(readSongsByPlaylistId(id));
      });

      Promise.all(songsPromises)
        .then(songsArr => {

          songsArr.forEach((songs, i) => {
            playlists[i].songs = songs;
          });

          const userPromises = [];

          playlists.forEach(({ user_id }) => {
            userPromises.push(readUserById(user_id));
          });

          Promise.all(userPromises)
            .then(usersArr => {

              usersArr.forEach((user, i) => {
                playlists[i].user = user;
                delete playlists[i].user_id;
              });


              res.status(200).json(playlists);
            });

        }).catch(readSongsError => {
          console.log(readSongsError);
          res.sendStatus(500);
        });

    }).catch(readPlaylistsError => {
      console.log(readPlaylistsError);
      res.sendStatus(500);
    });

};

module.exports = {
  getSongById,
  getSongs,
  getSongComments,
  getSongPlaylists,
};