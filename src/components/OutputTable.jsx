import {formatter} from "../util/investment.js";
import {calculateInvestmentResults} from "../util/investment.js";
export default function OutputTable({data}) {
    const userData = calculateInvestmentResults(data);
    const initialInvestment = userData[0].valueEndOfYear - userData[0].interest - userData[0].annualInvestment;
    return <table id="result">
       <thead>
       <tr>
           <th>Year</th>
           <th>Investment Value</th>
           <th>Interest(Year)</th>
           <th>Total Interest</th>
           <th>Invested Capital</th>
       </tr>
       </thead>
       <tbody>
           {userData.map((dataItem) => {
               const totalInterest = dataItem.valueEndOfYear - dataItem.annualInvestment * dataItem.year - initialInvestment;
               const totalAmountInvested = dataItem.valueEndOfYear - totalInterest;
               return (
                   <tr key={dataItem.year}>
                       <td>{dataItem.year}</td>
                       <td>{formatter.format(dataItem.valueEndOfYear)}</td>
                       <td>{formatter.format(dataItem.interest)}</td>
                       <td>{formatter.format(totalInterest)}</td>
                       <td>{formatter.format(totalAmountInvested)}</td>
                   </tr>
               );
               }
           )}
       </tbody>
    </table>
}