import { useEffect, useState } from "react";
import "./Light_box_All.css";
import { useLight_box_all_State } from "../../context/Ligth_box_all_StateProvider";

interface Props {
    IdNameInputColor:string;
}

export const InputColor_All = (props:Props) => {

    const [valueInputColor, SetValueInputColor] = useState<string>()

    const hookStateAll = useLight_box_all_State();

    const updateInputColorValue = (value: string,e:any):void =>  { 
        
        SetValueInputColor(value)
        // console.log(e);
        // console.log(value);  
        hookStateAll.changeValueInpulColor_all(value)
    }

    useEffect(()=>{
        SetValueInputColor(hookStateAll.valueInputColor_all)
    },[hookStateAll.valueInputColor_all])


    return <>
    
         <input type="color" value={valueInputColor} id={props.IdNameInputColor} className="slider_box_color_input_all" onChange={e => updateInputColorValue(e.target.value,e.target)}></input>
    
    </>


}