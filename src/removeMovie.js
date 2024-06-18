// src/utils/removeMovie.js
import { firestore, doc, deleteDoc } from "../src/firebaseConfig";

const removeMovie = async (movieId) => {
  try {
    const movieDoc = doc(firestore, "movies", movieId);
    await deleteDoc(movieDoc);
  } catch (err) {
    console.error("Erro ao remover filme:", err);
  }
};

export default removeMovie;
