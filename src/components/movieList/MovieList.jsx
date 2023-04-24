import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './movie-list.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import tmdbAPI, { category } from '../../api/tmdbAPI';
import MovieCard from '../movieCard/MovieCard';

const MovieList = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response;
      const params = {}

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbAPI.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbAPI.getTvList(props.type, { params });
        }
      } else response = await tmdbAPI.similar(props.category, props.id);

      setItems(response.results);
    }
    getList();
  }, [props.category, props.id, props.type]);

  return (
    <div className='movie-list'>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        autoplay={{ delay: 1500 }}
      >
        {items.map((data, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={data} categoryName={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default MovieList;