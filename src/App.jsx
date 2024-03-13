import { Header } from "../Header";
import "./App.css";
import { Tdata } from "./data/TData";
import Characters from "./Characters";
import { FunFacts } from "./components/FunFacts";

function App() {
  return (
    <>
      <Header />
      <Characters characterName="SpiderJ" />
      <Characters characterName="GaryC" />
      <FunFacts author={Tdata.authors.Warren.funFact} />
      <FunFacts author={Tdata.authors.Darick.funFact} />
    </>
  );
}

export default App;
