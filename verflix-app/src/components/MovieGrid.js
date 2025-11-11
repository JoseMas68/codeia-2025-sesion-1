import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, title }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No hay películas disponibles</p>
      </div>
    );
  }

  return (
    <div className="mb-12">
      {title && (
        <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
