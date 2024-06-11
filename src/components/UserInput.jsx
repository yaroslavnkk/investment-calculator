
export default function UserInput({onChangeData, inputData}){
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type="number" value={inputData.initialInvestment} required onChange={(event) => onChangeData("initialInvestment", event.target.value)}/>
            </p>
            <p>
                <label>Annual investment</label>
                <input type="number" value={inputData.annualInvestment} required onChange={(event) => onChangeData("annualInvestment", event.target.value)}/>
            </p>
        </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" value={inputData.expectedReturn} required onChange={(event) => onChangeData("expectedReturn", event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={inputData.duration} required onChange={(event) => onChangeData("duration", event.target.value)}/>
                </p>
            </div>
    </section>
}