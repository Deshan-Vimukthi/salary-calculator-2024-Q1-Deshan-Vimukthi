import './App.css';
import CoverComponent from "./Components/CoverComponent";
import SalaryForm from "./Components/SalaryForm";

function App() {
    function payEarnin(earning){

    }
  return (
    <div className="App">
        <SalaryForm payDeduction={payEarnin} payEarning={payEarnin} setBasic={payEarnin}/>
    </div>
  );
}

export default App;
