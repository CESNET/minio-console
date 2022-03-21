"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2966],{82825:function(e,n,t){t.r(n);var a=t(23430),o=t(18489),i=t(50390),l=t(34424),s=t(66946),r=t(81378),c=t(86509),d=t(4285),u=t(25594),p=t(72462),m=t(44149),h=t(30324),v=t(51002),Z=t(27207),f=t(66964),x=t(41227),b=t(62559),g=(0,l.$j)(null,{setModalErrorSnackMessage:m.zb});n.default=(0,d.Z)((function(e){return(0,c.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},p.bK),p.QV),p.DF),p.ID))}))(g((function(e){var n=e.classes,t=e.open,o=e.bucketName,l=e.closeModalAndRefresh,c=e.setModalErrorSnackMessage,d=(0,i.useState)(!1),p=(0,a.Z)(d,2),m=p[0],g=p[1],j=(0,i.useState)(!0),k=(0,a.Z)(j,2),C=k[0],y=k[1],N=(0,i.useState)("compliance"),S=(0,a.Z)(N,2),F=S[0],M=S[1],P=(0,i.useState)("days"),R=(0,a.Z)(P,2),w=R[0],I=R[1],B=(0,i.useState)(1),L=(0,a.Z)(B,2),E=L[0],O=L[1],z=(0,i.useState)(!1),W=(0,a.Z)(z,2),_=W[0],A=W[1];return(0,i.useEffect)((function(){Number.isNaN(E)||E<1?A(!1):A(!0)}),[E]),(0,i.useEffect)((function(){C&&h.Z.invoke("GET","/api/v1/buckets/".concat(o,"/retention")).then((function(e){y(!1),M(e.mode),O(e.validity),I(e.unit)})).catch((function(e){y(!1)}))}),[C,o]),(0,b.jsx)(v.Z,{title:"Set Retention Configuration",modalOpen:t,onClose:function(){l()},children:C?(0,b.jsx)(x.Z,{style:{width:16,height:16}}):(0,b.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),m||(g(!0),h.Z.invoke("PUT","/api/v1/buckets/".concat(o,"/retention"),{mode:F,unit:w,validity:E}).then((function(){g(!1),l()})).catch((function(e){g(!1),c(e)})))},children:(0,b.jsxs)(u.ZP,{container:!0,children:[(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:n.modalFormScrollable,children:[(0,b.jsx)(u.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,b.jsx)(Z.Z,{currentSelection:F,id:"retention_mode",name:"retention_mode",label:"Retention Mode",onChange:function(e){M(e.target.value)},selectorOptions:[{value:"compliance",label:"Compliance"},{value:"governance",label:"Governance"}]})}),(0,b.jsx)(u.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,b.jsx)(Z.Z,{currentSelection:w,id:"retention_unit",name:"retention_unit",label:"Retention Unit",onChange:function(e){I(e.target.value)},selectorOptions:[{value:"days",label:"Days"},{value:"years",label:"Years"}]})}),(0,b.jsx)(u.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,b.jsx)(f.Z,{type:"number",id:"retention_validity",name:"retention_validity",onChange:function(e){O(e.target.valueAsNumber)},label:"Retention Validity",value:String(E),required:!0,min:"1"})})]}),(0,b.jsxs)(u.ZP,{item:!0,xs:12,className:n.modalButtonBar,children:[(0,b.jsx)(s.Z,{type:"button",variant:"outlined",color:"primary",disabled:m,onClick:function(){l()},children:"Cancel"}),(0,b.jsx)(s.Z,{type:"submit",variant:"contained",color:"primary",disabled:m||!_,children:"Set"})]}),m&&(0,b.jsx)(u.ZP,{item:!0,xs:12,children:(0,b.jsx)(r.Z,{})})]})})})})))},66964:function(e,n,t){var a=t(18489),o=t(50390),i=t(12066),l=t(25594),s=t(36554),r=t(94187),c=t(95467),d=t(86509),u=t(62449),p=t(4285),m=t(72462),h=t(97538),v=t(44977),Z=t(62559),f=(0,u.Z)((function(e){return(0,d.Z)((0,a.Z)({},m.gM))}));function x(e){var n=f();return(0,Z.jsx)(i.Z,(0,a.Z)({InputProps:{classes:n}},e))}n.Z=(0,p.Z)((function(e){return(0,d.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},m.YI),m.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,a.Z)((0,a.Z)({},m.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var n=e.label,t=e.onChange,i=e.value,d=e.id,u=e.name,p=e.type,m=void 0===p?"text":p,f=e.autoComplete,b=void 0===f?"off":f,g=e.disabled,j=void 0!==g&&g,k=e.multiline,C=void 0!==k&&k,y=e.tooltip,N=void 0===y?"":y,S=e.index,F=void 0===S?0:S,M=e.error,P=void 0===M?"":M,R=e.required,w=void 0!==R&&R,I=e.placeholder,B=void 0===I?"":I,L=e.min,E=e.max,O=e.overlayId,z=e.overlayIcon,W=void 0===z?null:z,_=e.overlayObject,A=void 0===_?null:_,D=e.extraInputProps,q=void 0===D?{}:D,T=e.overlayAction,H=e.noLabelMinWidth,K=void 0!==H&&H,U=e.pattern,Y=void 0===U?"":U,G=e.autoFocus,V=void 0!==G&&G,Q=e.classes,$=e.className,J=void 0===$?"":$,X=e.onKeyPress,ee=(0,a.Z)({"data-index":F},q);return"number"===m&&L&&(ee.min=L),"number"===m&&E&&(ee.max=E),""!==Y&&(ee.pattern=Y),(0,Z.jsx)(o.Fragment,{children:(0,Z.jsxs)(l.ZP,{container:!0,className:(0,v.Z)(""!==J?J:"",""!==P?Q.errorInField:Q.inputBoxContainer),children:[""!==n&&(0,Z.jsxs)(s.Z,{htmlFor:d,className:K?Q.noMinWidthLabel:Q.inputLabel,children:[(0,Z.jsxs)("span",{children:[n,w?"*":""]}),""!==N&&(0,Z.jsx)("div",{className:Q.tooltipContainer,children:(0,Z.jsx)(r.Z,{title:N,placement:"top-start",children:(0,Z.jsx)("div",{className:Q.tooltip,children:(0,Z.jsx)(h.Z,{})})})})]}),(0,Z.jsxs)("div",{className:Q.textBoxContainer,children:[(0,Z.jsx)(x,{id:d,name:u,fullWidth:!0,value:i,autoFocus:V,disabled:j,onChange:t,type:m,multiline:C,autoComplete:b,inputProps:ee,error:""!==P,helperText:P,placeholder:B,className:Q.inputRebase,onKeyPress:X}),W&&(0,Z.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==n?"withLabel":""),children:(0,Z.jsx)(c.Z,{onClick:T?function(){T()}:function(){return null},id:O,size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:W})}),A&&(0,Z.jsx)("div",{className:"".concat(Q.overlayAction," ").concat(""!==n?"withLabel":""),children:A})]})]})})}))},27207:function(e,n,t){var a=t(36222),o=t(18489),i=(t(50390),t(44977)),l=t(25594),s=t(82420),r=t(66695),c=t(98893),d=t(36554),u=t(94187),p=t(86509),m=t(4285),h=t(62449),v=t(72462),Z=t(97538),f=t(62559),x=(0,h.Z)((0,o.Z)({root:{"&:hover":{backgroundColor:"transparent"}}},v.FU)),b=function(e){var n=x();return(0,f.jsx)(c.Z,(0,o.Z)({className:n.root,disableRipple:!0,color:"default",checkedIcon:(0,f.jsx)("span",{className:n.radioSelectedIcon}),icon:(0,f.jsx)("span",{className:n.radioUnselectedIcon})},e))};n.Z=(0,m.Z)((function(e){return(0,p.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},v.YI),v.Hr),{},{optionLabel:{"&.Mui-disabled":{"& .MuiFormControlLabel-label":{color:"#9c9c9c"}},"&:last-child":{marginRight:0},"& .MuiFormControlLabel-label":{fontSize:12,color:"#07193E"}},checkedOption:{"& .MuiFormControlLabel-label":{fontSize:12,color:"#07193E",fontWeight:700}}}))}))((function(e){var n=e.selectorOptions,t=void 0===n?[]:n,o=e.currentSelection,c=e.label,p=e.id,m=e.name,h=e.onChange,v=e.tooltip,x=void 0===v?"":v,g=e.disableOptions,j=void 0!==g&&g,k=e.classes,C=e.displayInColumn,y=void 0!==C&&C;return(0,f.jsxs)(l.ZP,{container:!0,alignItems:"center",children:[(0,f.jsx)(l.ZP,{item:!0,xs:!0,children:(0,f.jsxs)(d.Z,{htmlFor:p,className:k.inputLabel,children:[(0,f.jsx)("span",{children:c}),""!==x&&(0,f.jsx)("div",{className:k.tooltipContainer,children:(0,f.jsx)(u.Z,{title:x,placement:"top-start",children:(0,f.jsx)("div",{children:(0,f.jsx)(Z.Z,{})})})})]})}),(0,f.jsx)(l.ZP,{item:!0,xs:!0,className:k.radioOptionsLayout,children:(0,f.jsx)(s.Z,{"aria-label":p,id:p,name:m,value:o,onChange:h,row:!y,style:{display:"block",textAlign:"right"},children:t.map((function(e){return(0,f.jsx)(r.Z,{value:e.value,control:(0,f.jsx)(b,{}),label:e.label,disabled:j,className:(0,i.Z)(k.optionLabel,(0,a.Z)({},k.checkedOption,e.value===o))},"rd-".concat(m,"-").concat(e.value))}))})})]})}))},51002:function(e,n,t){var a=t(23430),o=t(18489),i=t(50390),l=t(34424),s=t(95467),r=t(97771),c=t(84402),d=t(78426),u=t(93085),p=t(86509),m=t(4285),h=t(72462),v=t(44149),Z=t(21278),f=t(45980),x=t(62559),b=(0,l.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:v.MK});n.Z=(0,m.Z)((function(e){return(0,p.Z)((0,o.Z)((0,o.Z)({},h.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},h.sN))}))(b((function(e){var n=e.onClose,t=e.modalOpen,l=e.title,p=e.children,m=e.classes,h=e.wideLimit,v=void 0===h||h,b=e.modalSnackMessage,g=e.noContentPadding,j=e.setModalSnackMessage,k=e.titleIcon,C=void 0===k?null:k,y=(0,i.useState)(!1),N=(0,a.Z)(y,2),S=N[0],F=N[1];(0,i.useEffect)((function(){j("")}),[j]),(0,i.useEffect)((function(){if(b){if(""===b.message)return void F(!1);"error"!==b.type&&F(!0)}}),[b]);var M=v?{classes:{paper:m.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},P="";return b&&(P=b.detailedErrorMsg,(""===b.detailedErrorMsg||b.detailedErrorMsg.length<5)&&(P=b.message)),(0,x.jsxs)(c.Z,(0,o.Z)((0,o.Z)({open:t,classes:m},M),{},{scroll:"paper",onClose:function(e,t){"backdropClick"!==t&&n()},className:m.root,children:[(0,x.jsxs)(d.Z,{className:m.title,children:[(0,x.jsxs)("div",{className:m.titleText,children:[C," ",l]}),(0,x.jsx)("div",{className:m.closeContainer,children:(0,x.jsx)(s.Z,{"aria-label":"close",id:"close",className:m.closeButton,onClick:n,disableRipple:!0,size:"small",children:(0,x.jsx)(Z.Z,{})})})]}),(0,x.jsx)(f.Z,{isModal:!0}),(0,x.jsx)(r.Z,{open:S,className:m.snackBarModal,onClose:function(){F(!1),j("")},message:P,ContentProps:{className:"".concat(m.snackBar," ").concat(b&&"error"===b.type?m.errorSnackBar:"")},autoHideDuration:b&&"error"===b.type?1e4:5e3}),(0,x.jsx)(u.Z,{className:g?"":m.content,children:p})]}))})))},21278:function(e,n,t){var a=t(64119);n.Z=void 0;var o=a(t(66830)),i=t(62559),l=(0,o.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.Z=l},16756:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(23430),o=t(1048),i=t(32793),l=t(50390),s=t(44977),r=t(50076),c=t(91442),d=t(8208),u=t(55386),p=t(23060),m=t(86875),h=t(10594);function v(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,t(43349).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=t(62559),f=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,d.ZP)(m.Z)((function(e){var n=e.ownerState;return(0,i.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),b=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),g=l.forwardRef((function(e,n){var t=e.autoFocus,l=e.checked,d=e.checkedIcon,m=e.className,h=e.defaultChecked,g=e.disabled,j=e.disableFocusRipple,k=void 0!==j&&j,C=e.edge,y=void 0!==C&&C,N=e.icon,S=e.id,F=e.inputProps,M=e.inputRef,P=e.name,R=e.onBlur,w=e.onChange,I=e.onFocus,B=e.readOnly,L=e.required,E=e.tabIndex,O=e.type,z=e.value,W=(0,o.Z)(e,f),_=(0,u.Z)({controlled:l,default:Boolean(h),name:"SwitchBase",state:"checked"}),A=(0,a.Z)(_,2),D=A[0],q=A[1],T=(0,p.Z)(),H=g;T&&"undefined"===typeof H&&(H=T.disabled);var K="checkbox"===O||"radio"===O,U=(0,i.Z)({},e,{checked:D,disabled:H,disableFocusRipple:k,edge:y}),Y=function(e){var n=e.classes,t=e.checked,a=e.disabled,o=e.edge,i={root:["root",t&&"checked",a&&"disabled",o&&"edge".concat((0,c.Z)(o))],input:["input"]};return(0,r.Z)(i,v,n)}(U);return(0,Z.jsxs)(x,(0,i.Z)({component:"span",className:(0,s.Z)(Y.root,m),centerRipple:!0,focusRipple:!k,disabled:H,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){R&&R(e),T&&T.onBlur&&T.onBlur(e)},ownerState:U,ref:n},W,{children:[(0,Z.jsx)(b,(0,i.Z)({autoFocus:t,checked:l,defaultChecked:h,className:Y.input,disabled:H,id:K&&S,name:P,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;q(n),w&&w(e,n)}},readOnly:B,ref:M,required:L,ownerState:U,tabIndex:E,type:O},"checkbox"===O&&void 0===z?{}:{value:z},F)),D?d:N]}))}))}}]);
//# sourceMappingURL=2966.ced4dcf6.chunk.js.map