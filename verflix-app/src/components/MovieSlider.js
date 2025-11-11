import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { getImageUrl } from '../services/tmdbApi';

import 'swiper/css';
import 'swiper/css/navigation';

const MovieSlider = ({ movies, title }) => {
  const navigate = useNavigate();

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      {title && (
        <h2 className="text-3xl font-bold text-white mb-6 px-4 md:px-0">{title}</h2>
      )}

      <div className="relative group">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={16}
          slidesPerView={2}
          slidesPerGroup={2}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            1280: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          loop={movies.length > 6}
          className="!px-4 md:!px-0"
        >
          {movies.map((movie) => {
            const imageUrl = getImageUrl(movie.poster_path, 'w300');
            const title = movie.title || movie.name;
            const type = movie.media_type || (movie.title ? 'movie' : 'tv');

            return (
              <SwiperSlide key={movie.id}>
                <div
                  onClick={() => navigate(`/${type}/${movie.id}`)}
                  className="relative group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:z-10"
                >
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-80 object-cover"
                      />
                    ) : (
                      <div className="w-full h-80 bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-400">Sin imagen</span>
                      </div>
                    )}

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-sm mb-2 line-clamp-2">
                        {title}
                      </h3>
                      {movie.vote_average && (
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-400 fill-current mr-1"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                          <span className="text-white text-sm">
                            {movie.vote_average.toFixed(1)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;
