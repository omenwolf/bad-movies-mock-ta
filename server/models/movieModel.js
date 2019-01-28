//SELECT one db to work with
//For SQL
const sqlDb = require('../../db/sql');
//For Mongo
// const mongoDb = require('../../db/mongodb')

module.exports = {
  movie: {
    // implement a get request
    get: function(callback) {
      // fetching all movies
      // title, rating, img, releaseDate, score
      let queryStr = 'SELECT * from movies';
      sqlDb.query(queryStr, function(error, results) {
        callback(error,results)
      })
    },
    // implement a post request
    post: function(callback) {
      let queryStr = '';
      sqlDb.query(queryStr, function (error, results) {
        callback(error, results)
      })
    }
  }
}