import axios from "axios";

export const getCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response;
  } catch (err) {
    console.error( err);
    throw err;
  }
};