const tmdbApi = async (movieTitle, apiKey) => {
  const tmdbUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}&language=pt-BR`;
  try {
    const resp = await fetch(tmdbUrl);
    const data = await resp.json();
    if (data.results.length > 0) {
      const { title, original_title, overview, poster_path } = data.results[0];
      return { title: title, originalTitle: original_title, overview, posterPath: poster_path };
    } else {
      throw new Error("Filme não encontrado no TMDB.");
    }
  } catch (error) {
    throw new Error("Erro ao buscar título original.");
  }
};

export default tmdbApi;
