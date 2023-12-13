import axios from "axios";
const axiosSecure = axios.create({
  // baseURL: "https://ilklodgeserver.vercel.app",
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSeure = () => {
  return axiosSecure;
};

export default useAxiosSeure;
