const { initApi } = require('../../api');
const errors = require('../../constants/errors');
const request = require('supertest')(initApi());

describe('Artists routes', () => {

  describe('GET /api/artists/:id', () => {

    it('should respond with a 200 status code', done => {

      request
        .get('/api/artists/1')
        .expect(200)
        .end((err, res) => {

          if (err) return done(err);
          done();

        });

    });

    it('should respond with json', done => {

      request
        .get('/api/artists/1')
        .expect('Content-Type', /json/)
        .end((err, res) => {

          if (err) return done(err);
          done();

        });

    });

    it('should respond with an object containing an id of 1', done => {

      request
        .get('/api/artists/1')
        .end((err, res) => {

          if (err) return done(err);

          expect(res.body.id).toBe(1);
          done();

        });

    });

    it('should respond with a 404 status code', done => {

      request
        .get('/api/artists/0')
        .expect(404)
        .end((err, res) => {

          if (err) return done(err);
          done();

        });

    });

    it(`should respond with an '${ errors.ARTIST_NOT_FOUND }' error`, done => {

      request
        .get('/api/artists/0')
        .end((err, res) => {

          if (err) return done(err);
          expect(res.body.error).toBe(errors.ARTIST_NOT_FOUND);
          done();

        });

    });

  });

});