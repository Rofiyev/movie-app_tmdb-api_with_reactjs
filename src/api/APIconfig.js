const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "427bad58309e8cccd806025dd04445f0",
  origninalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
