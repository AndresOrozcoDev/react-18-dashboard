import axios from "axios";

// const url = 'http://localhost:3000';
const url = 'http://localhost:80';

export const getCountries = async (page, limit) => {
  try {
    const response = await axios.get(`${url}/countries?page=${page}&limit=${limit}`);
    return response;
  } catch (err) {
    console.error( err);
    throw err;
  }
};