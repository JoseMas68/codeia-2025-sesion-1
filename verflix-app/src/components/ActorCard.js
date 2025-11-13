import React from 'react';
import { getImageUrl } from '../services/tmdbApi';

const ActorCard = ({ actor, movies }) => {
  const profileImageUrl = actor.profile_path ? getImageUrl(actor.profile_path, 'w342') : null;
  const popularity = actor.popularity || 0;

  return (
    <div className="bg-white/10 rounded-lg overflow-hidden p-6 text-center">
      {/* Actor Image */}
      {profileImageUrl ? (
        <img
          src={profileImageUrl}
          alt={actor.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
        />
      ) : (
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-600 flex items-center justify-center border-4 border-primary">
          <span className="text-gray-400 text-sm">Sin foto</span>
        </div>
      )}

      {/* Actor Info */}
      <h3 className="text-2xl font-bold text-white mb-2">{actor.name}</h3>
      <p className="text-gray-300 text-sm mb-2">Actor Trending de la Semana</p>
      <p className="text-gray-400 text-xs mb-4">Popularidad: {popularity.toFixed(1)}</p>

      {/* Movies Count */}
      <div className="bg-primary text-white rounded-md p-3 shadow-md inline-block">
        <p className="font-semibold text-sm">
          {movies && movies.length > 0 ? `${movies.length} películas` : 'Cargando películas...'}
        </p>
      </div>

      {/* Message */}
      <p className="text-white text-sm mt-4 italic">
        "Descubre las películas más destacadas de este actor en la semana"
      </p>
    </div>
  );
};

export default ActorCard;
