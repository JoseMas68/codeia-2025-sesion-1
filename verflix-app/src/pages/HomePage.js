import { useState, useEffect } from 'react';
import { getPopularMovies, getTrending, getPopularTVShows } from '../services/tmdbApi';
import Hero from '../components/Hero';
import MovieSlider from '../components/MovieSlider';
import MovieGrid from '../components/MovieGrid';
import SearchFilterBar from '../components/SearchFilterBar';

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [trendingContent, setTrendingContent] = useState([]);
  const [trendingToday, setTrendingToday] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [popularData, tvData, trendingData, trendingTodayData] = await Promise.all([
          getPopularMovies(),
          getPopularTVShows(),
          getTrending('all', 'week'),
          getTrending('all', 'day')
        ]);

        setPopularMovies(popularData.results || []);
        setPopularTVShows(tvData.results || []);
        setTrendingContent(trendingData.results || []);
        setTrendingToday(trendingTodayData.results || []);
      } catch (err) {
        console.error('Error al cargar datos:', err);
        setError('Error al cargar el contenido. Por favor, verifica tu API Key.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="text-center text-white">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
          <p className="mt-4 text-2xl">Cargando VerFlix...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex items-center justify-center h-screen px-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md">
          <p className="font-bold text-lg mb-2">Error</p>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="pb-12">
      {/* Search & Filter */}
      <SearchFilterBar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
      />

      {/* If searching or filtering, show a grid of filtered results */}
      {(search.trim().length > 0) || (category && category !== 'All') ? (
        <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          <MovieGrid
            movies={getFilteredMovies({
              search,
              category,
              popularMovies,
              popularTVShows,
              trendingContent,
              trendingToday,
            })}
            title="Resultados"
          />
        </div>
      ) : null}

      {/* Hero Slider */}
      <Hero movies={trendingToday} />

      {/* Movie Sections with Sliders */}
      <div className="max-w-7xl mx-auto mt-8 space-y-8">
        <MovieSlider movies={trendingContent} title="Tendencias de la Semana" />
        <MovieSlider movies={popularMovies} title="Películas Populares" />
        <MovieSlider movies={popularTVShows} title="Series Populares" />
      </div>
    </main>
  );
}

// Helper to combine and filter movies based on search and category
function getFilteredMovies({ search, category, popularMovies, popularTVShows, trendingContent, trendingToday }) {
  const q = (search || '').toLowerCase().trim();

  let source = [];
  if (category === 'Trending') {
    source = [...trendingToday, ...trendingContent];
  } else if (category === 'Movies') {
    source = [...popularMovies];
  } else if (category === 'TV') {
    source = [...popularTVShows];
  } else {
    source = [...popularMovies, ...popularTVShows, ...trendingContent, ...trendingToday];
  }

  // Normalize and dedupe by id+type
  const seen = new Set();
  const normalized = [];

  for (const item of source) {
    const type = item.media_type || (item.title ? 'movie' : 'tv');
    const key = `${type}-${item.id}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const title = (item.title || item.name || '').toString();
    if (!q || title.toLowerCase().includes(q)) {
      normalized.push(item);
    }
  }

  return normalized;
}

export default HomePage;
