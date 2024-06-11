import {formatter} from "../util/investment.js";

export default function OutputTable({data}) {
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
           {data.map((dataItem) => <tr key={dataItem.year}>
               <td>{dataItem.year}</td>
               <td>{formatter.format(dataItem.interest)}</td>
               <td>{formatter.format(dataItem.valueEndOfYear)}</td>
               <td>{formatter.format(dataItem.annualInvestment)}</td>
           </tr>)}
       </tbody>
    </table>
}