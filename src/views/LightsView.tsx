import React, { useState } from "react"
import "../components/slider/style.css";
import { Ligth_box } from "../components/slider/Light_box";
import { InputSwitch } from "../components/InputSwitch/InputSwitch";
import { Button } from "../components/Button/Button";
import { Ligth_box_All } from "../components/slider/Light_box_All";
import { Light_box_all_StateProvider } from "../context/Ligth_box_all_StateProvider";
// import {  Light_box_all_StateProvider } from "../context/Ligth_box_all_StateProvider";



export const LightsView = () => {

    const [valueAll,SetValueAll] = useState<number>(0)
    const [selectAll,SetSelectAll] = useState<boolean>(false);
   
   
    const setValueAllCallback=(value:number):void => {
        
        console.log(value);
        SetValueAll(value)
   }

   const toggleClassSelectAllCallback = ():void => {
        SetSelectAll(!selectAll);
   }



    return <>
           {/* { props.selectAll ? 'slider Active' : 'slider inActive'} */}
        <div className= {selectAll ? 'container_slider' : 'container_slider inActive'}>
          <Light_box_all_StateProvider> {/*udostepnienie wartosci wszystkim po nizej*/} 

             <Ligth_box idNameBox="Led1"  selectAll={selectAll}/> {/*valueAll ={valueAll}*/}
             <Ligth_box idNameBox="Led2"  selectAll={selectAll}/>
             <Ligth_box idNameBox="Led3"  selectAll={selectAll}/>
             <Ligth_box idNameBox="Led4"  selectAll={selectAll}/>
             <Ligth_box idNameBox="Led5"  selectAll={selectAll}/>
             <Ligth_box idNameBox="Led6"  selectAll={selectAll}/>
             <Ligth_box idNameBox="Led7"  selectAll={selectAll}/>
             <Ligth_box idNameBox="Led8"  selectAll={selectAll}/>
             <Ligth_box idNameBox="Led9"  selectAll={selectAll}/>

             <Ligth_box_All idNameBox="all"   selectAll={selectAll}/> {/* setValueAllCallback={setValueAllCallback} valueAll ={valueAll}*/}
             
             <div className="container_slider_buttons">
              <Button toggleClassSelectAllCallback={toggleClassSelectAllCallback}/>
             </div>
             

          </Light_box_all_StateProvider>
        </div>
        <h1>Test</h1>
    </>
} 