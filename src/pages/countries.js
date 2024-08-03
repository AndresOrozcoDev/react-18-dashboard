import React, { useState, useEffect } from 'react';
import { getCountries } from '../services/country';

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await getCountries(1, 10);
      setCountries(response);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
    console.log(countries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : error ? (
        <p className='text-center text-red-500'>Error: {error}</p>
      ) : (
        <p className='text-center'>Countires</p>
      )}
    </div>
  )
}

export default Countries;