import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-amzn-clone-ozngrsc.cloudfunctions.net/api",
  // "http://localhost:5001/amzn-clone-ozngrsc/us-central1/api",
});

export default instance;
