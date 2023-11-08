import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://ilklodgeserver.vercel.app",
  withCredentials: true,
});

const useAxiosSeure = () => {
  return axiosSecure;
};

export default useAxiosSeure;
