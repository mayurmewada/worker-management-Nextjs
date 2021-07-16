import React, { createContext } from "react";

const WorkerData = createContext();

const WorkerProvider = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/workers/${id}`);

  const { data } = await res.json();
  const { worker } = { worker: data };
  console.log({ workwr });
  return <WorkerData.Provider value={worker}></WorkerData.Provider>;
};

export { WorkerData };
export { WorkerProvider };