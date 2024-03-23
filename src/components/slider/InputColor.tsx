import { useEffect, useState } from "react";
import "./style.css";
import { useLight_box_all_State } from "../../context/Ligth_box_all_StateProvider";

interface Props {
    IdNameInputColor:string;
}

export const InputColor = (props:Props) => {

    const [valueInputColor, SetValueInputColor] = useState<string>()

    const hookStateAll = useLight_box_all_State();

    const updateInputColorValue = (value: string,e:any):void =>  { 
        
        SetValueInputColor(value)
        console.log(e);
        console.log(value);  
    }

    useEffect(()=>{
        SetValueInputColor(hookStateAll.valueInputColor_all)
    },[hookStateAll.valueInputColor_all])


    return <>
    
         <input type="color" value={valueInputColor} id={props.IdNameInputColor} className="slider_box_color_input" onChange={e => updateInputColorValue(e.target.value,e.target)}></input>
    
    </>


}