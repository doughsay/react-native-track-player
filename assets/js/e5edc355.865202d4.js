"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9628],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4974:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:3},s="Playback Service",l={unversionedId:"basics/playback-service",id:"basics/playback-service",title:"Playback Service",description:"The playback service keeps running even when the app is in the background. It will start when the player is set up and will only stop when the player is destroyed. It is a good idea to put any code in there that needs to be directly tied to the player state. For example, if you want to be able to track what is being played for analytics purposes, the playback service would be the place to do so.",source:"@site/docs/basics/playback-service.md",sourceDirName:"basics",slug:"/basics/playback-service",permalink:"/docs/next/basics/playback-service",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/docs/basics/playback-service.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"app",previous:{title:"Getting Started",permalink:"/docs/next/basics/getting-started"},next:{title:"Background Mode",permalink:"/docs/next/basics/background-mode"}},p={},u=[{value:"Remote Events",id:"remote-events",level:2},{value:"Example",id:"example",level:2},{value:"Custom Media Controls Notification id &amp; name",id:"custom-media-controls-notification-id--name",level:2},{value:"Example",id:"example-1",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"playback-service"},"Playback Service"),(0,o.kt)("p",null,"The playback service keeps running even when the app is in the background. It will start when the player is set up and will only stop when the player is destroyed. It is a good idea to put any code in there that needs to be directly tied to the player state. For example, if you want to be able to track what is being played for analytics purposes, the playback service would be the place to do so."),(0,o.kt)("h2",{id:"remote-events"},"Remote Events"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/api/events#media-controls"},"Remote events")," are sent from places outside of our user interface that we can react to. For example if the user presses the pause media control in the IOS lockscreen / Android notification or from their Bluetooth headset, we want to have TrackPlayer pause the audio."),(0,o.kt)("p",null,"If you create a listener to a remote event like ",(0,o.kt)("inlineCode",{parentName:"p"},"Event.RemotePause")," in the context of a React component, there is a chance the UI will be unmounted automatically when the app is in the background, causing it to be missed. For this reason it is best to place remote listeners in the playback service, since it will keep running even when the app is in the background."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PlaybackService } from './src/services';\n\n// This needs to go right after you register the main component of your app\n// AppRegistry.registerComponent(...)\nTrackPlayer.registerPlaybackService(() => PlaybackService);\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// src/services/PlaybackService.ts\nimport { Event } from 'react-native-track-player';\n\nexport const PlaybackService = async function() {\n\n    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());\n\n    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());\n\n    // ...\n\n};\n")),(0,o.kt)("h2",{id:"custom-media-controls-notification-id--name"},"Custom Media Controls Notification id & name"),(0,o.kt)("p",null,"react-native-track-player is using media controls.\nAs a result, it creates a notification channel."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"More information read here: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/media/implement/surfaces/mobile"},"https://developer.android.com/media/implement/surfaces/mobile"))),(0,o.kt)("p",null,"To customize it, put the example below inside your project folder."),(0,o.kt)("h2",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- YOUR_PROJECT_DIR/android/app/src/main/res/values/strings.xml --\x3e\n<resources>\n    \x3c!-- rtnp channel id --\x3e\n    <string name="rntp_temporary_channel_id">temporary_channel</string>\n    \x3c!-- rtnp channel name --\x3e\n    <string name="rntp_temporary_channel_name">temporary_channel</string>\n    \x3c!-- playback_channel_name used by KotlinAudio in rntp --\x3e\n    <string name="playback_channel_name">Music Player</string>\n</resources>\n')))}m.isMDXComponent=!0}}]);