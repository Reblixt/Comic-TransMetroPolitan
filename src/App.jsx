import { Header } from '../Header';
import './App.css';
import { Tdata } from './data/TData';
import Characters from './Characters';

function App() {
  console.log(Tdata.authors.Warren.funFact[0]);
  return (
    <>
      <Header />
      <Characters characterName="SpiderJ" />
      <Characters characterName="GaryC" />
    </>
  );
}

export default App;
