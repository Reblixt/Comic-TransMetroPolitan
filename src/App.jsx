import { Header } from "../Header";
import "./App.css";
import { Tdata } from "./data/TData";

function App() {
  console.log(Tdata.authors.Warren.funFact[0]);
  return <>
    <Header />
  </>
}

export default App;
