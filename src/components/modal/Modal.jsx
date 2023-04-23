import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './modal.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = props => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active)
  }, [props.active])


  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  )
}

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string
}

export const ModalContent = props => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove('active');
    if (props.onClose) props.onClose();
  }

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close">
        <FontAwesomeIcon style={{margin: '10px 10px 10px 0', fontSize: '1.2rem'}} icon={faXmark} className='icon' onClick={closeModal} />
      </div>
    </div>
  )
}

ModalContent.propTypes = {
  onClick: PropTypes.func
}

export default Modal