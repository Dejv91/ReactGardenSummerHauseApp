import { InputSwitch } from "../InputSwitch/InputSwitch";
import { InputColor } from "./InputColor";
import { Slider } from "./Slider"
import "../slider/Light_box_All.css"
import { Slider_All } from "./Slider_All";
import { InputColor_All } from "./InputColor_All";
import { InputSwitch_All } from "../InputSwitch/InputSwitch_All";

interface Props {
    idNameBox:string;
    //setValueAllCallback:any; //colback funkcji przekazujacej wartosc slidera dla wszystkich lamp
    //valueAll:number | any;
    selectAll:boolean;

}

export const Ligth_box_All = (props:Props) => {


    


    return <>
        <div className={ props.selectAll ? 'slider_all inActive' : 'slider_all Active'}>
            <p>{props.idNameBox}</p>

            <div className="slider_box_all">

                <Slider_All IdNameSlider={`Slider_${props.idNameBox}`} />{/*setValueAllCallback={props.setValueAllCallback} valueAll ={props.valueAll}*/}
                <InputColor_All IdNameInputColor={`InputColor_${props.idNameBox}`}/>
                <InputSwitch_All name={props.idNameBox}  selectAll={props.selectAll}/>

            </div>
        </div>
    
    
    
    </>

}