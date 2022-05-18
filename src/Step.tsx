import { useState } from "react";
export enum STEP{
    STEP_FORM,
    STEP_INPUT
}
const [actualStep,setStep] = useState(STEP.STEP_FORM)
export const getActualStep = () =>{
    return actualStep
}
export default setStep 


