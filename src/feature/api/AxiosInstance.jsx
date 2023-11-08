import axios from "axios";

const createAxiosInstance = () => {
  const res = axios.create({
    baseURL: "http://localhost:8080/api/v1",
  });

  return res;
};

export { createAxiosInstance };
