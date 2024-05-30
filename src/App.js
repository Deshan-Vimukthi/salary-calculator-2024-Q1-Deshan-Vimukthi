import './App.css';
import React,{useState} from "react";
import CoverComponent from "./Components/CoverComponent";
import SalaryForm from "./Components/SalaryForm";
import PayCheck from "./Components/PayCheck";

function App() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [earningList,setEarning] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [deductionList,setDeduction] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [basicSalary,setSalary] = useState([]);
    function payEarning(earning){
        setEarning(earning);
    }
    function payDeduction(deduction){
        setDeduction(deduction);
    }
    function basic(basic){
        setSalary(basic);
    }

  return (
    <div className="App">
        <SalaryForm payDeduction={payDeduction} payEarning={payEarning} setBasic={basic}/>
        <PayCheck earning={earningList} basicSalary={basicSalary} deduction={deductionList}/>
    </div>
  );
}

export default App;
