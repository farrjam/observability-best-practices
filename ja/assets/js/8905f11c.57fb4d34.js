"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[4308],{4112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453);const r={},c="\u30c6\u30ec\u30e1\u30c8\u30ea",l={id:"recipes/telemetry",title:"\u30c6\u30ec\u30e1\u30c8\u30ea",description:"\u30c6\u30ec\u30e1\u30c8\u30ea\u306f\u3001\u81ea\u8eab\u306e\u30a2\u30d7\u30ea\u3084\u30a4\u30f3\u30d5\u30e9\u306a\u3069\u3001\u69d8\u3005\u306a\u30bd\u30fc\u30b9\u304b\u3089\u30b7\u30b0\u30ca\u30eb\u3092\u53ce\u96c6\u3057\u3001\u305d\u308c\u3089\u3092\u4f7f\u7528\u3059\u308b\u5834\u6240\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/telemetry.md",sourceDirName:"recipes",slug:"/recipes/telemetry",permalink:"/ja/docs/recipes/telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/recipes/telemetry.md",tags:[],version:"current",frontMatter:{},sidebar:"recipes",previous:{title:"\u30c7\u30a3\u30e1\u30f3\u30b7\u30e7\u30f3",permalink:"/ja/docs/recipes/dimensions"},next:{title:"AWS App Runner",permalink:"/ja/docs/recipes/apprunner"}},o={},d=[{value:"\u30bd\u30fc\u30b9",id:"\u30bd\u30fc\u30b9",level:2},{value:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",level:2},{value:"\u30c7\u30b9\u30c6\u30a3\u30cd\u30fc\u30b7\u30e7\u30f3",id:"\u30c7\u30b9\u30c6\u30a3\u30cd\u30fc\u30b7\u30e7\u30f3",level:2}];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u30c6\u30ec\u30e1\u30c8\u30ea",children:"\u30c6\u30ec\u30e1\u30c8\u30ea"}),"\n",(0,i.jsx)(n.p,{children:"\u30c6\u30ec\u30e1\u30c8\u30ea\u306f\u3001\u81ea\u8eab\u306e\u30a2\u30d7\u30ea\u3084\u30a4\u30f3\u30d5\u30e9\u306a\u3069\u3001\u69d8\u3005\u306a\u30bd\u30fc\u30b9\u304b\u3089\u30b7\u30b0\u30ca\u30eb\u3092\u53ce\u96c6\u3057\u3001\u305d\u308c\u3089\u3092\u4f7f\u7528\u3059\u308b\u5834\u6240\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u30c6\u30ec\u30e1\u30c8\u30ea\u306e\u6982\u5ff5",src:t(7991).A+"",width:"2000",height:"1111"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["\u5404\u7a2e\u30c6\u30ec\u30e1\u30c8\u30ea\u306e\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"../signals/logs",children:"\u30c7\u30fc\u30bf\u30bf\u30a4\u30d7"}),"\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u4e0a\u8a18\u306e\u56f3\u3067\u7d39\u4ecb\u3057\u305f\u6982\u5ff5\u306b\u3064\u3044\u3066\u3055\u3089\u306b\u6398\u308a\u4e0b\u3052\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"}),(0,i.jsx)(n.h2,{id:"\u30bd\u30fc\u30b9",children:"\u30bd\u30fc\u30b9"}),(0,i.jsx)(n.p,{children:"\u30bd\u30fc\u30b9\u3068\u306f\u3001\u30b7\u30b0\u30ca\u30eb\u304c\u767a\u751f\u3059\u308b\u3082\u306e\u3067\u3059\u3002\u30bd\u30fc\u30b9\u306b\u306f\u6b21\u306e2\u3064\u306e\u30bf\u30a4\u30d7\u304c\u3042\u308a\u307e\u3059\u3002"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u4e0b\u306b\u3042\u308b\u3082\u306e\u3002\u3064\u307e\u308a\u3001\u30a4\u30f3\u30b9\u30c4\u30eb\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u3092\u4ecb\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3067\u3059\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u76f4\u63a5\u7684\u306a\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u4e0b\u306b\u306a\u3044\u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9\u306a\u3069\u3001\u4f7f\u7528\u53ef\u80fd\u306a\u305d\u306e\u4ed6\u306e\u3082\u306e\u3059\u3079\u3066\u3067\u3059\u3002\n\u3053\u306e\u30bf\u30a4\u30d7\u306e\u30bd\u30fc\u30b9\u306f\u901a\u5e38 AWS \u304c\u63d0\u4f9b\u3059\u308b\u3082\u306e\u3067\u3001API \u3092\u4ecb\u3057\u3066\u30b7\u30b0\u30ca\u30eb\u3092\u516c\u958b\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),(0,i.jsx)(n.h2,{id:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8",children:"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8"}),(0,i.jsx)(n.p,{children:"\u30bd\u30fc\u30b9\u304b\u3089\u30c7\u30b9\u30c6\u30a3\u30cd\u30fc\u30b7\u30e7\u30f3\u3078\u30b7\u30b0\u30ca\u30eb\u3092\u8ee2\u9001\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u547c\u3070\u308c\u308b\u4e2d\u9593\u7684\u306a\u3082\u306e\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u3089\u306e\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306f\u3001\u30bd\u30fc\u30b9\u304b\u3089\u30b7\u30b0\u30ca\u30eb\u3092\u53d7\u4fe1\u307e\u305f\u306f\u30d7\u30eb\u3057\u3001\u901a\u5e38\u306f\u69cb\u6210\u3092\u4ecb\u3057\u3066\u3001\u30b7\u30b0\u30ca\u30eb\u304c\u3069\u3053\u306b\u9001\u4fe1\u3055\u308c\u308b\u3079\u304d\u304b\u3092\u5224\u65ad\u3057\u3001\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u3068\u96c6\u7d04\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:'"\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8? \u30eb\u30fc\u30c6\u30a3\u30f3\u30b0? \u914d\u4fe1? \u30a4\u30f3\u30b8\u30a7\u30b9\u30c8?"\n\u30b7\u30b0\u30ca\u30eb\u3092\u30bd\u30fc\u30b9\u304b\u3089\u30c7\u30b9\u30c6\u30a3\u30cd\u30fc\u30b7\u30e7\u30f3\u306b\u79fb\u52d5\u3055\u305b\u308b\u30d7\u30ed\u30bb\u30b9\u3092\u53c2\u7167\u3059\u308b\u305f\u3081\u306b\u3001\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3001\u914d\u4fe1\u3001\u96c6\u7d04\u3001\u30a4\u30f3\u30b8\u30a7\u30b9\u30c8\u306a\u3069\u3001\u4eba\u3005\u304c\u4f7f\u7528\u3059\u308b\u591a\u304f\u306e\u7528\u8a9e\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u3089\u306f\u5c11\u3057\u7570\u306a\u308b\u610f\u5473\u3092\u6301\u3064\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306f\u4e92\u63db\u7684\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002\u6b63\u5f0f\u306b\u306f\u3001\u305d\u308c\u3089\u306e\u4e2d\u9593\u30c8\u30e9\u30f3\u30b9\u30dd\u30fc\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3068\u547c\u3076\u3053\u3068\u306b\u3057\u307e\u3059\u3002'})})]}),"\n",(0,i.jsx)(n.h2,{id:"\u30c7\u30b9\u30c6\u30a3\u30cd\u30fc\u30b7\u30e7\u30f3",children:"\u30c7\u30b9\u30c6\u30a3\u30cd\u30fc\u30b7\u30e7\u30f3"}),"\n",(0,i.jsx)(n.p,{children:"\u30b7\u30b0\u30ca\u30eb\u304c\u6700\u7d42\u7684\u306b\u305f\u3069\u308a\u7740\u304f\u5834\u6240\u3067\u3059\u3002\u5f8c\u3067\u6d88\u8cbb\u3059\u308b\u305f\u3081\u306b\u30b7\u30b0\u30ca\u30eb\u3092\u4fdd\u5b58\u3057\u305f\u3044\u5834\u5408\u3067\u3082\u3001\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u5316\u3057\u305f\u3044\u5834\u5408\u3067\u3082\u3001\u7279\u5b9a\u306e\u6761\u4ef6\u304c\u771f\u3067\u3042\u308b\u5834\u5408\u306b\u30a2\u30e9\u30fc\u30c8\u3092\u8a2d\u5b9a\u3057\u305f\u3044\u5834\u5408\u3067\u3082\u3001\u30b7\u30b0\u30ca\u30eb\u3092\u76f8\u95a2\u4ed8\u3051\u305f\u3044\u5834\u5408\u3067\u3082\u3001\u30a8\u30f3\u30c9\u30e6\u30fc\u30b6\u30fc\u3068\u3057\u3066\u5f79\u7acb\u3064\u3059\u3079\u3066\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30c7\u30b9\u30c6\u30a3\u30cd\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7991:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/telemetry-ff3da44984c202cfbd22c83e912b82ab.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);