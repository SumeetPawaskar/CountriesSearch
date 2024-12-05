import React from 'react';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <span>
      <img src={country.flags.png} alt={country.name.common} />
      <h2>{country.name.common}</h2>
      </span>
    </div>
  );
};

export default CountryCard;
