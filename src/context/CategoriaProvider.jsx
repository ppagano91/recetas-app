import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CatgeoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const obtenerCategorias = async () => {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const { data } = await axios.get(url);
      setCategorias(data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    obtenerCategorias();
    return () => {};
  }, []);

  return (
    <CatgeoriasContext.Provider value={{ categorias }}>
      {children}
    </CatgeoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CatgeoriasContext;
