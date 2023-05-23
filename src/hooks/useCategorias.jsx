import { useContext } from "react";
import CatgeoriasContext from "../context/CategoriaProvider";

useCategorias = () => {
  return useContext(CatgeoriasContext);
};

export default useCategorias;
