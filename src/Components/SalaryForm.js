import React, {useState} from "react";
import refresh from '../image/reset.png'
import add from '../image/Vector.png'
import './Component Style.css'
import PayDetailsComponents from "./PayDetailsComponents";
import cancel from "../image/clear.png";
const salaryForm = ({payEarning,payDeduction,setBasic}) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [earningList,setEarning] = useState([{id:0,title:'Payment',amount:1000,isCheck:true},{id:1,title:'Payment',amount:1000,isCheck:true}]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [deductionList,setDeduction] = useState([]);



    let earningID = earningList.length;
    let deductionID = deductionList.length;

    function allClear(){
        setEarning([]);
        setDeduction([]);
        earningID = 0;
        deductionID =0;
        setBasic(0);
        document.getElementById('basic_input').value = '';
    }

    function handleDeleteEarning(item){
        setEarning(earningList.filter(a=>a.id !== item.id));
    }
    function handleDeleteDeduction(item){
        setDeduction(deductionList.filter(a=>a.id !== item.id));
    }

    function setTitle(isEarning,key,value){
        setEarning(prevList =>
            prevList.map((item, index) =>
                index === key ? { ...item, title: value } : item
            )
        );
    }
    function setAmount(key,value){
        setEarning(prevList =>
            prevList.map((item, index) =>
                index === key ? { ...item, amount: Number(value) } : item
            )
        );
    }
    function setCheck(key,value){
        setEarning(prevList =>
            prevList.map((item, index) =>
                index === key ? { ...item, isCheck: !item.isCheck } : item
            )
        );
    }

    function addEarning(){
        earningID++;
        setEarning([...earningList,{id:earningID,title: '',amount: '',isCheck: false}]);
        payEarning(earningList);
    }
    function addDeduction(){
        deductionID++;
        setDeduction([...deductionList,{id:deductionID,title: '',amount: '',isCheck: false}]);
        payDeduction(deductionList);
    }


    return(
        <div className={'main-form'}>
            <div className={'inner-form'}>
                <div className={'header'}>
                    <div className={'header-text'}>
                        Calculate Your Salary
                    </div>
                    <div className={'refresh'} onClick={allClear}>
                        <div style={{width:'14px',height:'14px'}}>
                            <img src={refresh} alt={'refresh'} className={'refresh-image'} width={'14px'} height={'14px'}/>
                        </div>
                        <div className={'refresh-text'}>
                            Reset
                        </div>
                    </div>
                </div>
                <div className={'sub-header-text'}>Basic Salary</div>
                <div className={'length-input-container'}>
                    <input id={'basic_input'} type={'number'} className={'length-input'} placeholder={'Basic Salary'} onChange={(e)=> {setBasic(e.target.value)}}/>
                </div>
                <div className={'sub-header-text'}>Earnings</div>
                <div className={'field-describe'}>Allowance, Fixed Allowance, Bonus and etc.</div>
                <div className={'pay-detail-list'}>
                    {/* eslint-disable-next-line array-callback-return */}
                    {earningList.map((item,key) => (
                        <div className={'pay-detail-container'}>
                            <input type={'text'} value={item.title} placeholder={'Pay Details (Title)'} className={'pay-detail-title'} onChange={(e)=>{setTitle(true,key,e.target.value)}}/>
                            <input type={'number'} value={item.amount} placeholder={'Amount'} className={'pay-detail-amount'} onChange={(e)=>{setAmount(key,e.target.value)}}/>
                            <button className={'cancel-button'} onClick={()=>handleDeleteEarning(item)}>
                                <img src={cancel} alt={'cancel'}/>
                            </button>
                            <div  className={'pay-detail-checkbox'}>
                                <input type={"checkbox"} name={'ETP/EPF'} className={'pay-detail-checkbox'} checked={item.isCheck} onChange={(e)=>{setCheck(key,e.target.value)}}/>
                                <div className={'pay-check-title'}> ETP/EPF </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={'add-pay-details-container'}>
                    <div style={{width:'14px',height:'14px'}}>
                        <img src={add} alt={'add payment'} className={'add-pay-image'} width={'14px'} height={'14px'}/>
                    </div>
                    <div className={'add-pay-text'} onClick={addEarning}>
                        Add New Allowance
                    </div>
                </div>
                <hr style={{width:`${100}%`}}/>
                <div className={'sub-header-text'}>Deductions</div>
                <div className={'field-describe'}>Salary Advances, Loan Deductions and all</div>
                <div className={'pay-detail-list'}>
                    {/* eslint-disable-next-line array-callback-return */}
                    {deductionList.map((item,key) => (
                        <div className={'pay-detail-container'}>
                            <input type={'text'} value={item.title} placeholder={'Pay Details (Title)'} className={'pay-detail-title'} onChange={(e)=>{setTitle(false,key,e.target.value)}}/>
                            <input type={'number'} value={item.amount} placeholder={'Amount'} className={'pay-detail-amount'} onChange={(e)=>{setAmount(key,e.target.value)}}/>
                            <button className={'cancel-button'} onClick={()=>handleDeleteDeduction(item)}>
                                <img src={cancel} alt={'cancel'}/>
                            </button>
                        </div>
                    ))}
                </div>
                <div className={'add-pay-details-container'}>
                    <div style={{width:'14px',height:'14px'}}>
                        <img src={add} alt={'add payment'} className={'add-pay-image'} width={'14px'} height={'14px'}/>
                    </div>
                    <div className={'add-pay-text'} onClick={addDeduction}>
                        Add New Allowance
                    </div>
                </div>
            </div>
        </div>
    )
}

export default salaryForm;