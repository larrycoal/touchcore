(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),u=a.n(r),c=a(13),m=a(2),o=a.n(m),i=function(e){var t=e.data;return l.a.createElement("div",null,function(){var e=1;return console.log(t),0===t.length?l.a.createElement("div",null,"Fill the form"):l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Month"),l.a.createElement("th",null,"Principal"),l.a.createElement("th",null,"Interest Payment"),l.a.createElement("th",null,"Principal Payment"),l.a.createElement("th",null,"Total")),Object.values(t).map((function(t){var a=t.principal,n=t.total,r=t.interest,u=t.period;return l.a.createElement("tr",null,l.a.createElement("td",null,e++),l.a.createElement("td",null,Math.round(a)),l.a.createElement("td",null,Math.round(r)),l.a.createElement("td",null,Math.round(u)),l.a.createElement("td",null,Math.round(n)))}))))}())},E=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"form-wrapper"},l.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={amount:e.target.amount.value,duration:e.target.duration.value,rate:e.target.rate.value},a=JSON.stringify(t);o.a.post("/api",a).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}(e)}},l.a.createElement("label",{for:"amount"},"Amount"),l.a.createElement("input",{name:"amount",type:"number"}),l.a.createElement("label",{for:"duration"},"Duration"),l.a.createElement("input",{name:"duration",type:"number"}),l.a.createElement("label",{for:"rate"},"Rate"),l.a.createElement("input",{name:"rate",type:"number"}),l.a.createElement("button",null," Submit"))),l.a.createElement("div",{className:"table-wrapper"},l.a.createElement(i,{data:a})))},p=(a(36),function(){return l.a.createElement("div",{className:"main-wrapper"},l.a.createElement(E,null))});u.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dc988b3c.chunk.js.map