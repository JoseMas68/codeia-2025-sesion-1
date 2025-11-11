import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails, getTVShowDetails, getImageUrl } from '../services/tmdbApi';
import MovieGrid from '../components/MovieGrid';

function MovieDetailPage() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        let data;
        if (type === 'movie') {
          data = await getMovieDetails(id);
        } else {
          data = await getTVShowDetails(id);
        }

        setContent(data);
      } catch (err) {
        console.error('Error al cargar detalles:', err);
        setError('Error al cargar los detalles del contenido.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, type]);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center text-white">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p className="mt-4 text-xl">Cargando detalles...</p>
        </div>
      </main>
    );
  }

  if (error || !content) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p className="font-bold">Error</p>
          <p>{error || 'No se pudo cargar el contenido'}</p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded"
        >
          Volver al inicio
        </button>
      </main>
    );
  }

  const backdropUrl = getImageUrl(content.backdrop_path, 'original');
  const posterUrl = getImageUrl(content.poster_path, 'w500');
  const title = content.title || content.name;
  const releaseDate = content.release_date || content.first_air_date;
  const year = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
  const runtime = content.runtime || (content.episode_run_time && content.episode_run_time[0]);
  const trailer = content.videos?.results?.find(
    video => video.type === 'Trailer' && video.site === 'YouTube'
  );

  return (
    <main className="pb-12">
      {/* Hero Section con backdrop */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: backdropUrl ? `url(${backdropUrl})` : 'none',
          backgroundColor: !backdropUrl ? '#1E3A8A' : 'transparent'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent"></div>
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 bg-white hover:bg-gray-100 text-primary font-bold py-2 px-4 rounded-lg shadow-lg transition-colors"
        >
          ← Volver
        </button>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="flex-shrink-0">
            {posterUrl ? (
              <img
                src={posterUrl}
                alt={title}
                className="w-64 rounded-lg shadow-2xl"
              />
            ) : (
              <div className="w-64 h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Sin póster</span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
            <div className="flex items-center gap-4 mb-4 text-gray-300">
              <span>{year}</span>
              {runtime && <span>• {runtime} min</span>}
              {content.vote_average && (
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-yellow-400 fill-current mr-1"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span>{content.vote_average.toFixed(1)}/10</span>
                </div>
              )}
            </div>

            {/* Géneros */}
            {content.genres && content.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {content.genres.map(genre => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 bg-primary text-white rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {/* Sinopsis */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Sinopsis</h2>
              <p className="text-gray-300 leading-relaxed">
                {content.overview || 'No hay sinopsis disponible.'}
              </p>
            </div>

            {/* Trailer */}
            {trailer && (
              <div className="mb-6">
                <a
                  href={`https://www.youtube.com/watch?v=${trailer.key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  ▶ Ver Tráiler
                </a>
              </div>
            )}

            {/* Info adicional */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {content.status && (
                <div>
                  <span className="font-bold">Estado:</span> {content.status}
                </div>
              )}
              {content.original_language && (
                <div>
                  <span className="font-bold">Idioma original:</span>{' '}
                  {content.original_language.toUpperCase()}
                </div>
              )}
              {content.budget && content.budget > 0 && (
                <div>
                  <span className="font-bold">Presupuesto:</span> $
                  {content.budget.toLocaleString()}
                </div>
              )}
              {content.revenue && content.revenue > 0 && (
                <div>
                  <span className="font-bold">Recaudación:</span> $
                  {content.revenue.toLocaleString()}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cast */}
        {content.credits?.cast && content.credits.cast.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">Reparto</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {content.credits.cast.slice(0, 6).map(person => (
                <div key={person.id} className="text-center">
                  {person.profile_path ? (
                    <img
                      src={getImageUrl(person.profile_path, 'w185')}
                      alt={person.name}
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-300 rounded-lg mb-2 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Sin foto</span>
                    </div>
                  )}
                  <p className="text-white font-semibold text-sm">{person.name}</p>
                  <p className="text-gray-400 text-xs">{person.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Similar Content */}
        {content.similar?.results && content.similar.results.length > 0 && (
          <div className="mt-12">
            <MovieGrid
              movies={content.similar.results.slice(0, 10)}
              title="Contenido Similar"
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default MovieDetailPage;
