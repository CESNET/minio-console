(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6873],{70887:function(e,n,t){"use strict";var i=t(18489),o=t(50390),r=t(25594),a=t(36554),l=t(94187),s=t(12066),c=t(86509),u=t(4285),d=t(72462),p=t(97538),f=t(62559);n.Z=(0,u.Z)((function(e){return(0,c.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},d.YI),d.Hr),{},{inputLabel:(0,i.Z)((0,i.Z)({},d.YI.inputLabel),{},{fontSize:14,margin:0,alignItems:"flex-start",paddingTop:"20px",flexWrap:"wrap",display:"flex"}),textBoxContainer:{flexGrow:1,position:"relative"},cssOutlinedInput:{borderColor:"#EAEAEA",padding:16},rootContainer:{"& .MuiOutlinedInput-inputMultiline":(0,i.Z)((0,i.Z)({},d.YI.inputLabel),{},{fontSize:13,minHeight:150}),"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#07193E",borderWidth:1},"& textarea":{color:"#07193E",fontSize:13,fontWeight:600,"&:placeholder":{color:"#858585",opacity:1,fontWeight:400}}}}))}))((function(e){var n=e.label,t=e.onChange,i=e.value,c=e.id,u=e.name,d=e.disabled,h=void 0!==d&&d,m=e.tooltip,v=void 0===m?"":m,x=e.index,Z=void 0===x?0:x,b=e.error,g=void 0===b?"":b,j=e.required,C=void 0!==j&&j,N=e.placeholder,y=void 0===N?"":N,w=e.classes,F={"data-index":Z};return(0,f.jsx)(o.Fragment,{children:(0,f.jsxs)(r.ZP,{item:!0,xs:12,className:"".concat(w.fieldContainer," ").concat(""!==g?w.errorInField:""),children:[""!==n&&(0,f.jsxs)(a.Z,{htmlFor:c,className:w.inputLabel,children:[(0,f.jsxs)("span",{children:[n,C?"*":""]}),""!==v&&(0,f.jsx)("div",{className:w.tooltipContainer,children:(0,f.jsx)(l.Z,{title:v,placement:"top-start",children:(0,f.jsx)("div",{className:w.tooltip,children:(0,f.jsx)(p.Z,{})})})})]}),(0,f.jsx)("div",{className:w.textBoxContainer,children:(0,f.jsx)(s.Z,{id:c,name:u,fullWidth:!0,value:i,disabled:h,onChange:t,multiline:!0,rows:5,inputProps:F,error:""!==g,helperText:g,placeholder:y,InputLabelProps:{shrink:!0},InputProps:{classes:{notchedOutline:w.cssOutlinedInput,root:w.rootContainer}},variant:"outlined"})})]})})}))},92440:function(e,n,t){"use strict";var i=t(36222),o=t(18489),r=t(50390),a=t(86509),l=t(4285),s=t(49056),c=t(36554),u=t(94187),d=t(35477),p=t(25594),f=t(72462),h=t(97538),m=t(44977),v=t(62559),x=(0,l.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.Z);n.Z=(0,l.Z)((function(e){return(0,a.Z)((0,o.Z)((0,o.Z)({divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},f.OR),f.YI))}))((function(e){var n=e.label,t=void 0===n?"":n,a=e.onChange,l=e.value,s=e.id,f=e.name,Z=e.checked,b=void 0!==Z&&Z,g=e.disabled,j=void 0!==g&&g,C=e.switchOnly,N=void 0!==C&&C,y=e.tooltip,w=void 0===y?"":y,F=e.description,I=void 0===F?"":F,L=e.classes,P=e.indicatorLabels,k=e.extraInputProps,E=void 0===k?{}:k,A=(0,v.jsxs)(r.Fragment,{children:[!N&&(0,v.jsx)("span",{className:(0,m.Z)(L.indicatorLabel,(0,i.Z)({},L.indicatorLabelOn,!b)),children:P&&P.length>1?P[1]:"OFF"}),(0,v.jsx)(x,{checked:b,onChange:a,color:"primary",name:f,inputProps:(0,o.Z)({"aria-label":"primary checkbox"},E),disabled:j,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:l,id:s}),!N&&(0,v.jsx)("span",{className:(0,m.Z)(L.indicatorLabel,(0,i.Z)({},L.indicatorLabelOn,b)),children:P?P[0]:"ON"})]});return N?A:(0,v.jsx)("div",{className:L.divContainer,children:(0,v.jsxs)(p.ZP,{container:!0,alignItems:"center",children:[(0,v.jsx)(p.ZP,{item:!0,xs:!0,children:(0,v.jsxs)(p.ZP,{container:!0,children:[(0,v.jsx)(p.ZP,{item:!0,xs:12,sm:""!==I?4:10,md:""!==I?3:9,children:""!==t&&(0,v.jsxs)(c.Z,{htmlFor:s,className:L.inputLabel,children:[(0,v.jsx)("span",{children:t}),""!==w&&(0,v.jsx)("div",{className:L.tooltipContainer,children:(0,v.jsx)(u.Z,{title:w,placement:"top-start",children:(0,v.jsx)("div",{className:L.tooltip,children:(0,v.jsx)(h.Z,{})})})})]})}),(0,v.jsx)(p.ZP,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==I&&(0,v.jsx)(d.Z,{component:"p",className:L.fieldDescription,children:I})})]})}),(0,v.jsx)(p.ZP,{item:!0,xs:12,sm:2,textAlign:"right",className:L.switchContainer,children:A})]})})}))},66964:function(e,n,t){"use strict";var i=t(18489),o=t(50390),r=t(12066),a=t(25594),l=t(36554),s=t(94187),c=t(95467),u=t(86509),d=t(62449),p=t(4285),f=t(72462),h=t(97538),m=t(44977),v=t(62559),x=(0,d.Z)((function(e){return(0,u.Z)((0,i.Z)({},f.gM))}));function Z(e){var n=x();return(0,v.jsx)(r.Z,(0,i.Z)({InputProps:{classes:n}},e))}n.Z=(0,p.Z)((function(e){return(0,u.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},f.YI),f.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,i.Z)((0,i.Z)({},f.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var n=e.label,t=e.onChange,r=e.value,u=e.id,d=e.name,p=e.type,f=void 0===p?"text":p,x=e.autoComplete,b=void 0===x?"off":x,g=e.disabled,j=void 0!==g&&g,C=e.multiline,N=void 0!==C&&C,y=e.tooltip,w=void 0===y?"":y,F=e.index,I=void 0===F?0:F,L=e.error,P=void 0===L?"":L,k=e.required,E=void 0!==k&&k,A=e.placeholder,B=void 0===A?"":A,O=e.min,W=e.max,T=e.overlayId,R=e.overlayIcon,S=void 0===R?null:R,M=e.overlayObject,Y=void 0===M?null:M,$=e.extraInputProps,z=void 0===$?{}:$,D=e.overlayAction,H=e.noLabelMinWidth,V=void 0!==H&&H,_=e.pattern,q=void 0===_?"":_,G=e.autoFocus,K=void 0!==G&&G,X=e.classes,J=e.className,Q=void 0===J?"":J,U=e.onKeyPress,ee=(0,i.Z)({"data-index":I},z);return"number"===f&&O&&(ee.min=O),"number"===f&&W&&(ee.max=W),""!==q&&(ee.pattern=q),(0,v.jsx)(o.Fragment,{children:(0,v.jsxs)(a.ZP,{container:!0,className:(0,m.Z)(""!==Q?Q:"",""!==P?X.errorInField:X.inputBoxContainer),children:[""!==n&&(0,v.jsxs)(l.Z,{htmlFor:u,className:V?X.noMinWidthLabel:X.inputLabel,children:[(0,v.jsxs)("span",{children:[n,E?"*":""]}),""!==w&&(0,v.jsx)("div",{className:X.tooltipContainer,children:(0,v.jsx)(s.Z,{title:w,placement:"top-start",children:(0,v.jsx)("div",{className:X.tooltip,children:(0,v.jsx)(h.Z,{})})})})]}),(0,v.jsxs)("div",{className:X.textBoxContainer,children:[(0,v.jsx)(Z,{id:u,name:d,fullWidth:!0,value:r,autoFocus:K,disabled:j,onChange:t,type:f,multiline:N,autoComplete:b,inputProps:ee,error:""!==P,helperText:P,placeholder:B,className:X.inputRebase,onKeyPress:U}),S&&(0,v.jsx)("div",{className:"".concat(X.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,v.jsx)(c.Z,{onClick:D?function(){D()}:function(){return null},id:T,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:S})}),Y&&(0,v.jsx)("div",{className:"".concat(X.overlayAction," ").concat(""!==n?"withLabel":""),children:Y})]})]})})}))},96873:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w},valueDef:function(){return y}});var i=t(35531),o=t(23430),r=t(18489),a=t(50390),l=t(86509),s=t(4285),c=t(25594),u=t(72462),d=t(66964),p=t(38342),f=t.n(p),h=t(3143),m=t.n(h),v=t(36554),x=t(94187),Z=t(97538),b=t(14792),g=t(62559),j=(0,s.Z)((function(e){return(0,l.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},u.YI),u.Hr),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15,flex:1},inputBoxSpacer:{marginBottom:7},inputLabel:(0,r.Z)((0,r.Z)({},u.YI.inputLabel),{},{margin:0,alignItems:"flex-start",paddingTop:"20px",minWidth:162})}))}))((function(e){var n=e.elements,t=e.name,r=e.label,l=e.tooltip,s=void 0===l?"":l,u=e.commonPlaceholder,p=void 0===u?"":u,h=e.onChange,j=e.withBorder,C=void 0!==j&&j,N=e.classes,y=(0,a.useState)([""]),w=(0,o.Z)(y,2),F=w[0],I=w[1],L=(0,a.createRef)();(0,a.useEffect)((function(){if(1===F.length&&""===F[0]&&n&&""!==n){var e=n.split(",");e.push(""),I(e)}}),[n,F]),(0,a.useEffect)((function(){if(F.length>1){var e=L.current;e&&e.scrollIntoView(!1)}}),[F,L]);var P=(0,a.useRef)(!0);(0,a.useLayoutEffect)((function(){P.current?P.current=!1:E()}),[F]);var k=function(e){e.persist();var n=(0,i.Z)(F);n[f()(e.target,"dataset.index",0)]=e.target.value,I(n)},E=m()((function(){var e=F.filter((function(e){return""!==e.trim()})).join(",");h(e)}),500),A=F.map((function(e,n){return(0,g.jsx)("div",{className:N.inputBoxSpacer,children:(0,g.jsx)(d.Z,{id:"".concat(t,"-").concat(n.toString()),label:"",name:"".concat(t,"-").concat(n.toString()),value:F[n],onChange:k,index:n,placeholder:p,overlayIcon:n===F.length-1?(0,g.jsx)(b.Z,{}):null,overlayAction:function(){!function(e){if(""!==e[e.length-1].trim()){var n=(0,i.Z)(e);n.push(""),I(n)}}(F)}},"csv-".concat(t,"-").concat(n.toString()))})}));return(0,g.jsx)(a.Fragment,{children:(0,g.jsxs)(c.ZP,{item:!0,xs:12,className:N.fieldContainer,children:[(0,g.jsxs)(v.Z,{className:N.inputLabel,children:[(0,g.jsx)("span",{children:r}),""!==s&&(0,g.jsx)("div",{className:N.tooltipContainer,children:(0,g.jsx)(x.Z,{title:s,placement:"top-start",children:(0,g.jsx)("div",{className:N.tooltip,children:(0,g.jsx)(Z.Z,{})})})})]}),(0,g.jsxs)(c.ZP,{item:!0,xs:12,className:"".concat(C?N.inputWithBorder:""),children:[A,(0,g.jsx)("div",{ref:L})]})]})})})),C=t(70887),N=t(92440),y=function(e,n,t){var i="on|off"===n?"false":"";if(t.length>0){var o=t.find((function(n){return n.key===e}));o&&(i=o.value)}return i},w=(0,s.Z)((function(e){return(0,l.Z)((0,r.Z)((0,r.Z)({},u.DF),{},{formFieldRow:(0,r.Z)({},u.DF.formFieldRow)},u.oO))}))((function(e){var n=e.onChange,t=e.fields,r=e.defaultVals,l=e.classes,s=(0,a.useState)([]),u=(0,o.Z)(s,2),p=u[0],f=u[1],h=t||[],m=r||[];(0,a.useEffect)((function(){var e=[];t.forEach((function(n){var t={key:n.name,value:y(n.name,n.type,m)};e.push(t)})),f(e)}),[t,r]),(0,a.useEffect)((function(){n(p)}),[p]);var v=function(e,n,t){var o=(0,i.Z)(p);o[t]={key:e,value:n},f(o)},x=function(e,n){switch(e.type){case"on|off":var t=p[n]?p[n].value:"false";return(0,g.jsx)(N.Z,{onChange:function(t){var i=t.target.checked?"true":"false";v(e.name,i,n)},id:e.name,name:e.name,label:e.label,value:"switch_on",tooltip:e.tooltip,checked:"true"===t});case"csv":return(0,g.jsx)(j,{elements:p[n]?p[n].value:"",label:e.label,name:e.name,onChange:function(t){return v(e.name,t,n)},tooltip:e.tooltip,commonPlaceholder:e.placeholder,withBorder:!0});case"comment":return(0,g.jsx)(C.Z,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:p[n]?p[n].value:"",onChange:function(t){return v(e.name,t.target.value,n)},placeholder:e.placeholder});default:return(0,g.jsx)(d.Z,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:p[n]?p[n].value:"",onChange:function(t){return v(e.name,t.target.value,n)},multiline:!!e.multiline,placeholder:e.placeholder})}};return(0,g.jsx)(c.ZP,{container:!0,children:(0,g.jsx)(c.ZP,{xs:12,item:!0,className:l.fieldBox,children:h.map((function(e,n){return(0,g.jsx)(c.ZP,{item:!0,xs:12,className:l.formFieldRow,children:x(e,n)},e.name)}))})})}))},93076:function(e,n,t){var i=t(22171),o=/^\s+/;e.exports=function(e){return e?e.slice(0,i(e)+1).replace(o,""):e}},22171:function(e){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},3143:function(e,n,t){var i=t(74216),o=t(48905),r=t(9962),a=Math.max,l=Math.min;e.exports=function(e,n,t){var s,c,u,d,p,f,h=0,m=!1,v=!1,x=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function Z(n){var t=s,i=c;return s=c=void 0,h=n,d=e.apply(i,t)}function b(e){return h=e,p=setTimeout(j,n),m?Z(e):d}function g(e){var t=e-f;return void 0===f||t>=n||t<0||v&&e-h>=u}function j(){var e=o();if(g(e))return C(e);p=setTimeout(j,function(e){var t=n-(e-f);return v?l(t,u-(e-h)):t}(e))}function C(e){return p=void 0,x&&s?Z(e):(s=c=void 0,d)}function N(){var e=o(),t=g(e);if(s=arguments,c=this,f=e,t){if(void 0===p)return b(f);if(v)return clearTimeout(p),p=setTimeout(j,n),Z(f)}return void 0===p&&(p=setTimeout(j,n)),d}return n=r(n)||0,i(t)&&(m=!!t.leading,u=(v="maxWait"in t)?a(r(t.maxWait)||0,n):u,x="trailing"in t?!!t.trailing:x),N.cancel=function(){void 0!==p&&clearTimeout(p),h=0,s=f=c=p=void 0},N.flush=function(){return void 0===p?d:C(o())},N}},48905:function(e,n,t){var i=t(81683);e.exports=function(){return i.Date.now()}},9962:function(e,n,t){var i=t(93076),o=t(74216),r=t(82913),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(o(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=i(e);var t=l.test(e);return t||s.test(e)?c(e.slice(2),t?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=6873.27fbf284.chunk.js.map