"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2664],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:e},c),{},{components:n})):a.createElement(g,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9613:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:3},p="Rating",s={unversionedId:"api/constants/rating",id:"version-4.0/api/constants/rating",title:"Rating",description:"All RatingType types are made available through the named export RatingType:",source:"@site/versioned_docs/version-4.0/api/constants/rating.md",sourceDirName:"api/constants",slug:"/api/constants/rating",permalink:"/docs/4.0/api/constants/rating",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-4.0/api/constants/rating.md",tags:[],version:"4.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"app",previous:{title:"Capability",permalink:"/docs/4.0/api/constants/capability"},next:{title:"Repeat Mode",permalink:"/docs/4.0/api/constants/repeat-mode"}},c={},u=[],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rating"},"Rating"),(0,i.kt)("p",null,"All RatingType types are made available through the named export ",(0,i.kt)("inlineCode",{parentName:"p"},"RatingType"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { RatingType } from 'react-native-track-player';\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Heart")),(0,i.kt)("td",{parentName:"tr",align:null},'Rating type indicating "with heart" or "without heart", its value is a ',(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ThumbsUpDown")),(0,i.kt)("td",{parentName:"tr",align:null},'Rating type indicating "thumbs up" or "thumbs down", its value is a ',(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ThreeStars")),(0,i.kt)("td",{parentName:"tr",align:null},"Rating type indicating 0 to 3 stars, its value is a ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," of stars.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FourStars")),(0,i.kt)("td",{parentName:"tr",align:null},"Rating type indicating 0 to 4 stars, its value is a ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," of stars.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FiveStars")),(0,i.kt)("td",{parentName:"tr",align:null},"Rating type indicating 0 to 5 stars, its value is a ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," of stars.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Percentage")),(0,i.kt)("td",{parentName:"tr",align:null},"Rating type indicating percentage, its value is a ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),".")))))}m.isMDXComponent=!0}}]);