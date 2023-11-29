import serviceUtil from "../utils";
import { toast } from "react-toastify";

const getAllMovies = (config = {}) => {
  return serviceUtil
    .get(`movies/get/all`, { header: config })
    .then((res) => {
      const datas = res && res.data;
      toast.success(datas?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return { datas };
    })
    .catch((err) => {
      const errRes = err && err.response && err.response.data;
       toast.error(errRes?.message, {
         position: toast.POSITION.TOP_RIGHT,
       });
      return { errRes };
    });
  return;
};

export default getAllMovies;
