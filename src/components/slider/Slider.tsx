import { useLight_box_all_State } from "../../context/Ligth_box_all_StateProvider";
import "./style.css";
import React, { useContext, useEffect, useState } from "react";


interface Props {
    IdNameSlider:string;
    //valueAll :number;
}


export  const Slider = (props:Props) => {

    const [valueSlider, SetValueSlider] = useState<number>(0)

    const hookStateAll = useLight_box_all_State();
    
    const updateSliderValue = (value: string,e:any):void =>  { 
        SetValueSlider(Number(value))
        // SetValueSlider(props.valueAll)
        console.log(e);

        
        
        
    }

    useEffect(()=>{
        SetValueSlider(hookStateAll.valueSlider_all)
    },[hookStateAll.valueSlider_all])

    return (
            <>
            
                <input type="range"min="0" max="1024" value={valueSlider} className="slider_box_item" id={props.IdNameSlider} onChange={e => updateSliderValue(e.target.value,e.target)}></input>
                <p className="slider_box_value">Wartosc wypełnienia: {valueSlider}</p>
                {/* <input type="checkbox" name="" id="checkbox_{{this.name}}" className="slider_box_check" ></input> */}
               
            </>
            )
}
