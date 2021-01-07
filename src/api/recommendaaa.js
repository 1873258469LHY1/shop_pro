import mockRequest from "../utils/mockRequest";

export const reqRecommendBanner = () => {
  return mockRequest({
    method: "GET",
    url: "/banners",
  });
};

export const reqRecommendSong = () => {
  return mockRequest({
    method: "GET",
    url: "/songs",
  });
};

export const reqRankingList = () => {
  return mockRequest({
    method: "GET",
    url: "/rankinglist",
  });
};

export const reqArtist = () => {
  return mockRequest({
    method: "GET",
    url: "/artist",
  });
};

export const reqVideo = () => {
  return mockRequest({
    method: "GET",
    url: "/video",
  });
};
