import { useState, useEffect, useContext } from "react";

const CatgeoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  return (
    <CatgeoriasContext.Provider value={{}}>
      {children}
    </CatgeoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CatgeoriasContext;
