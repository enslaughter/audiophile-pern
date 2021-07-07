import React, { useState, createContext } from "react";

export const CartContext = createContext({});

export const CartContextProvider = (props: any) => {
  return (
    <CartContext.Provider value={{}}>{props.children}</CartContext.Provider>
  );
};
