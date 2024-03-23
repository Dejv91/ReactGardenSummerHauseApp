import { useEffect, useState } from "react";
import { useLight_box_all_State } from "../../context/Ligth_box_all_StateProvider";
import "./InputSwitch.css"


interface Props {
    name: string;
    selectAll: boolean;
}

export const InputSwitch = (props:Props) => {
    
    const[stateInputSwitch,setStateInputSwitch] = useState<boolean>(false)

    const hookStateAll = useLight_box_all_State();
    
    const updateInputSwitchValue = (checkedState:boolean):void =>  { 
        setStateInputSwitch(checkedState)
        // SetValueSlider(Number(value))
        // console.log(e.target.checked);
        // console.log(e.target.id);
        
        
    }

    useEffect(()=>{
        setStateInputSwitch(hookStateAll.stateInputSwitch_all)
    },[hookStateAll.stateInputSwitch_all])
    
    
    return (<>
    {/* { props.selectAll ? 'slider Active' : 'slider inActive'}> */}
    <div className='slider_box_inputSwitch'>
        <input type="checkbox" id={`switch_${props.name}`} checked={stateInputSwitch} onChange={e => updateInputSwitchValue(e.target.checked)} className="inputSwitch_item"/><label className={ props.selectAll ? 'Active inputSwitch_item' : 'inActive inputSwitch_item'} htmlFor={`switch_${props.name}`}>Toggle</label>
    </div>
    </>)
}