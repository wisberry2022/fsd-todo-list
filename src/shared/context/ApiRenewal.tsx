import { createContext } from "react";

const ApiContext = createContext<{
  value: number;
  renewal: () => void;
}>({ value: 0, renewal: () => {} });

export default ApiContext;
