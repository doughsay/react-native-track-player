"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5684],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2e3:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),s=["components"],a={sidebar_position:3},l="Sleeptimers",p={unversionedId:"guides/sleeptimers",id:"version-4.0/guides/sleeptimers",title:"Sleeptimers",description:"This guide has very similar principles and implementation to",source:"@site/versioned_docs/version-4.0/guides/sleeptimers.md",sourceDirName:"guides",slug:"/guides/sleeptimers",permalink:"/docs/4.0/guides/sleeptimers",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-4.0/guides/sleeptimers.md",tags:[],version:"4.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"app",previous:{title:"Saving Progress",permalink:"/docs/4.0/guides/saving-progress"},next:{title:"Multitrack Progress",permalink:"/docs/4.0/guides/multitrack-progress"}},c={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sleeptimers"},"Sleeptimers"),(0,o.kt)("p",null,"This guide has very similar principles and implementation to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/4.0/guides/saving-progress"},"Saving Progress"),'. First please read through that guide\nto understand the concept of "remote" playback and why coupling playback events\nto the UI is a bad idea.'),(0,o.kt)("p",null,"Once you've understood that concept, this concept is nearly identical. You would\nleverage the same ",(0,o.kt)("inlineCode",{parentName:"p"},"Event.PlaybackProgressUpdated")," event in this scenario too."),(0,o.kt)("p",null,"Here's how you would use an event to implement a sleep timer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The user configures a sleep timer in the UI."),(0,o.kt)("li",{parentName:"ol"},"Persist the time they configure in a store as a timestamp."),(0,o.kt)("li",{parentName:"ol"},"Each time the progress event fires you check your persisted sleep timer timestamp.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"IF ",(0,o.kt)("inlineCode",{parentName:"li"},"sleeptime !== null && sleeptime <= now")," THEN pause.")))))}d.isMDXComponent=!0}}]);