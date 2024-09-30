"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[7283],{60951:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(74848),t=s(28453);const r={},l="\u30a2\u30e9\u30fc\u30e0",c={id:"signals/alarms",title:"\u30a2\u30e9\u30fc\u30e0",description:"\u30a2\u30e9\u30fc\u30e0\u3068\u306f\u3001\u30d7\u30ed\u30fc\u30d6\u3001\u30e2\u30cb\u30bf\u30fc\u3001\u307e\u305f\u306f\u7279\u5b9a\u306e\u3057\u304d\u3044\u5024\u3092\u8d85\u3048\u305f\u308a\u4e0b\u56de\u3063\u305f\u308a\u3059\u308b\u5024\u306e\u5909\u5316\u306e\u72b6\u614b\u3092\u6307\u3057\u307e\u3059\u3002\u7c21\u5358\u306a\u4f8b\u3068\u3057\u3066\u306f\u3001\u30c7\u30a3\u30b9\u30af\u304c\u3044\u3063\u3071\u3044\u306b\u306a\u3063\u305f\u3068\u304d\u3084 Web \u30b5\u30a4\u30c8\u304c\u30c0\u30a6\u30f3\u3057\u305f\u3068\u304d\u306b\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u30a2\u30e9\u30fc\u30e0\u304c\u3042\u308a\u307e\u3059\u3002\u3088\u308a\u9ad8\u5ea6\u306a\u30a2\u30e9\u30fc\u30e0\u306f\u5b8c\u5168\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u99c6\u52d5\u3055\u308c\u3066\u304a\u308a\u3001\u30aa\u30fc\u30c8\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3084\u30b5\u30fc\u30d0\u30fc\u30af\u30e9\u30b9\u30bf\u306e\u4f5c\u6210\u306a\u3069\u306e\u8907\u96d1\u306a\u76f8\u4e92\u4f5c\u7528\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/signals/alarms.md",sourceDirName:"signals",slug:"/signals/alarms",permalink:"/ja/docs/signals/alarms",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/signals/alarms.md",tags:[],version:"current",frontMatter:{},sidebar:"sigals",previous:{title:"\u30c8\u30ec\u30fc\u30b9",permalink:"/ja/docs/signals/traces"},next:{title:"\u30a4\u30d9\u30f3\u30c8",permalink:"/ja/docs/signals/events"}},a={},o=[{value:"\u30a2\u30af\u30b7\u30e7\u30f3\u53ef\u80fd\u306a\u3082\u306e\u306b\u5bfe\u3057\u3066\u30a2\u30e9\u30fc\u30c8\u3092\u8a2d\u5b9a\u3059\u308b",id:"\u30a2\u30af\u30b7\u30e7\u30f3\u53ef\u80fd\u306a\u3082\u306e\u306b\u5bfe\u3057\u3066\u30a2\u30e9\u30fc\u30c8\u3092\u8a2d\u5b9a\u3059\u308b",level:2},{value:"\u300c\u3059\u3079\u3066OK\u30a2\u30e9\u30fc\u30e0\u300d\u306b\u6ce8\u610f",id:"\u3059\u3079\u3066ok\u30a2\u30e9\u30fc\u30e0\u306b\u6ce8\u610f",level:2},{value:"\u96c6\u7d04\u306b\u3088\u308b\u30a2\u30e9\u30fc\u30e0\u75b2\u52b4\u306e\u7de9\u548c",id:"\u96c6\u7d04\u306b\u3088\u308b\u30a2\u30e9\u30fc\u30e0\u75b2\u52b4\u306e\u7de9\u548c",level:2},{value:"\u65e2\u5b58\u306e ITSM \u3068\u30b5\u30dd\u30fc\u30c8\u30d7\u30ed\u30bb\u30b9\u3092\u5229\u7528\u3059\u308b",id:"\u65e2\u5b58\u306e-itsm-\u3068\u30b5\u30dd\u30fc\u30c8\u30d7\u30ed\u30bb\u30b9\u3092\u5229\u7528\u3059\u308b",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u30a2\u30e9\u30fc\u30e0",children:"\u30a2\u30e9\u30fc\u30e0"}),"\n",(0,i.jsx)(n.p,{children:"\u30a2\u30e9\u30fc\u30e0\u3068\u306f\u3001\u30d7\u30ed\u30fc\u30d6\u3001\u30e2\u30cb\u30bf\u30fc\u3001\u307e\u305f\u306f\u7279\u5b9a\u306e\u3057\u304d\u3044\u5024\u3092\u8d85\u3048\u305f\u308a\u4e0b\u56de\u3063\u305f\u308a\u3059\u308b\u5024\u306e\u5909\u5316\u306e\u72b6\u614b\u3092\u6307\u3057\u307e\u3059\u3002\u7c21\u5358\u306a\u4f8b\u3068\u3057\u3066\u306f\u3001\u30c7\u30a3\u30b9\u30af\u304c\u3044\u3063\u3071\u3044\u306b\u306a\u3063\u305f\u3068\u304d\u3084 Web \u30b5\u30a4\u30c8\u304c\u30c0\u30a6\u30f3\u3057\u305f\u3068\u304d\u306b\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3059\u308b\u30a2\u30e9\u30fc\u30e0\u304c\u3042\u308a\u307e\u3059\u3002\u3088\u308a\u9ad8\u5ea6\u306a\u30a2\u30e9\u30fc\u30e0\u306f\u5b8c\u5168\u306b\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u99c6\u52d5\u3055\u308c\u3066\u304a\u308a\u3001\u30aa\u30fc\u30c8\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u3084\u30b5\u30fc\u30d0\u30fc\u30af\u30e9\u30b9\u30bf\u306e\u4f5c\u6210\u306a\u3069\u306e\u8907\u96d1\u306a\u76f8\u4e92\u4f5c\u7528\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u305f\u3060\u3057\u3001\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u95a2\u4fc2\u306a\u304f\u3001\u30a2\u30e9\u30fc\u30e0\u306f\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u73fe\u5728\u306e",(0,i.jsx)(n.em,{children:"\u72b6\u614b"}),"\u3092\u793a\u3057\u307e\u3059\u3002\u3053\u306e\u72b6\u614b\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u306b\u3088\u3063\u3066 ",(0,i.jsx)(n.code,{children:"OK"}),"\u3001",(0,i.jsx)(n.code,{children:"WARNING"}),"\u3001",(0,i.jsx)(n.code,{children:"ALERT"}),"\u3001",(0,i.jsx)(n.code,{children:"NO DATA"})," \u306e\u3044\u305a\u308c\u304b\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30a2\u30e9\u30fc\u30e0\u306f\u3042\u308b\u671f\u9593\u3053\u306e\u72b6\u614b\u3092\u53cd\u6620\u3057\u3001\u6642\u7cfb\u5217\u306e\u4e0a\u306b\u69cb\u7bc9\u3055\u308c\u307e\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u305d\u308c\u3089\u306f\u6642\u7cfb\u5217",(0,i.jsx)(n.em,{children:"\u304b\u3089"}),"\u5c0e\u51fa\u3055\u308c\u307e\u3059\u3002\u4e0b\u306e\u30b0\u30e9\u30d5\u306f\u30012\u3064\u306e\u30a2\u30e9\u30fc\u30e0\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u30021\u3064\u306f\u8b66\u544a\u3057\u304d\u3044\u5024\u306e\u30a2\u30e9\u30fc\u30e0\u3067\u3001\u3082\u30461\u3064\u306f\u3053\u306e\u6642\u7cfb\u5217\u5168\u4f53\u306e\u5e73\u5747\u5024\u3092\u793a\u3059\u30a2\u30e9\u30fc\u30e0\u3067\u3059\u3002\u3053\u306e\u30b0\u30e9\u30d5\u304c\u793a\u3059\u901a\u308a\u3001\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u91cf\u304c\u5b9a\u7fa9\u3055\u308c\u305f\u5024\u3092\u4e0b\u56de\u308b\u3068\u3001\u8b66\u544a\u3057\u304d\u3044\u5024\u306e\u30a2\u30e9\u30fc\u30e0\u304c\u9055\u53cd\u72b6\u614b\u306b\u306a\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"!\u6642\u7cfb\u5217\u3068 2 \u3064\u306e\u30a2\u30e9\u30fc\u30e0"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u30a2\u30e9\u30fc\u30e0\u306e\u76ee\u7684\u306f\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u3053\u3068(\u4eba\u9593\u307e\u305f\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3088\u308b)\u3001\u307e\u305f\u306f\u60c5\u5831\u63d0\u4f9b(\u3057\u304d\u3044\u5024\u306e\u9055\u53cd)\u306e\u3044\u305a\u308c\u304b\u3067\u3059\u3002\u30a2\u30e9\u30fc\u30e0\u306f\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306b\u95a2\u3059\u308b\u6d1e\u5bdf\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30a2\u30af\u30b7\u30e7\u30f3\u53ef\u80fd\u306a\u3082\u306e\u306b\u5bfe\u3057\u3066\u30a2\u30e9\u30fc\u30c8\u3092\u8a2d\u5b9a\u3059\u308b",children:"\u30a2\u30af\u30b7\u30e7\u30f3\u53ef\u80fd\u306a\u3082\u306e\u306b\u5bfe\u3057\u3066\u30a2\u30e9\u30fc\u30c8\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u30a2\u30e9\u30fc\u30e0\u75b2\u52b4\u3068\u306f\u3001\u4eba\u3005\u304c\u591a\u3059\u304e\u308b\u30a2\u30e9\u30fc\u30c8\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u3067\u3001\u305d\u308c\u3089\u3092\u7121\u8996\u3059\u308b\u3053\u3068\u3092\u5b66\u7fd2\u3057\u3066\u3057\u307e\u3046\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306f\u3001\u9069\u5207\u306b\u76e3\u8996\u3055\u308c\u3066\u3044\u308b\u30b7\u30b9\u30c6\u30e0\u306e\u5146\u5019\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u3080\u3057\u308d\u3001\u3053\u306e\u3088\u3046\u306a\u3053\u3068\u306f\u53cd\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u30a2\u30af\u30b7\u30e7\u30f3\u53ef\u80fd\u306a\u3082\u306e\u306b\u5bfe\u3057\u3066\u30a2\u30e9\u30fc\u30e0\u3092\u4f5c\u6210\u3057\u3001\u5e38\u306b \u76ee\u7684 \u304b\u3089\u9006\u7b97\u3057\u3066\u8003\u3048\u308b\u3079\u304d\u3067\u3059\u3002"}),(0,i.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001\u9ad8\u901f\u306a\u30ec\u30b9\u30dd\u30f3\u30b9\u30bf\u30a4\u30e0\u304c\u5fc5\u8981\u306a Web \u30b5\u30a4\u30c8\u3092\u904b\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30ec\u30b9\u30dd\u30f3\u30b9\u30bf\u30a4\u30e0\u304c\u7279\u5b9a\u306e\u3057\u304d\u3044\u5024\u3092\u8d85\u3048\u305f\u3068\u304d\u306b\u30a2\u30e9\u30fc\u30c8\u304c\u914d\u4fe1\u3055\u308c\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u4f4e\u4e0b\u304c\u9ad8\u3044 CPU \u4f7f\u7528\u7387\u3068\u95a2\u9023\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u7279\u5b9a\u3057\u305f\u5834\u5408\u306f\u3001\u3053\u306e\u30c7\u30fc\u30bf\u30dd\u30a4\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u554f\u984c\u304c\u767a\u751f\u3059\u308b",(0,i.jsx)(n.em,{children:"\u524d\u306b"})," \u4e88\u9632\u7684\u306b\u30a2\u30e9\u30fc\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u74b0\u5883\u5185\u306e",(0,i.jsx)(n.em,{children:"\u3059\u3079\u3066\u306e"})," CPU \u4f7f\u7528\u7387\u306b\u30a2\u30e9\u30fc\u30c8\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u306a\u3044\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u304c",(0,i.jsx)(n.em,{children:"\u76ee\u7684\u9054\u6210\u3092\u5371\u967a\u306b\u3055\u3089\u3055\u306a\u3044"}),"\u5834\u5408\u3067\u3059\u3002"]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u30a2\u30e9\u30fc\u30e0\u304c\u30a2\u30e9\u30fc\u30c8\u3092\u5fc5\u8981\u3068\u305b\u305a\u3001\u81ea\u52d5\u30d7\u30ed\u30bb\u30b9\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u306a\u3044\u5834\u5408\u3001\u30a2\u30e9\u30fc\u30c8\u3092\u53d7\u3051\u53d6\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u4e0d\u8981\u306a\u30a2\u30e9\u30fc\u30e0\u304b\u3089\u901a\u77e5\u3092\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u3059\u3079\u3066ok\u30a2\u30e9\u30fc\u30e0\u306b\u6ce8\u610f",children:"\u300c\u3059\u3079\u3066OK\u30a2\u30e9\u30fc\u30e0\u300d\u306b\u6ce8\u610f"}),"\n",(0,i.jsx)(n.p,{children:"\u540c\u69d8\u306b\u3001\u4e00\u822c\u7684\u306a\u30d1\u30bf\u30fc\u30f3\u3068\u3057\u3066\u3001\u30aa\u30da\u30ec\u30fc\u30bf\u30fc\u304c\u7d76\u3048\u9593\u306a\u3044\u30a2\u30e9\u30fc\u30c8\u306b\u6163\u308c\u3066\u3057\u307e\u3044\u3001\u7a81\u7136\u9759\u304b\u306b\u306a\u3063\u305f\u3068\u304d\u3060\u3051\u6c17\u3065\u304f\u300c\u3059\u3079\u3066OK\u30a2\u30e9\u30fc\u30e0\u300d\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u975e\u5e38\u306b\u5371\u967a\u306a\u904b\u7528\u30e2\u30fc\u30c9\u3067\u3042\u308a\u3001 \u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30a8\u30af\u30bb\u30ec\u30f3\u30b9 \u306b\u53cd\u3059\u308b\u30d1\u30bf\u30fc\u30f3\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["\u300c\u3059\u3079\u3066OK\u30a2\u30e9\u30fc\u30e0\u300d\u306f\u901a\u5e38\u3001\u4eba\u9593\u306b\u3088\u308b\u89e3\u91c8\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u30bb\u30eb\u30d5\u30d2\u30fc\u30ea\u30f3\u30b0\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306a\u3069\u306e\u30d1\u30bf\u30fc\u30f3\u304c\u4e0d\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]})}),"\n",(0,i.jsx)(n.h2,{id:"\u96c6\u7d04\u306b\u3088\u308b\u30a2\u30e9\u30fc\u30e0\u75b2\u52b4\u306e\u7de9\u548c",children:"\u96c6\u7d04\u306b\u3088\u308b\u30a2\u30e9\u30fc\u30e0\u75b2\u52b4\u306e\u7de9\u548c"}),"\n",(0,i.jsxs)(n.p,{children:["\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306f\u6280\u8853\u7684\u306a\u554f\u984c\u3067\u306f\u306a\u304f\u3001",(0,i.jsx)(n.em,{children:"\u4eba\u9593"}),"\u306e\u554f\u984c\u3067\u3059\u3002\u305d\u306e\u305f\u3081\u3001\u30a2\u30e9\u30fc\u30e0\u6226\u7565\u306f\u65b0\u305f\u306a\u30a2\u30e9\u30fc\u30e0\u306e\u4f5c\u6210\u3088\u308a\u3082\u30a2\u30e9\u30fc\u30e0\u306e\u524a\u6e1b\u306b\u7126\u70b9\u3092\u5f53\u3066\u308b\u3079\u304d\u3067\u3059\u3002\u30c6\u30ec\u30e1\u30c8\u30ea\u53ce\u96c6\u3092\u5b9f\u88c5\u3059\u308b\u306b\u3064\u308c\u3066\u3001\u74b0\u5883\u304b\u3089\u306e\u30a2\u30e9\u30fc\u30c8\u304c\u81ea\u7136\u306b\u5897\u3048\u3066\u3044\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30a2\u30af\u30b7\u30e7\u30f3\u53ef\u80fd\u306a\u3082\u306e\u3060\u3051\u3092\u30a2\u30e9\u30fc\u30c8\u306e\u5bfe\u8c61\u3068\u3059\u308b \u3053\u3068\u306b\u306f\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002\u30a2\u30e9\u30fc\u30c8\u306e\u539f\u56e0\u3068\u306a\u3063\u305f\u6761\u4ef6\u304c\u30a2\u30af\u30b7\u30e7\u30f3\u53ef\u80fd\u3067\u306a\u3044\u5834\u5408\u3001\u305d\u308c\u3092\u5831\u544a\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u308c\u306f\u6b21\u306e\u4f8b\u3067\u6700\u3082\u3088\u304f\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u306b\u5358\u4e00\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f7f\u7528\u3059\u308b 5 \u3064\u306e Web \u30b5\u30fc\u30d0\u30fc\u304c\u3042\u308b\u5834\u5408\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304c\u30c0\u30a6\u30f3\u3057\u305f\u3068\u304d\u306b Web \u30b5\u30fc\u30d0\u30fc\u306b\u4f55\u304c\u8d77\u3053\u308b\u3067\u3057\u3087\u3046\u304b? \u591a\u304f\u306e\u4eba\u306e\u7b54\u3048\u306f\u3001\u5c11\u306a\u304f\u3068\u3082 ",(0,i.jsx)(n.em,{children:"6 \u3064\u306e"})," \u30a2\u30e9\u30fc\u30c8\u304c\u767a\u751f\u3059\u308b\u3068\u3044\u3046\u3082\u306e\u3067\u3059 - \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e ",(0,i.jsx)(n.em,{children:"1 \u3064"})," \u3068 Web \u30b5\u30fc\u30d0\u30fc\u306e ",(0,i.jsx)(n.em,{children:"5 \u3064"})," \u306e\u30a2\u30e9\u30fc\u30c8\u3067\u3059!"]}),"\n",(0,i.jsx)(n.p,{children:"!6 \u3064\u306e\u30a2\u30e9\u30fc\u30e0"}),"\n",(0,i.jsx)(n.p,{children:"\u3057\u304b\u3057\u3001\u914d\u4fe1\u3059\u308b\u610f\u5473\u306e\u3042\u308b\u30a2\u30e9\u30fc\u30c8\u306f 2 \u3064\u3060\u3051\u3067\u3059:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Web \u30b5\u30a4\u30c8\u304c\u30c0\u30a6\u30f3\u3057\u3066\u3044\u308b"}),"\n",(0,i.jsx)(n.li,{children:"\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304c\u539f\u56e0\u3067\u3042\u308b"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"!2 \u3064\u306e\u30a2\u30e9\u30fc\u30e0"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u30a2\u30e9\u30fc\u30c8\u3092\u96c6\u7d04\u3059\u308b\u3053\u3068\u3067\u3001\u4eba\u3005\u304c\u7406\u89e3\u3057\u3084\u3059\u304f\u306a\u308a\u3001\u5b9f\u884c\u624b\u9806\u66f8\u3084\u81ea\u52d5\u5316\u306e\u4f5c\u6210\u304c\u5bb9\u6613\u306b\u306a\u308a\u307e\u3059\u3002"})}),"\n",(0,i.jsx)(n.h2,{id:"\u65e2\u5b58\u306e-itsm-\u3068\u30b5\u30dd\u30fc\u30c8\u30d7\u30ed\u30bb\u30b9\u3092\u5229\u7528\u3059\u308b",children:"\u65e2\u5b58\u306e ITSM \u3068\u30b5\u30dd\u30fc\u30c8\u30d7\u30ed\u30bb\u30b9\u3092\u5229\u7528\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3068\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u95a2\u4fc2\u306a\u304f\u3001\u305d\u308c\u3089\u306f\u73fe\u5728\u306e\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3\u3068\u7d71\u5408\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"\u30a2\u30e9\u30fc\u30c8\u304b\u3089\u3053\u308c\u3089\u306e\u30c4\u30fc\u30eb\u3078\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3088\u308b\u7d71\u5408\u3092\u4f7f\u7528\u3057\u3066\u3001\u30c8\u30e9\u30d6\u30eb\u30c1\u30b1\u30c3\u30c8\u3068\u30a4\u30b7\u30e5\u30fc\u3092\u4f5c\u6210\u3057\u3001\u4eba\u70ba\u7684\u306a\u4f5c\u696d\u3092\u524a\u6e1b\u3057\u3001\u30d7\u30ed\u30bb\u30b9\u3092\u5408\u7406\u5316\u3057\u307e\u3059\u3002"})}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u308c\u306b\u3088\u308a\u3001",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/DevOps",children:"DORA \u30e1\u30c8\u30ea\u30af\u30b9"}),"\u306a\u3069\u306e\u91cd\u8981\u306a\u904b\u7528\u30c7\u30fc\u30bf\u3092\u5c0e\u51fa\u3067\u304d\u307e\u3059\u3002"]}),"\n","\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30d1\u30bf\u30fc\u30f3\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001 ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/blogs/apn/building-self-healing-infrastructure-as-code-with-dynatrace-aws-lambda-and-aws-service-catalog/",children:"https://aws.amazon.com/blogs/apn/building-self-healing-infrastructure-as-code-with-dynatrace-aws-lambda-and-aws-service-catalog/"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(96540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);