const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL = process.env.REACT_APP_TMDB_API_URL;
const IMAGE_BASE_URL = process.env.REACT_APP_TMDB_IMAGE_BASE_URL;

// Función para obtener películas populares
export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Error al obtener películas populares');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para obtener series populares
export const getPopularTVShows = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_URL}/tv/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Error al obtener series populares');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para buscar películas o series
export const searchMulti = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${API_URL}/search/multi?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Error al buscar contenido');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para obtener detalles de una película
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=es-ES&append_to_response=credits,videos,similar`
    );
    if (!response.ok) {
      throw new Error('Error al obtener detalles de la película');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para obtener detalles de una serie
export const getTVShowDetails = async (tvId) => {
  try {
    const response = await fetch(
      `${API_URL}/tv/${tvId}?api_key=${API_KEY}&language=es-ES&append_to_response=credits,videos,similar`
    );
    if (!response.ok) {
      throw new Error('Error al obtener detalles de la serie');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para construir URL de imágenes
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

// Función para obtener trending (tendencias)
export const getTrending = async (mediaType = 'all', timeWindow = 'day') => {
  try {
    const response = await fetch(
      `${API_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&language=es-ES`
    );
    if (!response.ok) {
      throw new Error('Error al obtener tendencias');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para obtener películas mejor valoradas (Top Rated)
export const getTopRatedMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Error al obtener películas mejor valoradas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para obtener series mejor valoradas (Top Rated)
export const getTopRatedTVShows = async (page = 1) => {
  try {
    const response = await fetch(
      `${API_URL}/tv/top_rated?api_key=${API_KEY}&language=es-ES&page=${page}`
    );
    if (!response.ok) {
      throw new Error('Error al obtener series mejor valoradas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para obtener actores/personas en tendencia
export const getTrendingPeople = async (timeWindow = 'week') => {
  try {
    const response = await fetch(
      `${API_URL}/trending/person/${timeWindow}?api_key=${API_KEY}&language=es-ES`
    );
    if (!response.ok) {
      throw new Error('Error al obtener actores en tendencia');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para obtener películas de un actor
export const getActorMovies = async (personId) => {
  try {
    const response = await fetch(
      `${API_URL}/person/${personId}/movie_credits?api_key=${API_KEY}&language=es-ES`
    );
    if (!response.ok) {
      throw new Error('Error al obtener películas del actor');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Función para obtener detalles de un actor
export const getActorDetails = async (personId) => {
  try {
    const response = await fetch(
      `${API_URL}/person/${personId}?api_key=${API_KEY}&language=es-ES`
    );
    if (!response.ok) {
      throw new Error('Error al obtener detalles del actor');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
