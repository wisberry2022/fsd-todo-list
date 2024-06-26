import { Main } from "@/pages/index";
import "@/reset.css";
import ApiContext from "@/shared/context/ApiRenewal";
import { useState } from "react";
import { RecoilRoot } from "recoil";

function App() {
  const [renewal, setRenewal] = useState<number>(0);

  const refresh = () => {
    setRenewal((prev) => ++prev);
  };

  return (
    <RecoilRoot>
      <ApiContext.Provider value={{ value: renewal, renewal: refresh }}>
        <Main key={renewal} />
      </ApiContext.Provider>
    </RecoilRoot>
  );
}

export default App;
