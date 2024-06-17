const omdbApi = async (originalTitle, apiKey) => {
  const omdbUrl = `http://www.omdbapi.com/?t=${originalTitle}&apikey=${apiKey}`;

  try {
    const resp = await fetch(omdbUrl);
    const data = await resp.json();
    console.log(data);
    if (data.Response === "True") {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    throw new Error("Erro ao buscar dados do filme no OMDB.");
  }
};

export default omdbApi;
