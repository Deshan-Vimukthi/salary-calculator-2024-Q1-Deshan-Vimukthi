import React,{useState} from "react";
import './Component Style.css'
import SalaryForm from "./SalaryForm";
import PayCheck from "./PayCheck";

const webLayout = () =>{

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

    return(
        <div>
            <div className={'main-content'}>
                <div className={'left-content'}>
                    <SalaryForm payDeduction={payDeduction} payEarning={payEarning} setBasic={basic}/>
                </div>
                <div className={'right-content'}>
                    <PayCheck earning={earningList} basicSalary={basicSalary} deduction={deductionList}/>
                </div>
            </div>
        </div>
    )
}

export default webLayout;