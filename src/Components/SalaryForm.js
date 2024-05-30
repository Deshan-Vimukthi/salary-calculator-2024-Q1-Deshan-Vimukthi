import React, {useState} from "react";
import refresh from '../image/reset.png'
import add from '../image/Vector.png'
import './Component Style.css'
import cancel from "../image/clear.png";
const salaryForm = ({payEarning,payDeduction,setBasic}) =>{

    //Initial Values was set as given in FIGMA Reference


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [earningList,setEarning] = useState([{id:0,title:'Travel',amount:10000,isCheck:true},{id:1,title:'',amount:'',isCheck:false}]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [deductionList,setDeduction] = useState([{id:0,title:'No Pay',amount:8000}]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [basicSalary,setSalary] = useState(150000);
    setBasic(basicSalary);

    function handleBasic(value){
        const numericValue = parseCurrency(value);
        setSalary(numericValue);
        setBasic(numericValue);
    }


    const formatCurrency = (value) => {
        return value.toLocaleString('en-US',{style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };

    const parseCurrency = (value) => {
        return parseFloat(value.replace(/,/g, ''));
    };

    let earningID = earningList.length;
    let deductionID = deductionList.length;

    function allClear(){
        setEarning([]);
        setDeduction([]);
        earningID = 0;
        deductionID =0;
        setBasic(0);
        setSalary(0);
        payDeduction([]);
        payEarning([]);
        document.getElementById('basic_input').value = '';
    }

    function handleDeleteEarning(item){
        setEarning(earningList.filter(a=>a.id !== item.id));
    }
    function handleDeleteDeduction(item){
        setDeduction(deductionList.filter(a=>a.id !== item.id));
    }

    function setTitle(isEarning,key,value){
        (isEarning)?
            setEarning(prevList =>
                prevList.map((item, index) =>
                    index === key ? { ...item, title: value } : item
                )
        ):
            setDeduction(prevList =>
                prevList.map((item, index) =>
                    index === key ? { ...item, title: value } : item
                )
        );
        updateData();
    }
    function setAmount(isEarning,key,value){
        const numericValue = parseCurrency(value);
        (isEarning)?
            setEarning(prevList =>
                prevList.map((item, index) =>
                    index === key ? { ...item, amount: Number(numericValue) } : item
                )
        ):
            setDeduction(prevList =>
                prevList.map((item, index) =>
                    index === key ? { ...item, amount: Number(numericValue) } : item
                )
            )
        ;
        updateData();
    }
    function setCheck(key){
        setEarning(prevList =>
            prevList.map((item, index) =>
                index === key ? { ...item, isCheck: !item.isCheck } : item
            )
        );
        updateData();
    }

    function addEarning(){
        earningID++;
        setEarning([...earningList,{id:earningID,title: '',amount: '',isCheck: false}]);
        updateData();
    }
    function addDeduction(){
        deductionID++;
        setDeduction([...deductionList,{id:deductionID,title: '',amount: '',isCheck: false}]);
        updateData();
    }

    function updateData(){
        payEarning(earningList);
        payDeduction(deductionList);
        setBasic(basicSalary);
    }

    updateData();

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
                    <input id={'basic_input'} type={'text'} value={formatCurrency(basicSalary)} className={'length-input'} placeholder={'Basic Salary'} onChange={(e)=> {handleBasic(e.target.value)}}/>
                </div>
                <div className={'sub-header-text'}>Earnings</div>
                <div className={'field-describe'}>Allowance, Fixed Allowance, Bonus and etc.</div>
                <div className={'pay-detail-list'}>
                    {/* eslint-disable-next-line array-callback-return */}
                    {earningList.map((item,key) => (
                        <div className={'pay-detail-container'}>
                            <input type={'text'} value={item.title} placeholder={'Pay Details (Title)'} className={'pay-detail-title'} onChange={(e)=>{setTitle(true,key,e.target.value)}}/>
                            <input type={'text'} value={formatCurrency(item.amount)} placeholder={'Amount'} className={'pay-detail-amount'} onChange={(e)=>{setAmount(true,key,e.target.value)}}/>
                            <button className={'cancel-button'} onClick={()=>handleDeleteEarning(item)}>
                                <img src={cancel} alt={'cancel'}/>
                            </button>
                            <div  className={'pay-detail-checkbox'}>
                                <input type={"checkbox"} name={'ETP/EPF'} className={'pay-detail-checkbox'} checked={item.isCheck} onChange={()=>{setCheck(key)}}/>
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
                            <input type={'text'} value={formatCurrency(item.amount)} placeholder={'Amount'} className={'pay-detail-amount'} onChange={(e)=>{setAmount(false,key,e.target.value)}}/>
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