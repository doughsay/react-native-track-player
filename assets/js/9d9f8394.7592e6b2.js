"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9360],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return r?o.createElement(m,a(a({ref:t},d),{},{components:r})):o.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9222:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:10},l="Troubleshooting",c={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"iOS: (Enable Swift) library not found for -lswiftCoreAudio for architecture x86_64",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/next/troubleshooting",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"app",previous:{title:"Migrating from v3.2 to v4",permalink:"/docs/next/v4-migration"}},d={},p=[{value:"iOS: (Enable Swift) <code>library not found for -lswiftCoreAudio for architecture x86_64</code>",id:"ios-enable-swift-library-not-found-for--lswiftcoreaudio-for-architecture-x86_64",level:2},{value:"Android: <code>CIRCULAR REFERENCE:com.android.tools.r8.ApiLevelException: Default interface methods are only supported starting with Android N (--min-api 24)</code>",id:"android-circular-referencecomandroidtoolsr8apilevelexception-default-interface-methods-are-only-supported-starting-with-android-n---min-api-24",level:2},{value:"Android: <code>com.facebook.react.common.JavascriptException: No task registered for key TrackPlayer</code>",id:"android-comfacebookreactcommonjavascriptexception-no-task-registered-for-key-trackplayer",level:2},{value:"Android: <code>Error: Attribute XXX from [androidx.core:core:XXX] is also present at [com.android.support:support-compat:XXX]</code>",id:"android-error-attribute-xxx-from-androidxcorecorexxx-is-also-present-at-comandroidsupportsupport-compatxxx",level:2},{value:"Android: Cleartext HTTP traffic not permitted",id:"android-cleartext-http-traffic-not-permitted",level:2},{value:"Web: Issues with HLS Streams",id:"web-issues-with-hls-streams",level:2}],u={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h2",{id:"ios-enable-swift-library-not-found-for--lswiftcoreaudio-for-architecture-x86_64"},"iOS: (Enable Swift) ",(0,i.kt)("inlineCode",{parentName:"h2"},"library not found for -lswiftCoreAudio for architecture x86_64")),(0,i.kt)("p",null,"Because the iOS module uses Swift, if the user is using a standard react-native application they'll need to add support for Swift in the project. This can easily be done by adding a swift file to the Xcode project -- could be called ",(0,i.kt)("inlineCode",{parentName:"p"},"dummy.swift")," and saying yes when prompted if you'd like to generate a bridging header."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/CBqBcWs.png",alt:"Importing Swift"})),(0,i.kt)("h2",{id:"android-circular-referencecomandroidtoolsr8apilevelexception-default-interface-methods-are-only-supported-starting-with-android-n---min-api-24"},"Android: ",(0,i.kt)("inlineCode",{parentName:"h2"},"CIRCULAR REFERENCE:com.android.tools.r8.ApiLevelException: Default interface methods are only supported starting with Android N (--min-api 24)")),(0,i.kt)("p",null,"Since version 1.0.0, we began using a few Java 8 features in the project to reduce the code size."),(0,i.kt)("p",null,"To fix the issue, add the following options to your ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"android {\n    ...\n+   compileOptions {\n+       sourceCompatibility JavaVersion.VERSION_1_8\n+       targetCompatibility JavaVersion.VERSION_1_8\n+   }\n    ...\n}\n")),(0,i.kt)("h2",{id:"android-comfacebookreactcommonjavascriptexception-no-task-registered-for-key-trackplayer"},"Android: ",(0,i.kt)("inlineCode",{parentName:"h2"},"com.facebook.react.common.JavascriptException: No task registered for key TrackPlayer")),(0,i.kt)("p",null,"The playback service requires a headless task to be registered. You have to register it with ",(0,i.kt)("inlineCode",{parentName:"p"},"registerPlaybackService"),"."),(0,i.kt)("h2",{id:"android-error-attribute-xxx-from-androidxcorecorexxx-is-also-present-at-comandroidsupportsupport-compatxxx"},"Android: ",(0,i.kt)("inlineCode",{parentName:"h2"},"Error: Attribute XXX from [androidx.core:core:XXX] is also present at [com.android.support:support-compat:XXX]")),(0,i.kt)("p",null,"This error occurs when you're mixing both AndroidX and the Support Library in the same project."),(0,i.kt)("p",null,"You have to either upgrade everything to AndroidX or downgrade everything to the support library."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For react-native-track-player, the last version to run the support library is ",(0,i.kt)("strong",{parentName:"li"},"1.1.4")," and the first version to run AndroidX is ",(0,i.kt)("strong",{parentName:"li"},"1.2.0"),"."),(0,i.kt)("li",{parentName:"ul"},"For react-native, the last version to run the support library is ",(0,i.kt)("strong",{parentName:"li"},"0.59")," and the first version to run AndroidX is ",(0,i.kt)("strong",{parentName:"li"},"0.60"),".")),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikehardy/jetifier#usage-for-source-files"},"jetifier")," to convert all of the native code to use only one of them."),(0,i.kt)("h2",{id:"android-cleartext-http-traffic-not-permitted"},"Android: Cleartext HTTP traffic not permitted"),(0,i.kt)("p",null,"Since API 28, Android disables traffic without TLS. To fix the issue you have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"https")," or ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/50834600"},"enable clear text traffic"),"."),(0,i.kt)("h2",{id:"web-issues-with-hls-streams"},"Web: Issues with HLS Streams"),(0,i.kt)("p",null,"If your HLS content uses MPEG2-TS, you may need to enable transmuxing. The\nonly browsers capable of playing TS natively are Edge and Chromecast. You will\nget a ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTENT_UNSUPPORTED_BY_BROWSER")," error on other browsers due to their lack\nof TS support."),(0,i.kt)("p",null,"You can enable transmuxing by including ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mux.js"},"mux.js"),"\nv5.6.3+ in your application. Once installed mux.js will be auto-detected and\nwill be used use to transmux TS content into MP4 on-the-fly, so that the content\ncan be played by the browser."),(0,i.kt)("p",null,"NOTE: there are some limitations to ",(0,i.kt)("inlineCode",{parentName:"p"},"mux.js")," so not all possible content codec's\nare supported."))}f.isMDXComponent=!0}}]);