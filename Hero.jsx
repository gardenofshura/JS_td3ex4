/* eslint-disable */
import React from 'react';

const Hero = ({ name, powerstats, images }) => (
  <div className="hero_container">
    <h4>
      {name}
    </h4>
    <h5>Power stats :</h5>
    <ul>
      {
        Object.keys(powerstats).map(k => <li>{k} : {powerstats[k]}</li>)
      }
    </ul>
    <img src={images.md} alt={name} className="hero_img" />
  </div>
);

export default Hero;
/* eslint-disable */
