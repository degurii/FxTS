"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8158],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7142:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={id:"drop"},c=void 0,l={unversionedId:"drop",id:"drop",isDocsHomePage:!1,title:"drop",description:"drop() function",source:"@site/docs/drop.md",sourceDirName:".",slug:"/drop",permalink:"/docs/drop",tags:[],version:"current",frontMatter:{id:"drop"},sidebar:"docs",previous:{title:"concurrent",permalink:"/docs/concurrent"},next:{title:"filter",permalink:"/docs/filter"}},u=[{value:"drop() function",id:"drop-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"drop-function"},"drop() function"),(0,a.kt)("p",null,"Returns all but the first ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," elements of the given iterable."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function drop<A>(length: number, iterable: Iterable<A>): IterableIterator<A>;\n\ndeclare function drop<A>(length: number, iterable: AsyncIterable<A>): AsyncIterableIterator<A>;\n\ndeclare function drop<A extends Iterable<unknown> | AsyncIterable<unknown>>(length: number): (iterable: A) => ReturnIterableIteratorType<A>;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const iter = drop(2, [1, 2, 3, 4]);\niter.next() // {done:false, value: 3}\niter.next() // {done:false, value: 4}\niter.next() // {done:true, value: undefined}\n\n// with pipe\npipe(\n [1, 2, 3, 4],\n drop(2),\n toArray,\n); // [3, 4]\n\nawait pipe(\n Promise.resolve([1, 2, 3, 4]),\n drop(2),\n toArray,\n); // [3, 4]\n\n// with toAsync\nawait pipe(\n [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)],\n toAsync,\n drop(2),\n toArray,\n); // [3, 4]\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/fxts-drop-2t0h0"},"Try It")),(0,a.kt)("p",null,"see ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/pipe"},"pipe"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toAsync"},"toAsync"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fxts.dev/docs/toArray"},"toArray")))}d.isMDXComponent=!0}}]);