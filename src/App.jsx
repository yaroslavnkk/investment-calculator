import Header from './components/Header';
import UserInput from "./components/UserInput.jsx";
import OutputTable from "./components/OutputTable.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";

function App() {
  const [input, setInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
  });
  function handleInputChange(inputIdentifier, value){
    setInput(prevInput =>{
      return {
        ...prevInput,
        [inputIdentifier]: +value,
      }
    });
  }
  return (
      <>
        <Header/>
        <main>
          <UserInput inputData = {input} onChangeData = {handleInputChange} />
          {input.duration > 1 ?  <OutputTable data={input}/> : <p className="center">Too small amount of duration!</p>}
        </main>
      </>
  )
}

export default App
