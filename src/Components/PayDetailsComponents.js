import React from "react";
import './Component Style.css';
import cancel from '../image/clear.png'

const payDetail = ({key,title,amount,deleteHandle,isCheck,isEarning,setTitle,setAmount,setCheck}) =>{

    return(
        <div className={'pay-detail-container'}>
            <input type={'text'} value={title} placeholder={'Pay Details (Title)'} className={'pay-detail-title'} onChange={(e)=>{setTitle(true,key,e.target.value)}}/>
            <input type={'number'} value={amount} placeholder={'Amount'} className={'pay-detail-amount'} onChange={(e)=>{setAmount(key,e.target.value)}}/>
            <button className={'cancel-button'} onClick={()=>deleteHandle}>
                <img src={cancel} alt={'cancel'}/>
            </button>
            { isEarning && <div  className={'pay-detail-checkbox'}>
                <input type={"checkbox"} name={'ETP/EPF'} className={'pay-detail-checkbox'} checked={isCheck} onChange={(e)=>{setCheck(key,e.target.value)}}/>
                <div className={'pay-check-title'}> ETP/EPF </div>
            </div>}
        </div>

    )
}

export default payDetail;