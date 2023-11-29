import serviceUtil from "../utils";
import { toast } from "react-toastify";

const bookMovie = (payload, config = {}) => {
  return serviceUtil
    .post(`/movie/book`, payload, { header: config })
    .then((res) => {
      const data = res && res.data;
      toast.success(data?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return { data };
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

export default bookMovie;
