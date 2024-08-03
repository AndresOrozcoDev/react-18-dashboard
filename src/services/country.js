import axios from "axios";

export const getCountries = async (page, limit) => {
  try {
    const response = await axios.get(`http://localhost:3000/countries?page=${page}&limit=${limit}`);
    return response;
  } catch (err) {
    console.error( err);
    throw err;
  }
};