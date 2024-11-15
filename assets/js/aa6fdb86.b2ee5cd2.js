"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7553],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,k=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8784:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},c="Background Mode",p={unversionedId:"basics/background-mode",id:"version-4.1/basics/background-mode",title:"Background Mode",description:"React Native Track Player supports playing audio while your app is in the",source:"@site/versioned_docs/version-4.1/basics/background-mode.md",sourceDirName:"basics",slug:"/basics/background-mode",permalink:"/docs/basics/background-mode",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-4.1/basics/background-mode.md",tags:[],version:"4.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"app",previous:{title:"Playback Service",permalink:"/docs/basics/playback-service"},next:{title:"Platform Support",permalink:"/docs/basics/platform-support"}},u={},s=[{value:"Android",id:"android",level:2},{value:"Notification",id:"notification",level:3},{value:"iOS",id:"ios",level:2},{value:"iOS Simulator",id:"ios-simulator",level:3}],d={toc:s};function b(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"background-mode"},"Background Mode"),(0,a.kt)("p",null,"React Native Track Player supports playing audio while your app is in the\nbackground on all supported platforms."),(0,a.kt)("h2",{id:"android"},"Android"),(0,a.kt)("p",null,"Background audio playback works right out of the box. By default, the audio will\ncontinue to play, not only when the app is suspended in the background, but also\nafter the app is closed by the user. If that is not the desired behavior, you\ncan disable it with the ",(0,a.kt)("inlineCode",{parentName:"p"},"android.appKilledPlaybackBehavior")," property in\n",(0,a.kt)("inlineCode",{parentName:"p"},"updateOptions"),"."),(0,a.kt)("p",null,"In this case, the audio will still play while the app is open in the background.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"TrackPlayer.updateOptions({\n    android: {\n        // This is the default behavior\n        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback\n    },\n    ...\n});\n")),(0,a.kt)("p",null,"Please look at the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/constants/app-killed-playback-behavior"},(0,a.kt)("inlineCode",{parentName:"a"},"AppKilledPlaybackBehavior")),"\ndocumentation for all the possible settings and how they behave."),(0,a.kt)("p",null,"Please note that while your app is in background, your UI might be unmounted by\nReact Native. Event listeners added in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/basics/playback-service"},"playback service"),"\nwill continue to receive events."),(0,a.kt)("h3",{id:"notification"},"Notification"),(0,a.kt)("p",null,"The notification will only be visible if the following are true:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AppKilledPlaybackBehavior.ContinuePlayback")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"AppKilledPlaybackBehavior.PausePlayback")," are selected."),(0,a.kt)("li",{parentName:"ul"},"Android has not killed the playback service due to no memory, crash, or other issue.")),(0,a.kt)("p",null,"Your app will be opened when the notification is tapped. You can implement a\ncustom initialization (e.g.: opening directly the player UI) by using the\n",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/linking"},"Linking API")," looking for the\n",(0,a.kt)("inlineCode",{parentName:"p"},"trackplayer://notification.click")," URI."),(0,a.kt)("h2",{id:"ios"},"iOS"),(0,a.kt)("p",null,"To allow background audio playback on iOS, you need to activate the 'Audio,\nAirplay and Picture in Picture' background mode in Xcode. Without activating it,\nthe audio will only play when the app is in the foreground."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://developer.apple.com/library/content/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Art/background_modes_2x.png",alt:"Xcode Background Capability"})),(0,a.kt)("h3",{id:"ios-simulator"},"iOS Simulator"),(0,a.kt)("p",null,"As of iOS Simulator version 11, Apple has removed support for Control Center and\nNow Playing Info from the simulator. You will not be able to test lock screen\ncontrols on recent versions of iOS Simulator. You can either test on real\ndevices, or download older versions of the iOS Simulator."))}b.isMDXComponent=!0}}]);