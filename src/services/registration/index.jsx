import serviceUtil from "../utils";
import { toast } from "react-toastify";

const userRegistraton = (payload, config = {}) => {
  return serviceUtil
    .post(`user/register`, payload, { headers: config })
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

export { userRegistraton };
