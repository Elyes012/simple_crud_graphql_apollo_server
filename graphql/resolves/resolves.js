const Movie = require('../../models/movie.models').Movies;

const resolvers = {
    Query: {
      getMovies: (parent, args) => {
        return Movie.find({});
      },
      getMovie: (parent, args) => {
          console.log(args.id)
        return Movie.findById(args.id);
      }
    },
    Mutation: {
      addMovie: (parent, args) => {
        let film = new Movie({
          name: args.name,
          producer: args.producer,
          rating: args.rating,
        });
        return film.save();
      },
      updateMovie: (parent, args) => {
        if (!args.id) return;
          return Movie.findOneAndUpdate(
           {
             _id: args.id
           },
           {
             $set: {
               name: args.name,
               producer: args.producer,
               rating: args.rating,
             }
           }, {new: true}, (err, Movie) => {
             if (err) {
               console.log('Something went wrong when updating the movie');
             } else {
             }
           }
        );
      }
    }
  }

   module.exports = {
    'resolvers':resolvers
    }