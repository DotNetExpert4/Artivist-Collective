import { CREDENTIALS } from "../../Configs/config";
import * as handler from "./handler";
import { PATH_ACCESS_TOKEN } from "./path";



const getAccessToken = (shouldRefresh) => {
  if (!shouldRefresh && localStorage.getItem("dataAccessToken")) return;
  return handler
    .post(
      PATH_ACCESS_TOKEN,
      {
        email: CREDENTIALS.EMAIL,
        password: CREDENTIALS.PASSWORD,
      },
      true
    )
    .then((res) => {
      localStorage.setItem("dataAccessToken", res.data.token);
      return res.data;
    });
};

export default {
  getAccessToken,
};
