import React, { useContext, useEffect, useRef, useState } from 'react';
import tmdbAPI, { category, movieType } from '../../api/tmdbAPI';
import apiConfig from '../../api/APIconfig';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button, { OutlineButton } from '../button/Button';
import { useNavigate } from 'react-router-dom';
import './hero-slide.scss';
import Modal, { ModalContent } from '../modal/Modal';
import MyContext from '../Context';

const HeroSlide = () => {
  const [movieItems, setMovieItems] = useState([]);
  const { setLoading } = useContext(MyContext)

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const getMoveis = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbAPI.getMoviesList(movieType.popular, { params });
        response.results && setLoading(prev => !prev);
        console.log(response);
        setMovieItems(response.results.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    }
    getMoveis();
  }, []);

  return (
    <div className='hero-slide'>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
      >
        {
          movieItems.map((data, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem item={data} className={`${isActive ? 'active' : ''}`} />
              )}
            </SwiperSlide>
          ))
        }
      </Swiper>
      {movieItems.map((data, i) => (<TrailerModal key={i} item={data} />))}
    </div>
  )
}

const HeroSlideItem = props => {
  const navigate = useNavigate();

  const item = props.item;
  const background = apiConfig.origninalImage(item.backdrop_path ? item.backdrop_path : item.paster.path);

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbAPI.getVideos(category.movie, item.id);

    if (videos.results) {
      const videoSrc = `https://www.youtube.com/embed/${videos.results[1].key}`;
      modal.querySelector('.modal__content > iframe').setAttribute('src', `${videoSrc}`);
    }

    modal.classList.toggle('active');
  }

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate(`/movie/${item.id}`)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="Poster" />
        </div>
      </div>
    </div>
  )
}

const TrailerModal = props => {
  const item = props.item;
  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');
  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe ref={iframeRef} width='100%' height='500px' title='trailer'></iframe>
      </ModalContent>
    </Modal>
  )
}

export default HeroSlide;