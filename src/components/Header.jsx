import investmentLogo from '/src/assets/investment-calculator-logo.png'

export default function Header(){
    return <header id="header">
        <img src = {investmentLogo} alt="page logo"/>
        <h1>Investment calculator</h1>
    </header>
}