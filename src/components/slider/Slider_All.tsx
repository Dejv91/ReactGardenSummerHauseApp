
import { useLight_box_all_State } from "../../context/Ligth_box_all_StateProvider";
import "./Light_box_All.css";
import React, { useContext, useEffect, useState } from "react";


interface Props {
    IdNameSlider:string;
    //setValueAllCallback:any;
    //valueAll :number;
}


export  const Slider_All = (props:Props) => {

    const [valueSlider, SetValueSlider] = useState<number>(0)
    
    
       const hookStateAll = useLight_box_all_State()
    // const hook = useLight_box_all_State();
    //  console.log('tojest hook ',hookStateAll);

    const updateSliderValue = (value: string,e:any):void =>  { 
        SetValueSlider(Number(value))
        // SetValueSlider(props.valueAll)
        // console.log(e);
        hookStateAll.changeValueSlider_all(Number(value))
    }

    useEffect(()=>{
        SetValueSlider(hookStateAll.valueSlider_all)
    },[hookStateAll.valueSlider_all])

    return (
            <>
            
                <input type="range"min="0" max="1024" value={valueSlider} className="slider_box_item_all" id={props.IdNameSlider} onChange={e => updateSliderValue(e.target.value,e.target)}></input>
                <p className="slider_box_value_all">Wartosc wypełnienia: {valueSlider}</p>
                {/* <input type="checkbox" name="" id="checkbox_{{this.name}}" className="slider_box_check" ></input> */}
               
            </>
            )
}
