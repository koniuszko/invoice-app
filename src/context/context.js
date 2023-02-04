import React from "react";
import { createStore } from "../store/store";
import { useLocalObservable } from "mobx-react-lite";

const Context = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalObservable(createStore);
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export const useStore = () => React.useContext(Context);
