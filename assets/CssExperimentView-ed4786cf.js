import{r as d,o as v,c as f,a as s,t as n,b as t,n as u,w as _,v as r,i as p,p as y,F as x,q as g}from"./index-ee609105.js";const b={class:"row gap-3"},V={class:"d-flex-row align-items-center col-lg-4"},w={class:"text-center"},$={class:"item col d-flex-row"},D={class:"text-center bg-white py-1 rounded"},j={class:"row mt-4"},B=s("div",{class:"col"},[s("label",{for:"topVal",class:"py-2"},[s("span",{class:""},"topVal")])],-1),I={class:"col"},k={class:"col"},C={class:"row"},S=s("div",{class:"col"},[s("label",{for:"rightVal",class:"py-2"},[s("span",{class:""},"rightVal")])],-1),U={class:"col"},M={class:"col"},z={class:"row"},H=s("div",{class:"col"},[s("label",{for:"bottomVal",class:"py-2"},[s("span",{class:""},"bottomVal")])],-1),O={class:"col"},q={class:"col"},A={class:"row"},E=s("div",{class:"col"},[s("label",{for:"leftVal",class:"py-2"},[s("span",{class:""},"leftVal")])],-1),F={class:"col"},G={class:"col"},h="https://images.unsplash.com/photo-1600331947525-65394059bdb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",N={__name:"ObjView",props:{isDark:{type:Boolean}},setup(m){let e=d(61),a=d(44),o=d(20),i=d(35);return(ss,c)=>(v(),f("div",b,[s("div",V,[s("p",w,"Original Image "+n(m.isDark),1),s("img",{class:"img-0 mx-auto d-flex align-items-center",src:h,alt:"Reduced Size of the full image"})]),s("div",$,[s("p",D,[s("code",null,"img { object-view-box: inset("+n(t(e))+"% "+n(t(a))+"% "+n(t(o))+"% "+n(t(i))+"%); }",1)]),s("img",{style:u({"object-view-box":`inset(${t(e)}% ${t(a)}% ${t(o)}% ${t(i)}%)`}),class:"img-1 mx-auto d-flex align-items-center",src:h,alt:"Show onlt a part of the Image"},null,4)]),s("div",{class:y(["col flex-fill",m.isDark?"btn-outline-primary  bd-secondary ":"bg-secondary text-white"])},[s("div",j,[B,s("div",I,[_(s("input",{class:"py-2",type:"range",min:"-100",max:"100",id:"topVal","onUpdate:modelValue":c[0]||(c[0]=l=>p(e)?e.value=l:e=l)},null,512),[[r,t(e)]])]),s("div",k,n(t(e)),1)]),s("div",C,[S,s("div",U,[_(s("input",{class:"py-2",type:"range",min:"-100",max:"100",id:"rightVal","onUpdate:modelValue":c[1]||(c[1]=l=>p(a)?a.value=l:a=l)},null,512),[[r,t(a)]])]),s("div",M,n(t(a)),1)]),s("div",z,[H,s("div",O,[_(s("input",{class:"py-2",type:"range",min:"-100",max:"100",id:"bottomVal","onUpdate:modelValue":c[2]||(c[2]=l=>p(o)?o.value=l:o=l)},null,512),[[r,t(o)]])]),s("div",q,n(t(o)),1)]),s("div",A,[E,s("div",F,[_(s("input",{class:"py-2",type:"range",min:"-100",max:"100",id:"leftVal","onUpdate:modelValue":c[3]||(c[3]=l=>p(i)?i.value=l:i=l)},null,512),[[r,t(i)]])]),s("div",G,n(t(i)),1)])],2)]))}};const R=s("div",{class:"row mb-3"}," Image Comparison Slider ",-1),T={class:"row"},W={class:"wrapper"},Y={class:"images"},J=s("div",{class:"img-1"},null,-1),K={class:"slider"},L=s("span",null,null,-1),P=[L],Q={__name:"ImageComparison",setup(m){const e=d(50);return(a,o)=>(v(),f(x,null,[R,s("div",T,[s("div",W,[s("div",Y,[J,s("div",{class:"img-2",style:u({width:e.value+"%"})},null,4)]),s("div",K,[s("div",{class:"drag-line",style:u({left:e.value+"%"})},P,4),_(s("input",{type:"range",min:"0",max:"98","onUpdate:modelValue":o[0]||(o[0]=i=>e.value=i)},null,512),[[r,e.value]])])])])],64))}},X={class:"container d-flex align-items-center justify-content-center fw-bold"},Z={class:"container d-flex flex-column align-items-center justify-content-center fw-bold"},es={__name:"CssExperimentView",setup(m){return(e,a)=>(v(),f(x,null,[s("div",X,[g(N,{class:"mb-3"})]),s("div",Z,[g(Q)])],64))}};export{es as default};