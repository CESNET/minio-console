"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9942],{45902:function(e,n,t){var a=t(1413),r=(t(72791),t(53767)),o=t(80184);n.Z=function(e){var n=e.label,t=void 0===n?null:n,s=e.value,i=void 0===s?"-":s,c=e.orientation,l=void 0===c?"column":c,u=e.stkProps,d=void 0===u?{}:u,Z=e.lblProps,v=void 0===Z?{}:Z,m=e.valProps,p=void 0===m?{}:m;return(0,o.jsxs)(r.Z,(0,a.Z)((0,a.Z)({direction:{xs:"column",sm:l}},d),{},{children:[(0,o.jsx)("label",(0,a.Z)((0,a.Z)({style:{marginRight:5,fontWeight:600}},v),{},{children:t})),(0,o.jsx)("label",(0,a.Z)((0,a.Z)({style:{marginRight:5,fontWeight:500}},p),{},{children:i}))]}))}},5450:function(e,n,t){var a=t(29439),r=t(72791),o=t(11135),s=t(25787),i=t(40986),c=t(79836),l=t(53382),u=t(53994),d=t(56890),Z=t(35855),v=t(64554),m=t(56125),p=t(20890),x=t(85172),f=t(95678),h=t(39281),j=t(10703),b=t(80184),g=function(e){var n=e.event,t=r.useState(!1),o=(0,a.Z)(t,2),s=o[0],i=o[1];return(0,b.jsxs)(r.Fragment,{children:[(0,b.jsxs)(Z.Z,{sx:{"& > *":{borderBottom:"unset"},cursor:"pointer"},children:[(0,b.jsx)(u.Z,{component:"th",scope:"row",onClick:function(){return i(!s)},children:n.event_type}),(0,b.jsx)(u.Z,{onClick:function(){return i(!s)},children:n.reason}),(0,b.jsx)(u.Z,{onClick:function(){return i(!s)},children:n.seen}),(0,b.jsx)(u.Z,{onClick:function(){return i(!s)},children:n.message.length>=30?"".concat(n.message.slice(0,30),"..."):n.message}),(0,b.jsx)(u.Z,{onClick:function(){return i(!s)},children:s?(0,b.jsx)(f.Z,{}):(0,b.jsx)(x.Z,{})})]}),(0,b.jsx)(Z.Z,{children:(0,b.jsx)(u.Z,{style:{paddingBottom:0,paddingTop:0},colSpan:5,children:(0,b.jsx)(m.Z,{in:s,timeout:"auto",unmountOnExit:!0,children:(0,b.jsx)(v.Z,{sx:{margin:1},children:(0,b.jsx)(p.Z,{style:{background:"#efefef",border:"1px solid #dedede",padding:4,fontSize:14,color:"#666666"},children:n.message})})})})})]})};n.Z=(0,s.Z)((function(e){return(0,o.Z)({events:{"& .MuiTypography-root":{fontSize:14},"& .Mui-expanded":{"& .eventMessage":{display:"none"}}}})}))((function(e){e.classes;var n=e.events;return e.loading?(0,b.jsx)(i.Z,{}):(0,b.jsx)(h.Z,{component:j.Z,children:(0,b.jsxs)(c.Z,{"aria-label":"collapsible table",children:[(0,b.jsx)(d.Z,{children:(0,b.jsxs)(Z.Z,{children:[(0,b.jsx)(u.Z,{children:"Type"}),(0,b.jsx)(u.Z,{children:"Reason"}),(0,b.jsx)(u.Z,{children:"Age"}),(0,b.jsx)(u.Z,{children:"Message"}),(0,b.jsx)(u.Z,{})]})}),(0,b.jsx)(l.Z,{children:n.map((function(e){return(0,b.jsx)(g,{event:e},"".concat(e.event_type,"-").concat(e.seen))}))})]})})}))},89942:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(29439),r=t(1413),o=t(72791),s=t(11135),i=t(25787),c=t(23814),l=t(61889),u=t(18073),d=t(43896),Z=t(91523),v=t(81207),m=t(45248),p=t(5450),x=t(60364),f=t(64554),h=t(81918),j=t(87995),b=t(45902),g=t(80184),y={display:"grid",gridTemplateColumns:{xs:"1fr",sm:"2fr 1fr"},gridAutoFlow:{xs:"dense",sm:"row"},gap:2,padding:"15px"},k=function(e){var n=e.title;return(0,g.jsx)(f.Z,{sx:{borderBottom:"1px solid #eaeaea",margin:0,marginBottom:"20px"},children:(0,g.jsx)("h3",{children:n})})},C=function(e){var n=e.describeInfo;return(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)(k,{title:"Summary"}),(0,g.jsxs)(f.Z,{sx:(0,r.Z)({},y),children:[(0,g.jsx)(b.Z,{label:"Name",value:n.name}),(0,g.jsx)(b.Z,{label:"Namespace",value:n.namespace}),(0,g.jsx)(b.Z,{label:"Capacity",value:n.capacity}),(0,g.jsx)(b.Z,{label:"Status",value:n.status}),(0,g.jsx)(b.Z,{label:"Storage Class",value:n.storageClass}),(0,g.jsx)(b.Z,{label:"Access Modes",value:n.accessModes.join(", ")}),(0,g.jsx)(b.Z,{label:"Finalizers",value:n.finalizers.join(", ")}),(0,g.jsx)(b.Z,{label:"Volume",value:n.volume}),(0,g.jsx)(b.Z,{label:"Volume Mode",value:n.volumeMode})]})]})},S=function(e){var n=e.annotations;return(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)(k,{title:"Annotations"}),(0,g.jsx)(f.Z,{children:n.map((function(e,n){return(0,g.jsx)(h.Z,{style:{margin:"0.5%"},label:"".concat(e.key,": ").concat(e.value)},n)}))})]})},w=function(e){var n=e.labels;return(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)(k,{title:"Labels"}),(0,g.jsx)(f.Z,{children:n.map((function(e,n){return(0,g.jsx)(h.Z,{style:{margin:"0.5%"},label:"".concat(e.key,": ").concat(e.value)},n)}))})]})},M=(0,x.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant}}),{setErrorSnackMessage:j.Ih}),T=(0,i.Z)((function(e){return(0,s.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},c.OR),c.Si),c.qg),c.bp),{},{actionsTray:(0,r.Z)((0,r.Z)({},c.OR.actionsTray),{},{padding:"15px 0 0"})}))}))(M((function(e){var n=e.tenant,t=e.namespace,r=e.pvcName,s=e.propLoading,i=(0,o.useState)(),c=(0,a.Z)(i,2),Z=c[0],m=c[1],p=(0,o.useState)(!0),f=(0,a.Z)(p,2),h=f[0],b=f[1],y=(0,o.useState)(0),k=(0,a.Z)(y,2),M=k[0],T=k[1],N=(0,x.I0)();(0,o.useEffect)((function(){s&&b(!0)}),[s]),(0,o.useEffect)((function(){h&&v.Z.invoke("GET","/api/v1/namespaces/".concat(t,"/tenants/").concat(n,"/pvcs/").concat(r,"/describe")).then((function(e){m(e),b(!1)})).catch((function(e){N((0,j.Ih)(e)),b(!1)}))}),[h,r,t,n,N]);return(0,g.jsx)(o.Fragment,{children:Z&&(0,g.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,g.jsxs)(u.Z,{value:M,onChange:function(e,n){T(n)},indicatorColor:"primary",textColor:"primary","aria-label":"cluster-tabs",variant:"scrollable",scrollButtons:"auto",children:[(0,g.jsx)(d.Z,{id:"pvc-describe-summary",label:"Summary"}),(0,g.jsx)(d.Z,{id:"pvc-describe-annotations",label:"Annotations"}),(0,g.jsx)(d.Z,{id:"pvc-describe-labels",label:"Labels"})]}),function(e,n){switch(e){case 0:return(0,g.jsx)(C,{describeInfo:n});case 1:return(0,g.jsx)(S,{annotations:n.annotations});case 2:return(0,g.jsx)(w,{labels:n.labels})}}(M,Z)]})})}))),N=(0,i.Z)((function(e){return(0,s.Z)((0,r.Z)({breadcrumLink:{textDecoration:"none",color:"black"}},(0,c.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,t=e.match,r=(0,o.useState)(0),s=(0,a.Z)(r,2),i=s[0],c=s[1],f=(0,x.I0)(),h=(0,o.useState)(!0),b=(0,a.Z)(h,2),y=b[0],k=b[1],C=t.params.tenantNamespace,S=t.params.tenantName,w=t.params.PVCName,M=(0,o.useState)([]),N=(0,a.Z)(M,2),P=N[0],R=N[1];return(0,o.useEffect)((function(){y&&v.Z.invoke("GET","/api/v1/namespaces/".concat(C,"/tenants/").concat(S,"/pvcs/").concat(w,"/events")).then((function(e){for(var n=0;n<e.length;n++){var t=Date.now()/1e3|0;e[n].seen=(0,m.v1)((t-e[n].last_seen).toString())}R(e),k(!1)})).catch((function(e){f((0,j.Ih)(e)),k(!1)}))}),[y,w,C,S,f]),(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)(l.ZP,{item:!0,xs:12,children:(0,g.jsxs)("h1",{className:n.sectionTitle,children:[(0,g.jsx)(Z.rU,{to:"/namespaces/".concat(C,"/tenants/").concat(S,"/volumes"),className:n.breadcrumLink,children:"PVCs"})," ","> ",w]})}),(0,g.jsxs)(l.ZP,{container:!0,children:[(0,g.jsx)(l.ZP,{item:!0,xs:12,children:(0,g.jsxs)(u.Z,{value:i,onChange:function(e,n){c(n)},indicatorColor:"primary",textColor:"primary","aria-label":"cluster-tabs",variant:"scrollable",scrollButtons:"auto",children:[(0,g.jsx)(d.Z,{label:"Events",id:"simple-tab-0"}),(0,g.jsx)(d.Z,{label:"Describe",id:"simple-tab-1"})]})}),0===i&&(0,g.jsxs)(o.Fragment,{children:[(0,g.jsx)("h1",{className:n.sectionTitle,children:"Events"}),(0,g.jsx)(p.Z,{events:P,loading:y})]}),1===i&&(0,g.jsx)(T,{tenant:S,namespace:C,pvcName:w,propLoading:y})]})]})}))},85172:function(e,n,t){var a=t(95318);n.Z=void 0;var r=a(t(45649)),o=t(80184),s=(0,r.default)((0,o.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown");n.Z=s},95678:function(e,n,t){var a=t(95318);n.Z=void 0;var r=a(t(45649)),o=t(80184),s=(0,r.default)((0,o.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");n.Z=s},53767:function(e,n,t){var a=t(4942),r=t(63366),o=t(87462),s=t(72791),i=t(51184),c=t(45682),l=t(78519),u=t(82466),d=t(47630),Z=t(93736),v=t(80184),m=["component","direction","spacing","divider","children"];function p(e,n){var t=s.Children.toArray(e).filter(Boolean);return t.reduce((function(e,a,r){return e.push(a),r<t.length-1&&e.push(s.cloneElement(n,{key:"separator-".concat(r)})),e}),[])}var x=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,r=(0,o.Z)({display:"flex"},(0,i.k9)({theme:t},(0,i.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var s=(0,c.hB)(t),l=Object.keys(t.breakpoints.values).reduce((function(e,t){return null==n.spacing[t]&&null==n.direction[t]||(e[t]=!0),e}),{}),d=(0,i.P$)({values:n.direction,base:l}),Z=(0,i.P$)({values:n.spacing,base:l});r=(0,u.Z)(r,(0,i.k9)({theme:t},Z,(function(e,t){return{"& > :not(style) + :not(style)":(0,a.Z)({margin:0},"margin".concat((r=t?d[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,c.NA)(s,e))};var r})))}return r})),f=s.forwardRef((function(e,n){var t=(0,Z.Z)({props:e,name:"MuiStack"}),a=(0,l.Z)(t),s=a.component,i=void 0===s?"div":s,c=a.direction,u=void 0===c?"column":c,d=a.spacing,f=void 0===d?0:d,h=a.divider,j=a.children,b=(0,r.Z)(a,m),g={direction:u,spacing:f};return(0,v.jsx)(x,(0,o.Z)({as:i,ownerState:g,ref:n},b,{children:h?p(j,h):j}))}));n.Z=f},39281:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),r=t(63366),o=t(72791),s=t(28182),i=t(90767),c=t(93736),l=t(47630),u=t(95159);function d(e){return(0,u.Z)("MuiTableContainer",e)}(0,t(30208).Z)("MuiTableContainer",["root"]);var Z=t(80184),v=["className","component"],m=(0,l.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,n){return n.root}})({width:"100%",overflowX:"auto"}),p=o.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiTableContainer"}),o=t.className,l=t.component,u=void 0===l?"div":l,p=(0,r.Z)(t,v),x=(0,a.Z)({},t,{component:u}),f=function(e){var n=e.classes;return(0,i.Z)({root:["root"]},d,n)}(x);return(0,Z.jsx)(m,(0,a.Z)({ref:n,as:u,className:(0,s.Z)(f.root,o),ownerState:x},p))}))},56890:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(87462),r=t(63366),o=t(72791),s=t(28182),i=t(90767),c=t(829),l=t(93736),u=t(47630),d=t(95159);function Z(e){return(0,d.Z)("MuiTableHead",e)}(0,t(30208).Z)("MuiTableHead",["root"]);var v=t(80184),m=["className","component"],p=(0,u.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,n){return n.root}})({display:"table-header-group"}),x={variant:"head"},f="thead",h=o.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiTableHead"}),o=t.className,u=t.component,d=void 0===u?f:u,h=(0,r.Z)(t,m),j=(0,a.Z)({},t,{component:d}),b=function(e){var n=e.classes;return(0,i.Z)({root:["root"]},Z,n)}(j);return(0,v.jsx)(c.Z.Provider,{value:x,children:(0,v.jsx)(p,(0,a.Z)({as:d,className:(0,s.Z)(b.root,o),ref:n,role:d===f?null:"rowgroup",ownerState:j},h))})}))}}]);
//# sourceMappingURL=9942.90927b18.chunk.js.map