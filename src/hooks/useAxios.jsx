import axios from "axios";

const instance = axios.create({
    baseURL:' http://localhost:5000/api/v1' ,
    withCredentials: true,
   
  });

const useAxios = () => {
  return instance
};

export default useAxios;

// 'https://bookshelf-master-server.vercel.app/api/v1'