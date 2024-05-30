import React from "react";
import './Component Style.css'
import background from '../image/shutterstock_1470261596 (1) 1.png'
import logo from '../image/Original Logo - white 2.png'
const cover = () =>{

    return(
        <div className={'cover-container'}>
            <img src={background} alt={background} className={'background-over-layer'}/>
            <div className={'main-container'}>
                <img src={logo} alt={'company-Logo'}/>
            </div>
        </div>
    )
}

export default cover;