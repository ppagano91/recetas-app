import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
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
    // obtenerCategorias();
    return () => {};
  }, []);

  return (
    <BebidasContext.Provider value={{}}>{children}</BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
