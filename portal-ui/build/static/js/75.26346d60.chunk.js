(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[75],{413:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},434:function(e,t,n){"use strict";var r=n(1),o=n(5),a=n(413),i=(n(2),n(308)),c=n(320),l=n(388),s=n(385),u=n(8),p=n(0),d=["classes","children","variant","tooltip"];t.a=Object(c.a)((function(e){return Object(i.a)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var t=e.classes,n=e.children,i=e.variant,c=void 0===i?"outlined":i,f=e.tooltip,b=Object(a.a)(e,d),y=Object(p.jsx)(l.a,Object(r.a)(Object(r.a)({},b),{},{className:Object(u.a)(t.root,Object(o.a)({},t.contained,"contained"===c)),children:n}));return f&&""!==f?Object(p.jsx)(s.a,{title:f,children:Object(p.jsx)("span",{children:y})}):y}))},548:function(e,t,n){"use strict";var r=n(549).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n(2)),o=a(n(550));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?f(e):t}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;s(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return y(f(n=p(this,(e=d(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,c=t.children,l=t.options,s=r.default.Children.only(c),u=(0,o.default)(a,l);i&&i(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}],a&&u(n.prototype,a),i&&u(n,i),t}(r.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})},550:function(e,t,n){"use strict";var r=n(551),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),c=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),c.selectNodeContents(s),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},551:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},745:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(13),a=n(2),i=n.n(a),c=n(39),l=n.n(c),s=n(308),u=n(320),p=n(386),d=n(399),f=n(444),b=n(982),y=n(461),m=n(434),j=n(548),h=n.n(j),g=n(23),O=n(0),v=Object(u.a)((function(e){return Object(s.a)({container:{display:"flex",flexFlow:"column",padding:"20px 0 8px 0"},inputWithCopy:{"& .MuiInputBase-root ":{width:"100%",background:"#FBFAFA","& .MuiInputBase-input":{height:".8rem"},"& .MuiInputAdornment-positionEnd":{marginRight:".5rem","& .MuiButtonBase-root":{height:"2rem"}}},"& .MuiButtonBase-root .min-icon":{width:".8rem",height:".8rem"}},inputLabel:{fontSize:".8rem",fontWeight:600}})}))((function(e){var t=e.label,n=void 0===t?"":t,r=e.value,o=void 0===r?"":r,a=e.classes,i=void 0===a?{}:a;return Object(O.jsxs)("div",{className:i.container,children:[Object(O.jsxs)("div",{className:i.inputLabel,children:[n,":"]}),Object(O.jsx)("div",{className:i.inputWithCopy,children:Object(O.jsx)(b.a,{value:o,readOnly:!0,endAdornment:Object(O.jsx)(y.a,{position:"end",children:Object(O.jsx)(h.a,{text:o,children:Object(O.jsx)(m.a,{"aria-label":"copy",tooltip:"Copy",onClick:function(){},onMouseDown:function(){},edge:"end",children:Object(O.jsx)(g.A,{})})})})})})]})})),x=n(145),w=n(144);t.default=Object(u.a)((function(e){return Object(s.a)({warningBlock:{color:"red",fontSize:".85rem",margin:".5rem 0 .5rem 0",display:"flex",alignItems:"center","& svg ":{marginRight:".3rem",height:16,width:16}},credentialTitle:{padding:".8rem 0 0 0",fontWeight:600,fontSize:".9rem"},buttonContainer:{textAlign:"right",marginTop:"1rem"},credentialsPanel:{overflowY:"auto",maxHeight:350},promptTitle:{display:"flex",alignItems:"center"},buttonSpacer:{marginRight:".9rem"},promptIcon:{marginRight:".1rem",display:"flex",alignItems:"center",height:"2rem",width:"2rem"}})}))((function(e){var t=e.classes,n=e.newServiceAccount,a=e.open,c=e.closeModal,s=e.entity;if(!n)return null;var u=l()(n,"console",null),b=l()(n,"idp",!1);return Object(O.jsx)(d.a,{modalOpen:a,onClose:function(){c()},title:Object(O.jsxs)("div",{className:t.promptTitle,children:[Object(O.jsx)("div",{className:t.promptIcon,children:Object(O.jsx)(x.a,{})})," ",Object(O.jsxs)("div",{children:["New ",s," Created"]})]}),titleIcon:Object(O.jsx)(g.Xb,{}),children:Object(O.jsxs)(f.a,{container:!0,children:[Object(O.jsxs)(f.a,{item:!0,xs:12,className:t.formScrollable,children:["A new ",s," has been created with the following details:",!b&&u&&Object(O.jsx)(i.a.Fragment,{children:Object(O.jsxs)(f.a,{item:!0,xs:12,className:t.credentialsPanel,children:[Object(O.jsx)("div",{className:t.credentialTitle,children:"Console Credentials"}),Array.isArray(u)&&u.map((function(e,t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{label:"Access Key",value:e.accessKey}),Object(O.jsx)(v,{label:"Secret Key",value:e.secretKey})]})})),!Array.isArray(u)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{label:"Access Key",value:u.accessKey}),Object(O.jsx)(v,{label:"Secret Key",value:u.secretKey})]})]})}),b?Object(O.jsx)("div",{className:t.warningBlock,children:"Please Login via the configured external identity provider."}):Object(O.jsxs)("div",{className:t.warningBlock,children:[Object(O.jsx)(w.a,{}),Object(O.jsx)("span",{children:"Write these down, as this is the only time the secret will be displayed."})]})]}),Object(O.jsxs)(f.a,{item:!0,xs:12,className:t.buttonContainer,children:[Object(O.jsx)(p.a,{variant:"outlined",className:t.buttonSpacer,onClick:function(){c()},color:"primary",children:"Done"}),!b&&Object(O.jsx)(p.a,{onClick:function(){var e={};if(u)if(Array.isArray(u)){var t=u.map((function(e){return{access_key:e.accessKey,secret_key:e.secretKey}}));e={console:Object(o.a)(t)}}else e={console:[{access_key:u.accessKey,secret_key:u.secretKey}]};!function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}("credentials.json",JSON.stringify(Object(r.a)({},e)))},endIcon:Object(O.jsx)(g.J,{}),variant:"contained",color:"primary",children:"Download"})]})]})})}))}}]);
//# sourceMappingURL=75.26346d60.chunk.js.map