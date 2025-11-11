import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { getImageUrl } from '../services/tmdbApi';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  if (!movies || movies.length === 0) {
    return null;
  }

  const featuredMovies = movies.slice(0, 5);

  return (
    <div className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        loop={true}
        className="h-full"
      >
        {featuredMovies.map((movie) => {
          const backdropUrl = getImageUrl(movie.backdrop_path, 'original');
          const title = movie.title || movie.name;
          const type = movie.media_type || (movie.title ? 'movie' : 'tv');

          return (
            <SwiperSlide key={movie.id}>
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: backdropUrl ? `url(${backdropUrl})` : 'none',
                  backgroundColor: !backdropUrl ? '#1E3A8A' : 'transparent'
                }}
              >
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-transparent"></div>

                {/* Contenido */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                    {title}
                  </h1>

                  <div className="flex items-center gap-4 mb-6">
                    {movie.vote_average && (
                      <div className="flex items-center bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <svg
                          className="w-6 h-6 text-yellow-400 fill-current mr-2"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <span className="text-white font-bold text-lg">
                          {movie.vote_average.toFixed(1)}
                        </span>
                      </div>
                    )}
                    {movie.release_date && (
                      <span className="text-white/90 text-lg">
                        {new Date(movie.release_date).getFullYear()}
                      </span>
                    )}
                  </div>

                  <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-8 line-clamp-3">
                    {movie.overview || 'Sin descripción disponible.'}
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => navigate(`/${type}/${movie.id}`)}
                      className="bg-white hover:bg-gray-200 text-primary font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                      ▶ Ver Ahora
                    </button>
                    <button
                      onClick={() => navigate(`/${type}/${movie.id}`)}
                      className="bg-gray-600/80 backdrop-blur-sm hover:bg-gray-700/80 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                      ℹ Más Info
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
        }
        .swiper-pagination {
          bottom: 30px !important;
        }
      `}</style>
    </div>
  );
};

export default Hero;
