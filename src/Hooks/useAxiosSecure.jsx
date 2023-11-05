import axios from 'axios';
const axiosSecure = axios.create({
    baseURL : "http://localhost:5000",
    // withCredentials:true
})


const useAxiosSeure = () => {
    return axiosSecure;
};

export default useAxiosSeure;