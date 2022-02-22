const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f1f5b89b5e5b6df25f604dbda15c4b79',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;