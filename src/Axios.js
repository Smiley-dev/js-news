import axios from "axios";

const Axios = axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines/",
  params: {
    apiKey: process.env.REACT_APP_API_KEY,
  },
});

export default Axios;
