(this["webpackJsonpmaterial-calculator"]=this["webpackJsonpmaterial-calculator"]||[]).push([[0],{1:function(e,t,i){e.exports={mainContainer:"calculator_mainContainer__3t0oQ",rowContainer:"calculator_rowContainer__1d4H0",rowWrapContainer:"calculator_rowWrapContainer__3Wjoy",columnContainer:"calculator_columnContainer__sLtfu",resultNumber:"calculator_resultNumber__2PR-p",jobID:"calculator_jobID__1xzrN"}},11:function(e,t,i){e.exports={mainContainer:"section_mainContainer__2tFui"}},19:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var n=i(2),r=i.n(n),a=i(9),s=i.p+"static/media/SQUARE-BR-TIGHT.997181bd.png",c=(i(19),i(6)),h=i(4),l=i(5),p=i(10),j=i(0);function d(e){var t=e.draw,i=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=i.current.getContext("2d");t(e)}),[t]),Object(j.jsx)("canvas",{ref:i,width:e.canvasWidth,height:e.canvasHeight})}var o=i(11),u=i.n(o);function b(e){return Object(j.jsx)("div",{className:u.a.mainContainer,children:e.children})}var O=i(3),g=i.n(O),m=i.p+"static/media/STACK-FL-TIGHT.dcd2278b.png",S=r.a.forwardRef((function(e,t){var i=new Date,n=i.toLocaleDateString(),r=i.toLocaleTimeString();return Object(j.jsx)("div",{ref:t,className:g.a.printSource,children:Object(j.jsxs)("div",{className:g.a.mainContainer,children:[Object(j.jsxs)("div",{className:g.a.header,children:[Object(j.jsx)("img",{src:m,alt:"IGN Logo"}),Object(j.jsx)("h1",{children:"MATERIAL REPORT"})]}),e.inputField.jobID&&Object(j.jsxs)("h1",{children:["Job Name:",e.inputField.jobID]}),Object(j.jsxs)("div",{className:g.a.section,children:[Object(j.jsxs)("h3",{children:["Press Sheet = ",e.inputField.printWidth,'" X'," ",e.inputField.printHeight,'"']}),Object(j.jsxs)("h3",{children:["Parts / Press Sheet = ",e.inputField.partsPerPrint]})]}),Object(j.jsxs)("div",{className:g.a.section,children:[Object(j.jsx)("div",{className:g.a.fullRow,children:Object(j.jsx)("h2",{children:" Strip Sheet "})}),Object(j.jsxs)("h3",{children:["Press Sheets / Strip = ",isNaN(e.printUp)?0:e.printUp]}),Object(j.jsxs)("h3",{children:["Parts / Strip ="," ",isNaN(e.printUp)?0:e.printUp*e.inputField.partsPerPrint]}),Object(j.jsxs)("h3",{children:["Size = ",e.inputField.stripSheetWidth,'" X'," ",e.inputField.stripSheetHeight,'"']}),Object(j.jsxs)("h3",{children:["Total = ",e.stripQty]}),Object(j.jsxs)("h3",{children:["Outer Margin = ",e.inputField.outerMargin]}),Object(j.jsxs)("h3",{children:["Inner Margins = ",e.inputField.innerMargin]}),Object(j.jsx)("div",{className:g.a.fullRow,children:e.children[0]})]}),Object(j.jsxs)("div",{className:g.a.section,children:[Object(j.jsx)("div",{className:g.a.fullRow,children:Object(j.jsx)("h2",{children:" Parent Sheet "})}),Object(j.jsxs)("h3",{children:["Strip Sheets / Parent = ",isNaN(e.stripUp)?0:e.stripUp]}),Object(j.jsxs)("h3",{children:["Parts / Parent ="," ",isNaN(e.printUp)?0:e.printUp*e.inputField.partsPerPrint*e.stripUp]}),Object(j.jsxs)("h3",{children:["Size = ",e.inputField.parentSheetWidth,'" X'," ",e.inputField.parentSheetHeight,'"']}),Object(j.jsxs)("h3",{children:["Total = ",e.sheetQty]}),Object(j.jsx)("div",{className:g.a.fullRow,children:e.children[1]})]}),Object(j.jsxs)("div",{className:g.a.section,children:[Object(j.jsxs)("h3",{children:["Target Part Count = ",e.inputField.partQty]}),Object(j.jsxs)("h3",{children:["Overs ="," ",isNaN(e.stripQty*e.inputField.partsPerPrint*e.printUp)?0:e.stripQty*e.inputField.partsPerPrint*e.printUp-e.inputField.partQty]})]}),Object(j.jsxs)("span",{className:g.a.timestamp,children:[n," - ",r]})]})})})),x=i(1),v=i.n(x),N=function(){var e=Object(n.useState)({stripSheetWidth:48,stripSheetHeight:16,printWidth:8,printHeight:10,innerMargin:0,outerMargin:0,partQty:100,parentSheetWidth:96,parentSheetHeight:48,partsPerPrint:1,overage:0,jobID:""}),t=Object(l.a)(e,2),i=t[0],a=t[1],s=Object(n.useState)(0),o=Object(l.a)(s,2),u=o[0],O=o[1],g=Object(n.useState)(0),m=Object(l.a)(g,2),x=m[0],N=m[1],W=Object(n.useState)(0),f=Object(l.a)(W,2),H=f[0],P=f[1],C=Object(n.useState)(0),w=Object(l.a)(C,2),M=w[0],y=w[1],_=Object(n.useState)(!0),T=Object(l.a)(_,2),R=T[0],E=T[1],F=.31;switch(!0){case window.innerWidth<400:F=.5;break;case i.stripSheetHeight-i.stripSheetWidth>=6:F=.09;break;case i.stripSheetWidth-i.stripSheetHeight<=6:case i.stripSheetHeight>=i.stripSheetWidth:F=.15}var I=.31;switch(!0){case window.innerWidth<400:I=.5;break;case i.parentSheetHeight-i.parentSheetWidth>=6:I=.09;break;case i.parentSheetWidth-i.parentSheetHeight<=6:case i.parentSheetHeight>=i.parentSheetWidth:case i.parentSheetWidth>0&&i.parentSheetWidth<=12:I=.15}var k=(window.innerWidth/i.stripSheetWidth*F).toFixed(2),U=(window.innerWidth/i.parentSheetWidth*I).toFixed(2),Q=function(e){if("jobID"!==e.target.name){if(e.target.value>=0){if("partQty"===e.target.name||"partsPerPrint"===e.target.name)return void a(Object(h.a)(Object(h.a)({},i),{},Object(c.a)({},e.target.name,parseFloat(e.target.value))));e.target.value<=1800&&a(Object(h.a)(Object(h.a)({},i),{},Object(c.a)({},e.target.name,parseFloat(e.target.value))))}}else a(Object(h.a)(Object(h.a)({},i),{},Object(c.a)({},e.target.name,e.target.value)))},A=function(e){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle="white",e.strokeStyle="black",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.strokeRect(0,0,e.canvas.width,e.canvas.height),e.strokeStyle="#ff0000",e.fillStyle="#f2dcda",z(i.outerMargin*k,i.outerMargin*k,i.outerMargin*k,i.innerMargin*k,i.stripSheetWidth*k,i.stripSheetHeight*k,i.printWidth*k,i.printHeight*k,e);var t=B(i.stripSheetWidth,i.printWidth,i.innerMargin,i.outerMargin);t>=i.printHeight&&z(G(i.stripSheetWidth,i.printWidth,i.innerMargin,i.outerMargin)*k,i.outerMargin*k,i.outerMargin*k,i.innerMargin*k,t*k,i.stripSheetHeight*k,i.printHeight*k,i.printWidth*k,e);var n=B(i.stripSheetHeight,i.printHeight,i.innerMargin,i.outerMargin);if(n>=i.printWidth){var r=G(i.stripSheetHeight,i.printHeight,i.innerMargin,i.outerMargin);z(i.outerMargin*k,r*k,i.outerMargin*k,i.innerMargin*k,i.stripSheetWidth*k,n*k,i.printHeight*k,i.printWidth*k,e)}},D=function(e){var t=i.stripSheetWidth,n=i.stripSheetHeight;R&&(t=i.stripSheetHeight,n=i.stripSheetWidth),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle="white",e.strokeStyle="black",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.strokeRect(0,0,e.canvas.width,e.canvas.height),e.strokeStyle="#ff0000",e.fillStyle="#f2dcda",z(0,0,0,0,i.parentSheetWidth*U,i.parentSheetHeight*U,t*U,n*U,e);var r=B(i.parentSheetWidth,n,0,0);r>=i.stripSheetHeight&&z(G(i.parentSheetWidth,t,0,0)*U,0,0,0,r*U,i.parentSheetHeight*U,n*U,t*U,e);var a=B(i.parentSheetHeight,n,0,0);a>=t&&z(0,G(i.parentSheetHeight,n,0,0)*U,0,0,i.parentSheetWidth*U,a*U,n*U,t*U,e)};function L(e,t,i,n){for(var r=n,a=0;e>0&&t>0&&r<=e;)(r+=t)<=e-n&&(a+=1,r+=i);return t>0?a:0}function z(e,t,i,n,r,a,s,c,h){for(var l=e,p=t,j=L(r,s,n,i),d=j,o=L(a,c,n,i),u=[];o>0;){for(;d>0;)u.push(h.fillRect(l,p,s,c)),u.push(h.strokeRect(l,p,s,c)),l+=s+n,d-=1;p+=c+n,o-=1,d=j,l=e}return u}Object(n.useEffect)((function(){}),[R]);var B=Object(n.useCallback)((function(e,t,i,n){return e-n-L(e,t,i,n)*(t+i)}),[]);function G(e,t,i,n){return n+L(e,t,i,n)*(t+i)}var J=r.a.useRef(null),X=Object(p.useReactToPrint)({content:function(){return J.current}});return Object(n.useEffect)((function(){var e=L(i.stripSheetWidth,i.printWidth,i.innerMargin,i.outerMargin),t=L(i.stripSheetHeight,i.printHeight,i.innerMargin,i.outerMargin),n=0,r=0,a=B(i.stripSheetWidth,i.printWidth,i.innerMargin,i.outerMargin);a>=i.printHeight&&(n=L(a,i.printHeight,i.innerMargin,i.outerMargin),r=L(i.stripSheetHeight,i.printWidth,i.innerMargin,i.outerMargin));var s=B(i.stripSheetHeight,i.printHeight,i.innerMargin,i.outerMargin);s>=i.printWidth&&(r=L(s,i.printWidth,i.innerMargin,i.outerMargin),n=L(i.stripSheetWidth,i.printHeight,i.innerMargin,i.outerMargin)),O(e*t+n*r)}),[i,B]),Object(n.useEffect)((function(){var e=i.stripSheetWidth,t=i.stripSheetHeight;R&&(e=i.stripSheetHeight,t=i.stripSheetWidth);var n=L(i.parentSheetWidth,e,0,0),r=L(i.parentSheetHeight,t,0,0),a=0,s=0,c=B(i.parentSheetWidth,e,0,0);c>=t&&(a=L(c,t,0,0),s=L(i.parentSheetHeight,e,0,0));var h=B(i.parentSheetHeight,t,0,0);h>=e&&(s=L(h,e,0,0),a=L(i.parentSheetWidth,t,0,0)),N(n*r+a*s)}),[i,B,R]),Object(n.useEffect)((function(){P(u>0?Math.ceil((i.partQty+i.partQty*parseFloat(i.overage)*.01)/i.partsPerPrint/u):0)}),[i,u]),Object(n.useEffect)((function(){y(H>0&&x>0?Math.floor(H/x*100)/100:0)}),[i,H,x]),Object(j.jsxs)("div",{className:v.a.mainContainer,children:[Object(j.jsxs)("div",{className:v.a.rowWrapContainer,children:[Object(j.jsx)(b,{children:Object(j.jsx)("div",{className:v.a.rowWrapContainer,children:Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h2",{children:"PART COUNT"}),Object(j.jsxs)("div",{className:v.a.rowWrapContainer,children:[Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Target Part Qty"}),Object(j.jsx)("input",{type:"number",name:"partQty",onChange:Q,placeholder:"qty",value:i.partQty||""})]}),Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Minimum Overage (%)"}),Object(j.jsx)("input",{type:"number",name:"overage",onChange:Q,placeholder:"0",value:i.overage||""})]})]})]})})}),Object(j.jsxs)(b,{children:[Object(j.jsx)("h2",{children:"PRESS SHEET"}),Object(j.jsxs)("div",{className:v.a.rowWrapContainer,children:[Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Parts / Press Sheet"}),Object(j.jsx)("input",{type:"number",name:"partsPerPrint",onChange:Q,placeholder:"Qty",value:i.partsPerPrint||""})]}),Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Width (in.)"}),Object(j.jsx)("input",{type:"number",name:"printWidth",onChange:Q,placeholder:"width",value:i.printWidth||""})]}),Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Height (in.)"}),Object(j.jsx)("input",{type:"number",name:"printHeight",onChange:Q,placeholder:"height",value:i.printHeight||""})]})]})]})]}),Object(j.jsxs)(b,{children:[Object(j.jsx)("h2",{children:"STRIP SHEET"}),Object(j.jsxs)("div",{className:v.a.rowWrapContainer,children:[Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Width (in.)"}),Object(j.jsx)("input",{type:"number",name:"stripSheetWidth",onChange:Q,placeholder:"width",value:i.stripSheetWidth||""})]}),Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Height (in.)"}),Object(j.jsx)("input",{type:"number",name:"stripSheetHeight",onChange:Q,placeholder:"height",value:i.stripSheetHeight||""})]}),Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Outer Margin (in.)"}),Object(j.jsx)("input",{type:"number",name:"outerMargin",onChange:Q,placeholder:"0",step:".125",value:i.outerMargin||""})]}),Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Inner Margins (in.)"}),Object(j.jsx)("input",{type:"number",name:"innerMargin",onChange:Q,placeholder:"0",step:".125",value:i.innerMargin||""})]})]}),Object(j.jsx)("div",{className:v.a.rowWrapContainer,children:Object(j.jsx)(d,{draw:A,canvasWidth:i.stripSheetWidth*k,canvasHeight:i.stripSheetHeight*k})}),Object(j.jsx)("button",{type:"button",onClick:function(){var e=i.printHeight,t=i.printWidth;a(Object(h.a)(Object(h.a)({},i),{},{printWidth:e,printHeight:t}))},children:"ROTATE PRESS SHEET"}),Object(j.jsxs)("div",{className:v.a.rowContainer,children:[Object(j.jsxs)("h3",{children:["Press Sheets Up = ","  ",Object(j.jsx)("span",{className:v.a.resultNumber,children:isNaN(u)?0:u})]}),Object(j.jsxs)("h3",{children:["Parts Up = ","  ",Object(j.jsx)("span",{className:v.a.resultNumber,children:isNaN(u)?0:u*i.partsPerPrint})]})]})]}),Object(j.jsxs)(b,{children:[Object(j.jsx)("h2",{children:"PARENT SHEET"}),Object(j.jsxs)("div",{className:v.a.rowContainer,children:[Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Width (in.)"}),Object(j.jsx)("input",{type:"number",name:"parentSheetWidth",onChange:Q,placeholder:"width",value:i.parentSheetWidth||""})]}),Object(j.jsxs)("div",{className:v.a.columnContainer,children:[Object(j.jsx)("h4",{children:"Height (in.)"}),Object(j.jsx)("input",{type:"number",name:"parentSheetHeight",onChange:Q,placeholder:"height",value:i.parentSheetHeight||""})]})]}),Object(j.jsx)("div",{className:v.a.rowContainer,children:Object(j.jsx)(d,{draw:D,canvasWidth:i.parentSheetWidth*U,canvasHeight:i.parentSheetHeight*U})}),Object(j.jsx)("button",{type:"button",onClick:function(){E(!R)},children:"ROTATE STRIP SHEET"}),Object(j.jsxs)("div",{className:v.a.rowContainer,children:[Object(j.jsxs)("h3",{children:["Strips Up = ","  ",Object(j.jsx)("span",{className:v.a.resultNumber,children:isNaN(x)?0:x})]}),Object(j.jsxs)("h3",{children:["Parts Up ="," ",Object(j.jsx)("span",{className:v.a.resultNumber,children:isNaN(u)?0:u*i.partsPerPrint*x})]})]})]}),Object(j.jsx)(b,{children:Object(j.jsxs)("div",{className:v.a.rowWrapContainer,children:[Object(j.jsxs)("h3",{children:["Parent Sheet Total =","   ",Object(j.jsx)("span",{className:v.a.resultNumber,children:isNaN(M)||!isFinite(M)?0:M})]}),Object(j.jsxs)("h3",{children:["Strip Sheet Total =","   ",Object(j.jsx)("span",{className:v.a.resultNumber,children:isNaN(H)||!isFinite(H)?0:H})]}),Object(j.jsxs)("h3",{children:["Part Total =","   ",Object(j.jsx)("span",{className:v.a.resultNumber,children:isNaN(x*i.partsPerPrint*u)?0:H*i.partsPerPrint*u})]})]})}),Object(j.jsx)("span",{className:v.a.jobID,children:Object(j.jsx)("input",{type:"text",name:"jobID",onChange:Q,placeholder:"Job Name",className:v.a.jobInput,value:i.jobID||""})}),Object(j.jsx)("button",{type:"button",onClick:X,children:"PRINT"}),Object(j.jsxs)(S,{ref:J,stripUp:x,stripQty:H,printUp:u,sheetQty:M,inputField:i,children:[Object(j.jsx)(d,{draw:A,canvasWidth:i.stripSheetWidth*k,canvasHeight:i.stripSheetHeight*k}),Object(j.jsx)(d,{draw:D,canvasWidth:i.parentSheetWidth*U,canvasHeight:i.parentSheetHeight*U})]})]})};function W(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{src:s,alt:"IGN Logo"}),Object(j.jsx)("h1",{children:"MATERIAL CALCULATOR"})]}),Object(j.jsx)(N,{})]})}var f=document.getElementById("root");Object(a.createRoot)(f).render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(W,{})}))},3:function(e,t,i){e.exports={printSource:"componentToPrint_printSource__zkm2E",mainContainer:"componentToPrint_mainContainer__1kDBe",header:"componentToPrint_header__3m3gw",section:"componentToPrint_section__La_5B",fullRow:"componentToPrint_fullRow__3YeRo",timestamp:"componentToPrint_timestamp__2_cnf"}}},[[21,1,2]]]);
//# sourceMappingURL=main.012d266a.chunk.js.map