import React from 'react';
import './movie-card.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { category } from '../../api/tmdbAPI';
import apiConfig from '../../api/APIconfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ item, categoryName }) => {
  const background = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={`/${category[categoryName]}/${item.id}`}>
      <div className='movie-card' style={{ backgroundImage: `url(${background})` }}>
        <Button>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  )
}

export default MovieCard