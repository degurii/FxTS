"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7520],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9449:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={id:"function-composition"},l="Function Composition",c={unversionedId:"function-composition",id:"function-composition",isDocsHomePage:!1,title:"Function Composition",description:"We are going to introduce pipe.",source:"@site/docs/function-composition.md",sourceDirName:".",slug:"/function-composition",permalink:"/docs/function-composition",tags:[],version:"current",frontMatter:{id:"function-composition"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Lazy Evaluation",permalink:"/docs/lazy-evaluation"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"function-composition"},"Function Composition"),(0,a.kt)("p",null,"We are going to introduce ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),"."),(0,a.kt)("p",null,"A function named ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe")," is already provided by several libraries, so you may be familiar with it."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"flow in ",(0,a.kt)("a",{parentName:"li",href:"https://lodash.com/"},"lodash")),(0,a.kt)("li",{parentName:"ul"},"pipe in ",(0,a.kt)("a",{parentName:"li",href:"https://ramdajs.com/"},"ramda")),(0,a.kt)("li",{parentName:"ul"},"pipe in ",(0,a.kt)("a",{parentName:"li",href:"https://rxjs.dev/"},"rxjs"),".")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pipe")," is a function that connects functions by passing the output of a function to the arguments of another function.\nIn FxTS, ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe")," is used as a more important function."),(0,a.kt)("p",null,"Let's take a moment to see why we need ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe"),"."),(0,a.kt)("p",null,"There is an array, and you want to get the final result by doing ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"reduce")," on this array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const sum = (a: number, b: number) => a + b;\nconst arr = [1, 2, 3, 4, 5];\n// filter\n// map\n// reduce\n")),(0,a.kt)("p",null,"All of the code is pure functions, so it's easy to create a function composition, but it seems to be very difficult to read."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"reduce(\n  sum,\n  map(\n    (a) => a + 10,\n    filter((a) => a % 2 === 0, arr);\n  ),\n)\n")),(0,a.kt)("p",null,"We are providing ",(0,a.kt)("inlineCode",{parentName:"p"},"pipe")," to solve the above problem. Make the above code in human-readable order as shown below.\nCheck out ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/lazy-evaluation"},"this article")," for a comparison with ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.[Function]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { pipe, filter, map } from "@fxts/core";\n\npipe(\n  arr,\n  filter((a) => a % 2 === 0),\n  map((a) => a + 10),\n  reduce(sum),\n);\n')),(0,a.kt)("p",null,"Also, you don't have to deal with ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," values directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await pipe(\n  Promise.resolve(1),\n  (a /*: Awaited<number>*/) => a + 1,\n  async (b /*: Awaited<number>*/) => b + 1,\n  (c /*: Awaited<number>*/) => c + 1,\n); // 4\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a : ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," is inferred as number, and the actual value is also number, not ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise<number>"),"."),(0,a.kt)("li",{parentName:"ul"},"c : Even if the previous function is an asynchronous function, the argument is not c ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise<number>"),".")),(0,a.kt)("p",null,"If you're not dealing with async values directly, it doesn't mean that errors can not be handled when occur.\nTo check for error handling, see the ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/error-handling"},"Error Handling")))}m.isMDXComponent=!0}}]);