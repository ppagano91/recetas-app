import { useContext } from "react";
import CatgeoriasContext from "../context/CategoriaProvider";

const useCategorias = () => {
  return useContext(CatgeoriasContext);
};

export default useCategorias;
