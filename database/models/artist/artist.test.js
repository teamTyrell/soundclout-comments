const artist = require('./artist.js');
const { readArtistById, } = artist;

describe('Artist model', () => {

  describe('readArtistById()', () => {

    it('should exist', () => {

      expect(readArtistById).toBeDefined();

    });

    it('should be a function', () => {

      expect(typeof readArtistById).toBe('function');

    });

    it('should return a promise', () => {

      expect(readArtistById(1)).toBeInstanceOf(Promise);

    });

    it('should resolve with an array', done => {

      readArtistById(1)
        .then(artistData => {

          expect(Array.isArray(artistData)).toBe(true);
          done();

        }).catch(done);

    });

    it('should resolve with an artist with an id of 1', done => {

      readArtistById(1)
        .then(artistData => {

          expect(artistData[0].id).toBe(1);
          done();

        }).catch(done);

    });

    it('should resolve with an empty array if the artist does not exist', done => {

      readArtistById(0)
        .then(artistData => {

          expect(artistData.length).toBe(0);
          done();

        }).catch(done);

    });

  });

});