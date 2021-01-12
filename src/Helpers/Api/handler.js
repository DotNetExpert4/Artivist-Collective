import axios from "axios";
import Api from "./index";
import { PAGES_BASE_URL ,BASE_URL} from "../../Configs/config";
import { logout } from "../../Redux/actions/auth.action";


axios.interceptors.request.use(
  function (config) {
    if (config.url.includes(PAGES_BASE_URL))
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "dataAccessToken"
      )}`;
    else
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const { response } = error;
    if (response && response.status === 401) {
      if (response.config.url.includes(PAGES_BASE_URL)) {
        await Api.getAccessToken(true);
        window.location.reload();
      } else {
        logout();
        window.location.href = "/login";
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);

export const get = (url, params, isAnotherUrl) => {
  const apiUrl = isAnotherUrl ? PAGES_BASE_URL + url : BASE_URL + url;
  return axios
    .get(apiUrl, { params })
    .then((response) => response.data)
    .catch((error) => handleError(error));
};

export const post = (url, payload, isAnotherUrl) => {
  const apiUrl = isAnotherUrl ? PAGES_BASE_URL + url : BASE_URL + url;
  return axios
    .post(apiUrl, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return handleError(error);
    });
};

// Naming 'delet' is not a mistake
// 'delete' is reserved keyword we can not use.
export const delet = (url) =>
  axios
    .delete(BASE_URL + url)
    .then((response) => response.data)
    .catch((error) => handleError(error));

export const put = (url, payload, isAnotherUrl) => {
  const apiUrl = isAnotherUrl ? PAGES_BASE_URL + url : BASE_URL + url;
  return axios
    .put(apiUrl, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => handleError(error));
};

export const patch = (url, payload, isAnotherUrl) => {
  const apiUrl = isAnotherUrl ? PAGES_BASE_URL + url : BASE_URL + url;
  return axios
    .patch(apiUrl, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => handleError(error));
};

export const handleError = (error) => {
  const { response } = error;
  if (error && response && response.data.message) {
    throw response.data.message;
  } else if (response.data.errorMessage) {
    if (response.data && response.data.code && response.data.code == 409) {
      alert(response.data.errorMessage);
    } else {
      throw response.data.errorMessage;
    }
  }
  throw error;
};
