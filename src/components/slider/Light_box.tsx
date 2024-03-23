import { InputSwitch } from "../InputSwitch/InputSwitch";
import { InputColor } from "./InputColor";
import { Slider } from "./Slider"
import "../slider/style.css"

interface Props {
    idNameBox:string;
    // setValueAllCallback:any; //colback funkcji przekazujacej wartosc slidera dla wszystkich lamp
    // valueAll?:number | any;
    selectAll:boolean;

}

export const Ligth_box = (props:Props) => {


    


    return <>
        <div className={ props.selectAll ? 'slider Active' : 'slider inActive'}>
            <p>{props.idNameBox}</p>

            <div className="slider_box">

                <Slider IdNameSlider={`Slider_${props.idNameBox}`} /> {/*valueAll ={props.valueAll} */}
                <InputColor IdNameInputColor={`InputColor_${props.idNameBox}`}/>
                <InputSwitch name={props.idNameBox}  selectAll={props.selectAll}/>

            </div>
        </div>
    
    
    
    </>

}