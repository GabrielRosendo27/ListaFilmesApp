import tmdbApi from "../../api/tmdbApi"; 
import omdbApi from "../../api/omdbApi";

const processarLote = async () => {
  const filmes = [
  ];

  const tmdbApiKey = "88740fcede037c6631f0d94c508f0454"; // Substitua pela sua chave real
  const omdbApiKey = "3d49971e"; // Substitua pela sua chave real
  const filmesProcessados = []; // Array que armazenará os filmes processados

  for (const titulo of filmes) {
    try {
      const { title, originalTitle, overview, posterPath } = await tmdbApi(titulo, tmdbApiKey);
      const movieDetails = await omdbApi(originalTitle, omdbApiKey);
      const movieData = { ...movieDetails, overview, posterPath, title };

      // Adicione o filme processado ao array
      filmesProcessados.push(movieData);
      console.log(`Filme ${title} adicionado com sucesso.`);
    } catch (error) {
      console.error(`Erro ao adicionar o filme ${titulo}:`, error);
    }
  }

  // Retorne o array de filmes processados
  return filmesProcessados;
};

export default processarLote;
