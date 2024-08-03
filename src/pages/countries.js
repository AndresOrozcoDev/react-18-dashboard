import React, { useState, useEffect } from 'react';
import { getCountries } from '../services/country';
import Table from '../components/table';
import Pagination from '../components/pagination';
import '../App';

const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const fetchData = async () => {
    try {
      const response = await getCountries(currentPage, itemsPerPage);
      setCountries(response.data.data);
      setLoading(false);
      setTotalItems(response.data.totalItems);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='py-8 content'>
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : error ? (
        <p className='text-center text-red-500'>Error: {error}</p>
      ) : (
        <div>
          <Table data={countries} />
          <Pagination
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}

export default Countries;