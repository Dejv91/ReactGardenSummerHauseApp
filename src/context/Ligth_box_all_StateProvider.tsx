import React, { createContext, useContext, useState } from 'react';

// Tworzymy interfejs dla stanu globalnego
 interface Light_box_all_State {
    valueSlider_all: number;
    changeValueSlider_all: (newValue: number) => void;

    valueInputColor_all:string;
    changeValueInpulColor_all: (newValue: string) => void;

    stateInputSwitch_all:boolean;
    changeStateInputSwitch_all: (newState: boolean) => void;
 }


// Tworzymy kontekst dla stanu globalnego
 const Light_box_all_StateContext = createContext<Light_box_all_State>({
    valueSlider_all:0,
    changeValueSlider_all(){},

    valueInputColor_all:'',
    changeValueInpulColor_all(){},

    stateInputSwitch_all:false,
    changeStateInputSwitch_all(){},

 });

// Tworzymy provider, który będzie dostarczał stan do wszystkich komponentów  
// Tworzymy dostawcę dla stanu globalnego
export const Light_box_all_StateProvider= ( {children}:any) => {

  const [valueSlider_all, setValueSlider_all] = useState(0);
  const changeValueSlider_all = (newValue:number) => {
      setValueSlider_all(newValue)   //funkcja do ustawiania nowej wartosci ale przekazywane nie przez propsy
 };

  const [valueInputColor_all, setValueInputColor_all] = useState('');
  const changeValueInpulColor_all = (newValue:string) => {
    setValueInputColor_all(newValue)
  };

  const [stateInputSwitch_all,setStateInputSwitch_all] = useState(false);
  const changeStateInputSwitch_all = (newState:boolean) => {
    setStateInputSwitch_all(newState)
  }

  // const decrement = () => {
  //   setCount(count - 1);
  // };


  return (
    <Light_box_all_StateContext.Provider value={{ valueSlider_all, changeValueSlider_all, valueInputColor_all, changeValueInpulColor_all,stateInputSwitch_all,changeStateInputSwitch_all}}>
      {children}
    </Light_box_all_StateContext.Provider>
  );
};

// Tworzymy hook, który umożliwi nam dostęp do stanu w komponentach
export const useLight_box_all_State = () => useContext(Light_box_all_StateContext);
