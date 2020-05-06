import axios from "axios";

export const axiosReq = function (opts) {
  return axios({
    url: opts.url,
    method: opts.method,
    params: opts.params,
    body: opts.body,
    withCredentials: true,
  })
    .then((res) => res)
    .catch((err) => err);
};
