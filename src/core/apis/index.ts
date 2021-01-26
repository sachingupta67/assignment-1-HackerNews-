import axios from "axios";
import { constanst } from "../../constants";
const getBaseUrl = () => {
  /*
  purpose : we can handler url on basis of environment like PRODUCTION/STAGING/DEV
  default : point to DEVELOP
  */
  return constanst.baseUrl;
};
const BASEURL = getBaseUrl();
const TIMEOUT = 60000;
const apiClient = axios.create({ baseURL: BASEURL, timeout: TIMEOUT });
export default apiClient;
