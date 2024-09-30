"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[9458],{85551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(74848),a=t(28453);const i={},c="\u30b7\u30f3\u30bb\u30c6\u30a3\u30c3\u30af\u30c6\u30b9\u30c8",r={id:"tools/synthetics",title:"\u30b7\u30f3\u30bb\u30c6\u30a3\u30c3\u30af\u30c6\u30b9\u30c8",description:"Amazon CloudWatch Synthetics \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u5b9f\u969b\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u3044\u306a\u304f\u3066\u3082\u3001\u304a\u5ba2\u69d8\u306e\u8996\u70b9\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u76e3\u8996\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tools/synthetics.md",sourceDirName:"tools",slug:"/tools/synthetics",permalink:"/ja/docs/tools/synthetics",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/tools/synthetics.md",tags:[],version:"current",frontMatter:{},sidebar:"tools",previous:{title:"\u30ea\u30a2\u30eb\u30e6\u30fc\u30b6\u30fc\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0",permalink:"/ja/docs/tools/rum"},next:{title:"\u30b5\u30fc\u30d3\u30b9\u30ec\u30d9\u30eb\u76ee\u6a19(SLO)",permalink:"/ja/docs/tools/slos"}},o={},l=[{value:"\u306f\u3058\u3081\u306b",id:"\u306f\u3058\u3081\u306b",level:2},{value:"\u5b8c\u5168\u30ab\u30d0\u30ec\u30c3\u30b8",id:"\u5b8c\u5168\u30ab\u30d0\u30ec\u30c3\u30b8",level:3},{value:"\u65b0\u3057\u3044 Canary \u306e\u8a18\u9332",id:"\u65b0\u3057\u3044-canary-\u306e\u8a18\u9332",level:3},{value:"\u96c6\u8a08\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u8868\u793a",id:"\u96c6\u8a08\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u8868\u793a",level:3},{value:"Canary \u306e\u69cb\u7bc9",id:"canary-\u306e\u69cb\u7bc9",level:2},{value:"\u30d6\u30eb\u30fc\u30d7\u30ea\u30f3\u30c8",id:"\u30d6\u30eb\u30fc\u30d7\u30ea\u30f3\u30c8",level:3},{value:"\u4fdd\u5b88\u6027",id:"\u4fdd\u5b88\u6027",level:3},{value:"\u6587\u5b57\u5217\u30b7\u30fc\u30af\u30ec\u30c3\u30c8",id:"\u6587\u5b57\u5217\u30b7\u30fc\u30af\u30ec\u30c3\u30c8",level:3},{value:"Canary \u306e\u5927\u898f\u6a21\u7ba1\u7406",id:"canary-\u306e\u5927\u898f\u6a21\u7ba1\u7406",level:2},{value:"\u58ca\u308c\u305f\u30ea\u30f3\u30af\u306e\u78ba\u8a8d",id:"\u58ca\u308c\u305f\u30ea\u30f3\u30af\u306e\u78ba\u8a8d",level:3},{value:"\u8907\u6570\u306e\u30cf\u30fc\u30c8\u30d3\u30fc\u30c8 URL",id:"\u8907\u6570\u306e\u30cf\u30fc\u30c8\u30d3\u30fc\u30c8-url",level:3},{value:"\u30b0\u30eb\u30fc\u30d7\u3067\u6574\u7406\u3059\u308b",id:"\u30b0\u30eb\u30fc\u30d7\u3067\u6574\u7406\u3059\u308b",level:3},{value:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30aa\u30d7\u30b7\u30e7\u30f3",id:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30aa\u30d7\u30b7\u30e7\u30f3",level:2},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u30b5\u30dd\u30fc\u30c8",id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u30b5\u30dd\u30fc\u30c8",level:3},{value:"\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb",id:"\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb",level:3},{value:"Selenium \u7528\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",id:"selenium-\u7528\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",level:3}];function h(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u30b7\u30f3\u30bb\u30c6\u30a3\u30c3\u30af\u30c6\u30b9\u30c8",children:"\u30b7\u30f3\u30bb\u30c6\u30a3\u30c3\u30af\u30c6\u30b9\u30c8"}),"\n",(0,s.jsx)(n.p,{children:"Amazon CloudWatch Synthetics \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u5b9f\u969b\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u3044\u306a\u304f\u3066\u3082\u3001\u304a\u5ba2\u69d8\u306e\u8996\u70b9\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u76e3\u8996\u3067\u304d\u307e\u3059\u3002\nAPI \u3068\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u7d99\u7d9a\u7684\u306b\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u304c\u306a\u3044\u5834\u5408\u3067\u3082\u767a\u751f\u3059\u308b\u9593\u6b20\u7684\u306a\u554f\u984c\u306e\u53ef\u8996\u5316\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Canary \u306f\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u69cb\u6210\u3055\u308c\u3066\u304a\u308a\u3001API \u3068\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092 24 \u6642\u9593 365 \u65e5\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306b\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\n\u5b9f\u969b\u306e\u30e6\u30fc\u30b6\u30fc\u3068\u540c\u3058\u30b3\u30fc\u30c9\u30d1\u30b9\u3068\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30eb\u30fc\u30c8\u306b\u5f93\u3044\u3001\u30ec\u30a4\u30c6\u30f3\u30b7\u3084\u30da\u30fc\u30b8\u30ed\u30fc\u30c9\u30a8\u30e9\u30fc\u3001\u58ca\u308c\u305f\u30ea\u30f3\u30af\u3084\u30c7\u30c3\u30c9\u30ea\u30f3\u30af\u3001\u58ca\u308c\u305f\u30e6\u30fc\u30b6\u30fc\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306a\u3069\u3001\u4e88\u671f\u3057\u306a\u3044\u52d5\u4f5c\u3092\u901a\u77e5\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"CloudWatch Synthetics architecture",src:t(69126).A+"",width:"1072",height:"462"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Synthetics Canary \u3092\u4f7f\u7528\u3057\u3066\u3001\u6240\u6709\u6a29\u307e\u305f\u306f\u30a2\u30af\u30bb\u30b9\u8a31\u53ef\u304c\u3042\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068 API \u306e\u307f\u3092\u76e3\u8996\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002Canary \u306e\u983b\u5ea6\u8a2d\u5b9a\u306b\u3088\u3063\u3066\u3001\u3053\u308c\u3089\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u304c\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u5897\u52a0\u3092\u7d4c\u9a13\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u306f\u3058\u3081\u306b",children:"\u306f\u3058\u3081\u306b"}),"\n",(0,s.jsx)(n.h3,{id:"\u5b8c\u5168\u30ab\u30d0\u30ec\u30c3\u30b8",children:"\u5b8c\u5168\u30ab\u30d0\u30ec\u30c3\u30b8"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u30c6\u30b9\u30c8\u6226\u7565\u3092\u7acb\u3066\u308b\u969b\u306f\u3001Amazon VPC \u5185\u306e\u30d1\u30d6\u30ea\u30c3\u30af\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/mt/monitor-your-private-endpoints-using-cloudwatch-synthetics/",children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u5185\u90e8\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8"}),"\u306e\u4e21\u65b9\u3092\u8003\u616e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u65b0\u3057\u3044-canary-\u306e\u8a18\u9332",children:"\u65b0\u3057\u3044 Canary \u306e\u8a18\u9332"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://chrome.google.com/webstore/detail/cloudwatch-synthetics-rec/bhdnlmmgiplmbcdmkkdfplenecpegfno",children:"CloudWatch Synthetics Recorder"})," Chrome \u30d6\u30e9\u30a6\u30b6\u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u8907\u96d1\u306a\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u304b\u3089\u30b9\u30af\u30e9\u30c3\u30c1\u3067\u65b0\u3057\u3044 Canary \u30c6\u30b9\u30c8\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u3059\u3070\u3084\u304f\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002\u8a18\u9332\u4e2d\u306b\u53d6\u3089\u308c\u305f\u30bf\u30a4\u30d7\u3068\u30af\u30ea\u30c3\u30af\u30a2\u30af\u30b7\u30e7\u30f3\u306f\u3001Canary \u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b Node.js \u30b9\u30af\u30ea\u30d7\u30c8\u306b\u5909\u63db\u3055\u308c\u307e\u3059\u3002CloudWatch Synthetics Recorder \u306e\u65e2\u77e5\u306e\u5236\u9650\u4e8b\u9805\u306f\u3001",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Recorder.html#CloudWatch_Synthetics_Canaries_Recorder-limitations",children:"\u3053\u306e\u30da\u30fc\u30b8"}),"\u3067\u6ce8\u8a18\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u96c6\u8a08\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u8868\u793a",children:"\u96c6\u8a08\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u8868\u793a"}),"\n",(0,s.jsx)(n.p,{children:"Canary \u30b9\u30af\u30ea\u30d7\u30c8\u306e\u30d5\u30ea\u30fc\u30c8\u304b\u3089\u53ce\u96c6\u3055\u308c\u305f\u96c6\u8a08\u30e1\u30c8\u30ea\u30af\u30b9\u306b\u3064\u3044\u3066\u3001\u3059\u3050\u306b\u5229\u7528\u3067\u304d\u308b\u30ec\u30dd\u30fc\u30c8\u3092\u6d3b\u7528\u3057\u307e\u3059\u3002CloudWatch \u81ea\u52d5\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"The CloudWatch Dashboard for Synthetics",src:t(8143).A+"",width:"1864",height:"895"})}),"\n",(0,s.jsx)(n.h2,{id:"canary-\u306e\u69cb\u7bc9",children:"Canary \u306e\u69cb\u7bc9"}),"\n",(0,s.jsx)(n.h3,{id:"\u30d6\u30eb\u30fc\u30d7\u30ea\u30f3\u30c8",children:"\u30d6\u30eb\u30fc\u30d7\u30ea\u30f3\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:["\u8907\u6570\u306e Canary \u30bf\u30a4\u30d7\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u30d7\u30ed\u30bb\u30b9\u3092\u7c21\u7565\u5316\u3059\u308b\u305f\u3081\u306b\u3001",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints.html",children:"Canary \u30d6\u30eb\u30fc\u30d7\u30ea\u30f3\u30c8"})," \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u30b7\u30f3\u30bb\u30c6\u30a3\u30c3\u30af Canary \u3092\u4f5c\u6210\u3059\u308b\u8907\u6570\u306e\u65b9\u6cd5",src:t(72884).A+"",width:"600",height:"412"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u30d6\u30eb\u30fc\u30d7\u30ea\u30f3\u30c8\u306f\u3001Canary \u306e\u8a18\u8ff0\u3092\u958b\u59cb\u3059\u308b\u305f\u3081\u306e\u4fbf\u5229\u306a\u65b9\u6cd5\u3067\u3042\u308a\u3001\u30b3\u30fc\u30c9\u306a\u3057\u3067\u30b7\u30f3\u30d7\u30eb\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3092\u30ab\u30d0\u30fc\u3067\u304d\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4fdd\u5b88\u6027",children:"\u4fdd\u5b88\u6027"}),"\n",(0,s.jsxs)(n.p,{children:["\u72ec\u81ea\u306e Canary \u3092\u4f5c\u6210\u3059\u308b\u3068\u3001\u305d\u308c\u3089\u306f ",(0,s.jsx)(n.em,{children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30d0\u30fc\u30b8\u30e7\u30f3"}),"\u306b\u7d50\u3073\u4ed8\u3051\u3089\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001Selenium \u3092\u4f7f\u7528\u3057\u305f\u7279\u5b9a\u30d0\u30fc\u30b8\u30e7\u30f3\u306e Python\u3001\u307e\u305f\u306f Puppeteer \u3092\u4f7f\u7528\u3057\u305f JavaScript \u306e\u3044\u305a\u308c\u304b\u306b\u306a\u308a\u307e\u3059\u3002\u73fe\u5728\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30e9\u30f3\u30bf\u30a4\u30e0\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u5ec3\u6b62\u4e88\u5b9a\u306e\u3082\u306e\u306e\u30ea\u30b9\u30c8\u306b\u3064\u3044\u3066\u306f\u3001[\u3053\u306e\u30da\u30fc\u30b8]\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Canary \u306e\u5b9f\u884c\u4e2d\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30c7\u30fc\u30bf\u3092\u5171\u6709\u3059\u308b\u305f\u3081\u306b\u3001",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/mt/using-environment-variables-with-amazon-cloudwatch-synthetics/",children:"\u74b0\u5883\u5909\u6570\u3092\u4f7f\u7528"}),"\u3059\u308b\u3053\u3068\u3067\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4fdd\u5b88\u6027\u3092\u5411\u4e0a\u3055\u305b\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"\u5229\u7528\u53ef\u80fd\u306a\u5834\u5408\u306f\u3001Canary \u3092\u6700\u65b0\u306e\u30e9\u30f3\u30bf\u30a4\u30e0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6587\u5b57\u5217\u30b7\u30fc\u30af\u30ec\u30c3\u30c8",children:"\u6587\u5b57\u5217\u30b7\u30fc\u30af\u30ec\u30c3\u30c8"}),"\n",(0,s.jsx)(n.p,{children:"Canary \u304b\u3089\u30b7\u30fc\u30af\u30ec\u30c3\u30c8(\u30ed\u30b0\u30a4\u30f3\u8cc7\u683c\u60c5\u5831\u306a\u3069)\u3092\u3001Canary \u3084\u305d\u306e\u74b0\u5883\u5909\u6570\u306e\u5916\u90e8\u306e\u30bb\u30ad\u30e5\u30a2\u306a\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u30d7\u30eb\u3059\u308b\u3088\u3046\u306b\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002AWS Lambda \u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u30b7\u30b9\u30c6\u30e0\u306a\u3089\u3001\u5b9f\u884c\u6642\u306b Canary \u306b\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092\u63d0\u4f9b\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u63a5\u7d9a\u8a73\u7d30\u3001API \u30ad\u30fc\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u8cc7\u683c\u60c5\u5831\u306a\u3069\u306e\u30b7\u30fc\u30af\u30ec\u30c3\u30c8\u3092 AWS Secrets Manager \u3092\u4f7f\u7528\u3057\u3066\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3067\u3001",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/mt/secure-monitoring-of-user-workflow-experience-using-amazon-cloudwatch-synthetics-and-aws-secrets-manager/",children:"\u30bb\u30f3\u30b7\u30c6\u30a3\u30d6\u306a\u30c7\u30fc\u30bf\u3092\u4fdd\u8b77"}),"\u3057\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"canary-\u306e\u5927\u898f\u6a21\u7ba1\u7406",children:"Canary \u306e\u5927\u898f\u6a21\u7ba1\u7406"}),"\n",(0,s.jsx)(n.h3,{id:"\u58ca\u308c\u305f\u30ea\u30f3\u30af\u306e\u78ba\u8a8d",children:"\u58ca\u308c\u305f\u30ea\u30f3\u30af\u306e\u78ba\u8a8d"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306b\u591a\u6570\u306e\u52d5\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u3068\u30ea\u30f3\u30af\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3001CloudWatch Synthetics \u3092\u4f7f\u7528\u3057\u3066\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3092\u30af\u30ed\u30fc\u30eb\u3057\u3001",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/mt/cloudwatch-synthetics-to-find-broken-links-on-your-website/",children:"\u58ca\u308c\u305f\u30ea\u30f3\u30af\u3092\u691c\u51fa"}),"\u3057\u3001\u5931\u6557\u306e\u7406\u7531\u3092\u7279\u5b9a\u3067\u304d\u307e\u3059\u3002\u6b21\u306b\u3001\u5931\u6557\u306e\u3057\u304d\u3044\u5024\u3092\u4f7f\u7528\u3057\u3066\u3001\u3057\u304d\u3044\u5024\u306e\u9055\u53cd\u304c\u767a\u751f\u3057\u305f\u3068\u304d\u306b\u30aa\u30d7\u30b7\u30e7\u30f3\u3067  \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u8907\u6570\u306e\u30cf\u30fc\u30c8\u30d3\u30fc\u30c8-url",children:"\u8907\u6570\u306e\u30cf\u30fc\u30c8\u30d3\u30fc\u30c8 URL"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u30c6\u30b9\u30c8\u3092\u7c21\u7565\u5316\u3057\u3001\u30b3\u30b9\u30c8\u3092\u6700\u9069\u5316\u3059\u308b\u306b\u306f\u3001\u5358\u4e00\u306e\u30cf\u30fc\u30c8\u30d3\u30fc\u30c8\u76e3\u8996 Canary \u30c6\u30b9\u30c8\u3067",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/mt/simplify-your-canary-by-batching-multiple-urls-in-amazon-cloudwatch-synthetics/",children:"\u8907\u6570\u306e URL \u3092\u30d0\u30c3\u30c1\u51e6\u7406"}),"\u3057\u307e\u3059\u3002\u305d\u3046\u3059\u308b\u3068\u3001Canary \u5b9f\u884c\u30ec\u30dd\u30fc\u30c8\u306e\u30b9\u30c6\u30c3\u30d7\u30b5\u30de\u30ea\u3067\u3001\u5404 URL \u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u3001\u671f\u9593\u3001\u95a2\u9023\u3059\u308b\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3001\u5931\u6557\u7406\u7531\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u30b0\u30eb\u30fc\u30d7\u3067\u6574\u7406\u3059\u308b",children:"\u30b0\u30eb\u30fc\u30d7\u3067\u6574\u7406\u3059\u308b"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Groups.html",children:"\u30b0\u30eb\u30fc\u30d7"}),"\u3067 Canary \u3092\u6574\u7406\u3057\u3001\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u3059\u308b\u3053\u3068\u3067\u3001\u96c6\u8a08\u30e1\u30c8\u30ea\u30af\u30b9\u3092\u8868\u793a\u3057\u305f\u308a\u3001\u969c\u5bb3\u3092\u3088\u308a\u7c21\u5358\u306b\u5206\u96e2\u304a\u3088\u3073\u30c9\u30ea\u30eb\u30c0\u30a6\u30f3\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Organize and track canaries in groups",src:t(10365).A+"",width:"1329",height:"670"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u30af\u30ed\u30b9\u30ea\u30fc\u30b8\u30e7\u30f3\u306e\u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u6210\u3059\u308b\u5834\u5408\u3001Canary \u306e",(0,s.jsx)(n.em,{children:"\u6b63\u78ba\u306a"}),"\u540d\u524d\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30aa\u30d7\u30b7\u30e7\u30f3",children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30aa\u30d7\u30b7\u30e7\u30f3"}),"\n",(0,s.jsx)(n.h3,{id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u30b5\u30dd\u30fc\u30c8",children:"\u30d0\u30fc\u30b8\u30e7\u30f3\u3068\u30b5\u30dd\u30fc\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:["CloudWatch Synthetics \u306f\u73fe\u5728\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306b Node.js \u3092\u4f7f\u7528\u3057\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306b ",(0,s.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer",children:"Puppeteer"})," \u3092\u4f7f\u7528\u3057\u305f\u30e9\u30f3\u30bf\u30a4\u30e0\u3068\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u306b Python \u3092\u4f7f\u7528\u3057\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306b ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/",children:"Selenium WebDriver"})," \u3092\u4f7f\u7528\u3057\u305f\u30e9\u30f3\u30bf\u30a4\u30e0\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Canary \u3067\u6700\u65b0\u306e\u30e9\u30f3\u30bf\u30a4\u30e0\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5e38\u306b\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001Synthetics \u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u6700\u65b0\u306e\u6a5f\u80fd\u3068\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u5229\u7528\u3067\u304d\u307e\u3059\u3002"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html#CloudWatch_Synthetics_Canaries_runtime_support",children:"\u5ec3\u6b62\u4e88\u5b9a\u306e\u30e9\u30f3\u30bf\u30a4\u30e0"})," \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b Canary \u304c\u3042\u308b\u5834\u5408\u3001CloudWatch Synthetics \u306f 60 \u65e5\u524d\u306b\u30e1\u30fc\u30eb\u3067\u901a\u77e5\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb",children:"\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Samples.html#CloudWatch_Synthetics_Canaries_Samples_nodejspup",children:"Node.js \u3068 Puppeteer"})," \u3068 ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Samples.html#CloudWatch_Synthetics_Canaries_Samples_pythonsel",children:"Python \u3068 Selenium"})," \u306e\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb\u304b\u3089\u59cb\u3081\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"selenium-\u7528\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",children:"Selenium \u7528\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/mt/create-canaries-in-python-and-selenium-using-amazon-cloudwatch-synthetics/",children:"Python \u3068 Selenium"})," \u3092\u4f7f\u7528\u3057\u3066\u30bc\u30ed\u304b\u3089 Canary \u3092\u4f5c\u6210\u3059\u308b\u304b\u3001\u6700\u5c0f\u9650\u306e\u5909\u66f4\u3067\u65e2\u5b58\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3066\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},69126:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/synthetics0-be6e0136b6cae6ed285548af1dea9841.png"},8143:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/synthetics1-3f31d5fe4dc4916acc1cf3bebb95520a.png"},72884:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/synthetics2-21e5a4ff70de14905215b3f21430e329.png"},10365:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/synthetics3-b655712484009862ac549f8e233f0e1c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(96540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);