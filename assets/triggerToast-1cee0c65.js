import{l as e,m as a}from"./index-bb1b3d36.js";const n=t=>({isValidUrl:e(()=>/^(http|https):\/\/[^ "]+$/.test(t.value))});const i=t=>{let s;switch(t){case"error":s="Ingrese un enlace valido";break;case"success":s="Enlace añadido";break}return{triggerToast:()=>{a(s,{type:t,position:"top-right",autoClose:1e3})}}};export{i as a,n as u};
