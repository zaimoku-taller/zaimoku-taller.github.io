import{r as f,R as u}from"./index.CSLRt44l.js";var y={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=f,_=Symbol.for("react.element"),P=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,N=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function b(e,t,r){var n,i={},a=null,c=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)E.call(t,n)&&!S.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:_,type:e,key:a,ref:c,props:i,_owner:N.current}}p.Fragment=P;p.jsx=b;p.jsxs=b;y.exports=p;var s=y.exports,g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=u.createContext&&u.createContext(g),C=["attr","size","title"];function k(e,t){if(e==null)return{};var r=z(e,t),n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function z(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(n){R(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function R(e,t,r){return t=D(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){var t=I(e,"string");return typeof t=="symbol"?t:String(t)}function I(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function h(e){return e&&e.map((t,r)=>u.createElement(t.tag,m({key:r},t.attr),h(t.child)))}function L(e){return t=>u.createElement(T,d({attr:m({},e.attr)},t),h(e.child))}function T(e){var t=r=>{var{attr:n,size:i,title:a}=e,c=k(e,C),o=i||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),u.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,c,{className:l,style:m(m({color:e.color||r.color},r.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),a&&u.createElement("title",null,a),e.children)};return v!==void 0?u.createElement(v.Consumer,null,r=>t(r)):t(g)}function H(e){return L({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"},child:[]}]})(e)}function B(){const e={title:"zaimoku taller",btns:[{text:"inicio",ruta:"/"},{text:"productos",ruta:"/productos"}]},[t,r]=f.useState(!1),[n,i]=f.useState(""),a=()=>{const l=document.querySelector("title")?.text.toLowerCase(),O=e.btns.filter(j=>l?.includes(j.text));i(O[0]?.text)};function c(o){const l=document.querySelector("header");l&&!l.contains(o.target)&&r(!1)}return f.useEffect(()=>(a(),document.addEventListener("click",c),()=>{document.removeEventListener("click",c)}),[]),s.jsxs("nav",{className:"flex flex-col md:flex-row justify-between md:items-center gap-2 transition",children:[s.jsxs("div",{className:"flex justify-between items-center gap-2",children:[s.jsx("span",{className:"capitalize",children:e.title}),s.jsx("button",{onClick:o=>{o.preventDefault(),r(!t)},className:"text-xl md:hidden hover:scale-125 transition hover:text-orange-500",children:s.jsx(H,{})})]}),s.jsx("div",{className:`${t?"":"hidden"} md:block`,children:s.jsx("div",{className:"flex flex-col md:flex-row justify-between md:items-center gap-2 gap-x-5",children:e.btns.map(({text:o,ruta:l})=>s.jsx("a",{className:`w-max rounded-full capitalize hover:scale-125 hover:text-orange-500 transition ${n===o?"text-orange-500 scale-125 translate-x-1 md:translate-x-0":null}`,onClick:()=>i(o),href:l,children:o},o))})})]})}export{B as default};