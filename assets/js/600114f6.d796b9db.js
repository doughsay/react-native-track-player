"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4818],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1502:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:6},s="Migrating from v2 to v3",p={unversionedId:"v3-migration",id:"version-4.1/v3-migration",title:"Migrating from v2 to v3",description:"Due to how Android handles foreground services, it's not possible for us to stop the process manually, as it's waiting for the foreground service to come back. With v3 we are introducing the following changes related to this:",source:"@site/versioned_docs/version-4.1/v3-migration.md",sourceDirName:".",slug:"/v3-migration",permalink:"/docs/v3-migration",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-4.1/v3-migration.md",tags:[],version:"4.1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"app",previous:{title:"Migrating from v1 to v2",permalink:"/docs/v2-migration"},next:{title:"Migrating from v3.1.0 to v3.2.0",permalink:"/docs/v3.1.0-migration"}},d={},c=[{value:"API Changes",id:"api-changes",level:2},{value:"<code>stopWithApp</code> is now <code>android.appKilledPlaybackBehavior</code>",id:"stopwithapp-is-now-androidappkilledplaybackbehavior",level:3},{value:"<code>destroy</code> and <code>stop</code> have been removed",id:"destroy-and-stop-have-been-removed",level:3},{value:"Configuration Changes",id:"configuration-changes",level:2},{value:"<code>track-player.json</code> / Build Preferences no longer needed",id:"track-playerjson--build-preferences-no-longer-needed",level:3},{value:"Minimum Compile/Target SDK",id:"minimum-compiletarget-sdk",level:3}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrating-from-v2-to-v3"},"Migrating from v2 to v3"),(0,a.kt)("p",null,"Due to how Android handles foreground services, it's not possible for us to stop the process manually, as it's waiting for the foreground service to come back. With v3 we are introducing the following changes related to this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On Android, the audio service can't be manually stopped by the app anymore.\nThe OS itself decides when to stop it."),(0,a.kt)("li",{parentName:"ul"},"An audio control notification will ",(0,a.kt)("em",{parentName:"li"},"always")," be present (depending on phone\nvendor, this would look and behave differently), which allows users to\nquickly go back to the app by tapping on it.")),(0,a.kt)("p",null,"The full changelog of added features and bug fixes ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/doublesymmetry/react-native-track-player/releases/tag/v3.0"},"can be found here"),"."),(0,a.kt)("p",null,"When migrating from v2 to v3, the following has changed:"),(0,a.kt)("h2",{id:"api-changes"},"API Changes"),(0,a.kt)("h3",{id:"stopwithapp-is-now-androidappkilledplaybackbehavior"},(0,a.kt)("inlineCode",{parentName:"h3"},"stopWithApp")," is now ",(0,a.kt)("inlineCode",{parentName:"h3"},"android.appKilledPlaybackBehavior")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// Methods\nawait TrackPlayer.updateOptions({\n-      stopWithApp: true,\n+      android: {\n+        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback\n+      }\n});\n")),(0,a.kt)("h3",{id:"destroy-and-stop-have-been-removed"},(0,a.kt)("inlineCode",{parentName:"h3"},"destroy")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"stop")," have been removed"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// remove all usages of `.destroy()` and `.stop()`\n-  TrackPlayer.destroy();\n-  TrackPlayer.stop();\n")),(0,a.kt)("h2",{id:"configuration-changes"},"Configuration Changes"),(0,a.kt)("h3",{id:"track-playerjson--build-preferences-no-longer-needed"},(0,a.kt)("inlineCode",{parentName:"h3"},"track-player.json")," / Build Preferences no longer needed"),(0,a.kt)("p",null,"HLS, Dash, & Smoothstreaming are now supported on Android out of the box. You\ncan remove your ",(0,a.kt)("inlineCode",{parentName:"p"},"track-player.json")," file if you have one. You still need to\nensure that ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/objects/track"},"the correct ",(0,a.kt)("inlineCode",{parentName:"a"},"type")," is specified on your ",(0,a.kt)("inlineCode",{parentName:"a"},"Track"),"\nobject"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- track-player.json\n")),(0,a.kt)("h3",{id:"minimum-compiletarget-sdk"},"Minimum Compile/Target SDK"),(0,a.kt)("p",null,"You also need to have a minimum compile & target SDK of 31 (Android 12)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"// android/build.gradle\n...\n    compileSdkVersion = 31\n    targetSdkVersion = 31\n...\n")))}m.isMDXComponent=!0}}]);