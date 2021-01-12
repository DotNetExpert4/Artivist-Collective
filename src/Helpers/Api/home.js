import { PATH_CTA, PATH_HEADERCAROUSEL, PATH_TEAMS,PATH_IMAGES,PATH_NEWS } from "./path";
import * as handler from "./handler";

const getHomeCta = () => {
  return handler
    .get(
      PATH_CTA,
      {
        status: "published",
        "filter[home][eq]": 1,
      },
      true
    )
    .then((res) => {
      return res.data;
    });
};
const getHeaderCarousel = () => {
  return handler
    .get(
      PATH_HEADERCAROUSEL,
      {
        status: "published",
        sort: "sort",
      },
      true
    )
    .then((res) => {
      return res.data;
    });
};
const getAllImageUrl = (params) => {
    return handler.get(PATH_IMAGES, params, true).then((res) => {
      return res.data;
    });
  };
const getTeams = () => {
  return handler
    .get(
      PATH_TEAMS,
      {
        status: "published",
        // fields: "id,name,title,bio,image,twitter,facebook,instagram,linkedin",
      },
      true
    )
    .then((res) => {
      return res.data;
    });
};
const getNews = () => {
  return handler
    .get(
      PATH_NEWS,
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
  getHomeCta,
  getHeaderCarousel,
  getTeams,
  getNews,
  getAllImageUrl
};
