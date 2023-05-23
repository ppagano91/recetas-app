import { useContext } from "react";
import CatgeoriasContext from "../context/CategoriaProvider";

const useBebidas = () => {
  return useContext(CatgeoriasContext);
};

export default useBebidas;
