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
        [inputIdentifier]: value
      }
    });
  }
  const userData = calculateInvestmentResults(input);
  return (
      <>
        <Header/>
        <main>
          <UserInput inputData = {input} onChangeData = {handleInputChange} />
          <OutputTable data={userData}/>
        </main>
      </>
  )
}

export default App
