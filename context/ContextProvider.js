import React, { Children, useEffect, useState } from "react";

const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // const res = await fetch(`http://localhost:3000/api/workers/${id}`);
    // const { data } = await res.json();
    // const worker = { worker: data };
    // console.log(worker);
  }, []);

  return (
    <Context.Provider value={[count, setCount]}>{children}</Context.Provider>
  );
};

export default Context;