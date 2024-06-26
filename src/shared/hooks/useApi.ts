import { useContext } from "react";
import ApiContext from "../context/ApiRenewal";

const useApi = () => useContext(ApiContext);

export default useApi;
