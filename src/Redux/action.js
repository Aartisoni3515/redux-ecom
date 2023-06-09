import { LOAD_ANS, LOAD_BACKSPACE , LOAD_BUTTON, LOAD_CLEAR } from "./actionTypes";


export const loadButtons =(number)=>{
 return {
  type : LOAD_BUTTON,
  payload : number
 }
}



export const loadAns =(number)=>{
 return {
  type : LOAD_ANS,
  payload : number
 }
}

export const loadClear =(number)=>{
 return {
  type : LOAD_CLEAR,
  payload : number
 }
}

export const loadBackspace =(number)=>{
 return {
  type : LOAD_BACKSPACE,
  payload : number
 }
}