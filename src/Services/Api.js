import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.spacexdata.com/v4",
});

export default Api;
