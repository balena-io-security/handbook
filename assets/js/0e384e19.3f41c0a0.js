"use strict";(self.webpackChunkbalena_io_security=self.webpackChunkbalena_io_security||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1,slug:"/"},o="Balena Security",s={unversionedId:"intro",id:"intro",title:"Balena Security",description:"Mission Statement",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/balenaltd/security/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Contributing",permalink:"/contributing"}},l={},c=[{value:"Mission Statement",id:"mission-statement",level:3},{value:"Quick links",id:"quick-links",level:5},{value:"What is this repo ?",id:"what-is-this-repo-",level:2},{value:"How do we work ?",id:"how-do-we-work-",level:2},{value:"Security X.0 Saga",id:"security-x0-saga",level:3},{value:"Security Next Saga",id:"security-next-saga",level:3},{value:"Jellyfish Idioms",id:"jellyfish-idioms",level:2},{value:"Commitment Adjustment Policy",id:"commitment-adjustment-policy",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"balena-security"},"Balena Security"),(0,i.kt)("h3",{id:"mission-statement"},"Mission Statement"),(0,i.kt)("p",null,"Identify Balena's security scope to reliably assess, anticipate, and treat its risks with auditable documentation and artifacts."),(0,i.kt)("h5",{id:"quick-links"},"Quick links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Topics: ",(0,i.kt)("a",{parentName:"li",href:"https://jel.ly.fish/view-user-created-view-6bcdc14f-3435-4601-a74a-fb5f835270b5-security-brainstorm-topics"},"Security Brainstorm Topics")),(0,i.kt)("li",{parentName:"ul"},"Current Saga: ",(0,i.kt)("a",{parentName:"li",href:"https://jel.ly.fish/saga-security-1-0-a6ed6c9"},"Security 1.0")),(0,i.kt)("li",{parentName:"ul"},"Backlog: ",(0,i.kt)("a",{parentName:"li",href:"https://jel.ly.fish/saga-security-next-32ef32c"},"Security Next"))),(0,i.kt)("h2",{id:"what-is-this-repo-"},"What is this repo ?"),(0,i.kt)("p",null,"This repository serves as a place for storing and revising artifacts we produced as a result of improvements/topics in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/product-os/jellyfish"},"Jellyfish"),"."),(0,i.kt)("p",null,"By having reports, risks, and policy documented in this repository, we can easily collaborate on document files, share tooling and review changes with a distributed team."),(0,i.kt)("h2",{id:"how-do-we-work-"},"How do we work ?"),(0,i.kt)("p",null,"The team works by maintaining 2 road maps in the form of ",(0,i.kt)("strong",{parentName:"p"},"Sagas"),". These sagas contain ",(0,i.kt)("strong",{parentName:"p"},"Improvements")," we have decided to work on."),(0,i.kt)("h3",{id:"security-x0-saga"},"Security X.0 Saga"),(0,i.kt)("p",null,"This is the current roadmap being worked on. The ",(0,i.kt)("inlineCode",{parentName:"p"},"X.0")," will be replaced by the current revision being worked on, for example; Security 1.0 defines the first road map."),(0,i.kt)("p",null,"Improvements from the ",(0,i.kt)("em",{parentName:"p"},"Security Next Saga")," can be moved into the current saga at any time but must follow the ",(0,i.kt)("a",{parentName:"p",href:"#commitment-adjustment-policy"},"Commitment Adjustment Policy")," that ensures we are meeting goals."),(0,i.kt)("h3",{id:"security-next-saga"},"Security Next Saga"),(0,i.kt)("p",null,"This roadmap contains Improvements we think should be worked on eventually but not right away."),(0,i.kt)("h2",{id:"jellyfish-idioms"},"Jellyfish Idioms"),(0,i.kt)("p",null,"Please reference the ",(0,i.kt)("a",{parentName:"p",href:"/contributing"},"Contributing Page")," to understand how Jellyfish works. These rules are not specific to our team but we want to standardize how we use the platform."),(0,i.kt)("h2",{id:"commitment-adjustment-policy"},"Commitment Adjustment Policy"),(0,i.kt)("p",null,"WIP ...how do we decided to add something to our roadmap after deciding on the current roster ?"))}p.isMDXComponent=!0}}]);