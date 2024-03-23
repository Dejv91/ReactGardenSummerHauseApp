import { useEffect, useState } from "react";
import "./InputSwitch_All.css"
import { useLight_box_all_State } from "../../context/Ligth_box_all_StateProvider";


interface Props {
    name: string;
    selectAll: boolean;
}

export const InputSwitch_All = (props:Props) => {
    
    const[stateInputSwitch,setStateInputSwitch] = useState<boolean>(false)

    const hookStateAll = useLight_box_all_State();
    
    
    const updateInputSwitchValue = (checkedState:boolean):void =>  { 
        setStateInputSwitch(checkedState)
        // SetValueSlider(Number(value))
        // console.log(e.target.checked);
        // console.log(e.target.id);
        hookStateAll.changeStateInputSwitch_all(checkedState)    
    }

    
    useEffect(()=>{
        setStateInputSwitch(hookStateAll.stateInputSwitch_all)
    },[hookStateAll.stateInputSwitch_all])
    
    
    return (<>
    {/* { props.selectAll ? 'slider Active' : 'slider inActive'}> */}
    <div className='slider_box_inputSwitch_all'>
        <input type="checkbox" id={`switch_${props.name}`} checked={stateInputSwitch} onChange={e => updateInputSwitchValue(e.target.checked)} className="inputSwitch_all"/><label className={ props.selectAll ? 'Active inputSwitch_all' : 'inActive inputSwitch_all'} htmlFor={`switch_${props.name}`}>Toggle</label>
    </div>
    </>)
}