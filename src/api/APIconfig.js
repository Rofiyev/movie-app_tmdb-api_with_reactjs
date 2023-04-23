const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'f69dc19a5c76d11de38a52a347f99cde',
  origninalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;