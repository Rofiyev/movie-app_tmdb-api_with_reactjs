import React from 'react';
import './loader.scss';

const Loader = () => {
  return (
    <div className="box">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  )
}

export default Loader