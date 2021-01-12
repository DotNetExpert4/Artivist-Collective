import * as handler from "./handler";
import { PATH_ABOUT ,PATH_CONTACT} from "./path";
const getAbout = () => {
    return handler
      .get(
        PATH_ABOUT,
        {
          status: "published",
        },
        true
      )
      .then((res) => {
        return res.data;
      });
  };

  const getContact = () => {
    return handler
      .get(
        PATH_CONTACT,
        {
          status: "published",
        },
        true
      )
      .then((res) => {
        return res.data;
      });
  };

  export default {
    getAbout,
    getContact
  };