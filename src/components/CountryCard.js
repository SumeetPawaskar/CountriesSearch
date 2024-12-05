import React from 'react';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <img src={country.flags.png} alt={country.name.common} />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;
