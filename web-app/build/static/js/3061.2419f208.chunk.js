"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[3061],{43061:(e,l,t)=>{t.r(l),t.d(l,{default:()=>x});var o=t(65043),a=t(89923),n=t(32511),c=t(73216),i=t(14558),s=t(20554),r=t(64159),p=t(28481),d=t(48793),u=t(55968),b=t(70579),m=null;const x=()=>{const e=(0,c.Zp)(),[l,t]=(0,o.useState)(!1),[x,f]=(0,o.useState)(["cpu","mem","block","mutex","goroutines"]),h=(0,i.vf)(),g=e=>{let l=[];l=x.indexOf(e.target.value)>-1?x.filter((l=>l!==e.target.value)):[...x,e.target.value],f(l)},v=(0,s.jL)();return(0,o.useEffect)((()=>{v((0,r.ph)("profile"))}),[]),(0,b.jsxs)(o.Fragment,{children:[(0,b.jsx)(d.A,{label:"Profile",actions:(0,b.jsx)(u.A,{})}),(0,b.jsxs)(a.Mxu,{children:[!h&&(0,b.jsx)(p.A,{compactMode:!0}),(0,b.jsxs)(a.Hbc,{children:[(0,b.jsxs)(a.azJ,{sx:{display:"flex",gap:10,"& div":{width:"initial"},"& .inputItem:not(:last-of-type)":{marginBottom:0}},children:[(0,b.jsx)(a.l1Y,{noMinWidth:!0,children:"Types to profile:"}),[{label:"cpu",value:"cpu"},{label:"mem",value:"mem"},{label:"block",value:"block"},{label:"mutex",value:"mutex"},{label:"goroutines",value:"goroutines"}].map((e=>(0,b.jsx)(a.Sc0,{checked:x.indexOf(e.value)>-1,disabled:l||!h,id:"checkbox-".concat(e.label),label:e.label,name:"checkbox-".concat(e.label),onChange:g,value:e.value},"checkbox-".concat(e.label))))]}),(0,b.jsxs)(a.azJ,{sx:{display:"flex",justifyContent:"flex-end",marginTop:24,gap:10},children:[(0,b.jsx)(a.$nd,{id:"start-profiling",type:"submit",variant:h?"callAction":"regular",disabled:l||x.length<1||!h,onClick:()=>{h?(()=>{const e=x.join(","),l=new URL(window.location.toString()),o=l.port,a=new URL(document.baseURI).pathname,c=(0,n.nw)(l.protocol);if(null!==(m=new WebSocket("".concat(c,"://").concat(l.hostname,":").concat(o).concat(a,"ws/profile?types=").concat(e))))m.onopen=()=>{t(!0),m.send("ok")},m.onmessage=e=>{let l=new Blob([e.data],{type:"application/zip"});t(!1);var o=document.createElement("a");o.href=window.URL.createObjectURL(l),o.download="profile.zip",document.body.appendChild(o),o.click(),document.body.removeChild(o)},m.onclose=()=>{console.log("connection closed by server"),t(!1)}})():e("/support/register")},label:"Start Profiling"}),(0,b.jsx)(a.$nd,{id:"stop-profiling",type:"submit",variant:"callAction",color:"primary",disabled:!l||!h,onClick:()=>{m.close(1e3),t(!1)},label:"Stop Profiling"})]})]})]})]})}}}]);
//# sourceMappingURL=3061.2419f208.chunk.js.map