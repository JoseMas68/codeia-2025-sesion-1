import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../services/tmdbApi';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const imageUrl = getImageUrl(movie.poster_path, 'w300');
  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date;
  const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';

  // Determinar si es película o serie
  const type = movie.media_type || (movie.title ? 'movie' : 'tv');

  const handleClick = () => {
    navigate(`/${type}/${movie.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-96 object-cover"
        />
      ) : (
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Sin imagen</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 truncate">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">{year}</span>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="ml-1 text-sm text-gray-700">
              {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
