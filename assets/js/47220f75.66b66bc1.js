"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6529],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return s}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=d(a),s=i,y=u["".concat(p,".").concat(s)]||u[s]||m[s]||r;return a?n.createElement(y,l(l({ref:e},c),{},{components:a})):n.createElement(y,l({ref:e},c))}));function s(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7778:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={sidebar_position:2},p="Capability",d={unversionedId:"api/constants/capability",id:"version-2.1/api/constants/capability",title:"Capability",description:"All Capability types are made available through the named export Capability:",source:"@site/versioned_docs/version-2.1/api/constants/capability.md",sourceDirName:"api/constants",slug:"/api/constants/capability",permalink:"/docs/2.1/api/constants/capability",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-2.1/api/constants/capability.md",tags:[],version:"2.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"app",previous:{title:"State",permalink:"/docs/2.1/api/constants/state"},next:{title:"Rating",permalink:"/docs/2.1/api/constants/rating"}},c={},m=[],u={toc:m};function s(t){var e=t.components,a=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"capability"},"Capability"),(0,r.kt)("p",null,"All Capability types are made available through the named export ",(0,r.kt)("inlineCode",{parentName:"p"},"Capability"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Capability } from 'react-native-track-player';\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Play")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to play")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PlayFromId")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to play from a track id (Required for Android Auto)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PlayFromSearch")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to play from a text/voice search (Required for Android Auto)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Pause")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to pause")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stop")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to stop (on iOS available only for tracks where ",(0,r.kt)("inlineCode",{parentName:"td"},".isLiveStream")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SeekTo")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to seek to a position in the timeline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Skip")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to skip to any song in the queue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SkipToNext")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to skip to the next track")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SkipToPrevious")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to skip to the previous track")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SetRating")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to set the rating value based on the rating type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JumpForward")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to jump forward by the amount of seconds specified in the options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"JumpBackward")),(0,r.kt)("td",{parentName:"tr",align:null},"Capability indicating the ability to jump backward by the amount of seconds specified in the options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Like")),(0,r.kt)("td",{parentName:"tr",align:null},"(ios-only) Capability indicating the ability to like from control center")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dislike")),(0,r.kt)("td",{parentName:"tr",align:null},"(ios-only) Capability indicating the ability to dislike from control center")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bookmark")),(0,r.kt)("td",{parentName:"tr",align:null},"(ios-only) Capability indicating the ability to bookmark from control center")))))}s.isMDXComponent=!0}}]);