import React, { useState, useEffect } from 'react';
import CountryCard from './components/CountryCard';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await fetch('https://restcountries.com/v3.1/all');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setCountries(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching countries:', error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchCountries();
  // }, []);


  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) { // Ensure proper status check
          throw new Error(`HTTP status: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);
  
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredCountries); // Verify "ind" shows 3 results


  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search for countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <div className="country-grid">
      {filteredCountries.length > 0 ? (
        
  // filteredCountries.map((country) => (
  //   <CountryCard key={country.cca3} country={country} />
  // ))
  
  <div className="countryGrid">
  {filteredCountries.map((country) => (
    <CountryCard key={country.cca3} country={country} />
  ))}
</div>
) : (
  <p>No countries found</p>
)}


        
      </div>
    </div>
    
  );
};

export default App;
