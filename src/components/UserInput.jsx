import {useState} from "react";

export default function UserInput(){
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
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type="number" value={input.initialInvestment} required onChange={(event) => handleInputChange("initialInvestment", event.target.value)}/>
            </p>
            <p>
                <label>Annual investment</label>
                <input type="number" value={input.annualInvestment} required onChange={(event) => handleInputChange("annualInvestment", event.target.value)}/>
            </p>
        </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" value={input.expectedReturn} required onChange={(event) => handleInputChange("expectedReturn", event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={input.duration} required onChange={(event) => handleInputChange("duration", event.target.value)}/>
                </p>
            </div>
    </section>
}