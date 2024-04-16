import React, { createContext, useContext, useSttate } from 'react';
    
const CarritoContext = createContext();
export const CarritoConsumer = () => useContext(CarritoContext);

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  // Lógica para agregar, eliminar y actualizar el carrito de compras
  
  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}