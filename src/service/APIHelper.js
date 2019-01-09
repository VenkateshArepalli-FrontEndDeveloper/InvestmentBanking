
// APIHelper.js
import axios from 'axios';

  /**
   * Requests a URL, returning a promise
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to fetch
   *
   * @return {Promise}           The request promise
   */

  
  export default function getServiceData(url) {  
    return axios('https://www.check24.de/assets/js/web/lastSearches.js?v=20170814150300')
    .then(function (response) {     
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

