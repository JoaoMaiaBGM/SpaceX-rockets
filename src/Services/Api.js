import { axios } from "axios";

const Api = axios.creaate({
  baseURL: "https://api.spacexdata.com/v4/rockets",
});

export default Api;
