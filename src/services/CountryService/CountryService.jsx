/**
 * File: CountryService.jsx
 * Author: Jaison Schmidt
 * Description: Class that control all operations over country API and caches operations.
 * Data: 26/09/2019
 */

import Axios from "axios";

class CountryService {
  async getAllCountriesFromApi() {
    return Axios.get(`${process.env.REACT_APP_API_URL}/all/`).then(response => response.data);
  }
}

export default CountryService;
