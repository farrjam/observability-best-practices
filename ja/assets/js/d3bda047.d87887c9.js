"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[4342],{4768:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=s(74848),r=s(28453);const o={},i="AWS Distro for OpenTelemetry(ADOT) - FAQ",c={id:"faq/adot",title:"AWS Distro for OpenTelemetry(ADOT) - FAQ",description:"1. AMP \u3078\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u53d6\u308a\u8fbc\u307f\u306b ADOT \u30b3\u30ec\u30af\u30bf\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u304b?",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/faq/adot.md",sourceDirName:"faq",slug:"/faq/adot",permalink:"/ja/docs/faq/adot",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/faq/adot.md",tags:[],version:"current",frontMatter:{},sidebar:"faq",previous:{title:"Amazon Managed Grafana - \u3088\u304f\u3042\u308b\u8cea\u554f",permalink:"/ja/docs/faq/amg"}},l={},a=[];function h(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"aws-distro-for-opentelemetryadot---faq",children:"AWS Distro for OpenTelemetry(ADOT) - FAQ"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"AMP \u3078\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u53d6\u308a\u8fbc\u307f\u306b ADOT \u30b3\u30ec\u30af\u30bf\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u304b?"}),"\n\u306f\u3044\u30012022\u5e745\u6708\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u30b5\u30dd\u30fc\u30c8\u306e\u672c\u756a\u30ea\u30ea\u30fc\u30b9\u3067\u3053\u306e\u6a5f\u80fd\u304c\u5c0e\u5165\u3055\u308c\u307e\u3057\u305f\u3002EC2 \u304b\u3089\u3001EKS \u30a2\u30c9\u30aa\u30f3\u3092\u4ecb\u3057\u3066\u3001ECS \u30b5\u30a4\u30c9\u30ab\u30fc\u7d71\u5408\u3092\u4ecb\u3057\u3066\u3001\u304a\u3088\u3073/\u307e\u305f\u306f Lambda \u30ec\u30a4\u30e4\u30fc\u3092\u4ecb\u3057\u3066 ADOT \u30b3\u30ec\u30af\u30bf\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADOT \u30b3\u30ec\u30af\u30bf\u3092\u4f7f\u7528\u3057\u3066\u30ed\u30b0\u3092\u53ce\u96c6\u3057\u3001Amazon CloudWatch \u307e\u305f\u306f Amazon OpenSearch \u306b\u53d6\u308a\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304b?"}),"\n\u307e\u3060\u3067\u304d\u307e\u305b\u3093\u304c\u3001OpenTelemetry \u3067\u30ed\u30b0\u3092\u4e0a\u6d41\u3067\u5b89\u5b9a\u5316\u3055\u305b\u308b\u4f5c\u696d\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002\u6642\u671f\u304c\u6765\u305f\u3089\u3001\u304a\u305d\u3089\u304f 2023 \u5e74\u5f8c\u534a\u307e\u305f\u306f 2024 \u5e74\u521d\u982d\u306b\u3001ADOT \u3067\u30ed\u30b0\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u4e88\u5b9a\u3067\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"https://github.com/aws-observability/aws-otel-community/issues/11",children:"\u30d1\u30d6\u30ea\u30c3\u30af\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u306e\u30a8\u30f3\u30c8\u30ea"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADOT \u30b3\u30ec\u30af\u30bf\u306e\u30ea\u30bd\u30fc\u30b9\u4f7f\u7528\u91cf\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u8a73\u7d30\u306f\u3069\u3053\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u304b?"}),"\n\u30b3\u30ec\u30af\u30bf\u306e\u30ea\u30ea\u30fc\u30b9\u3054\u3068\u306b\u66f4\u65b0\u3057\u3066\u3044\u308b",(0,t.jsx)(n.a,{href:"https://aws-observability.github.io/aws-otel-collector/benchmark/report",children:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u30ec\u30dd\u30fc\u30c8"}),"\u304c\u30aa\u30f3\u30e9\u30a4\u30f3\u3067\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADOT \u3092 Apache Kafka \u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u306f\u53ef\u80fd\u3067\u3059\u304b?"}),"\n\u306f\u3044\u3001Kafka \u30a8\u30af\u30b9\u30dd\u30fc\u30bf\u3068\u30ec\u30b7\u30fc\u30d0\u306e\u30b5\u30dd\u30fc\u30c8\u304c ADOT \u30b3\u30ec\u30af\u30bf v0.28.0 \u3067\u8ffd\u52a0\u3055\u308c\u307e\u3057\u305f\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"https://aws-otel.github.io/docs/components/kafka-receiver-exporter",children:"ADOT \u30b3\u30ec\u30af\u30bf\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADOT \u30b3\u30ec\u30af\u30bf\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002"}),"\nADOT \u30b3\u30ec\u30af\u30bf\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b YAML \u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u3066\u69cb\u6210\u3055\u308c\u307e\u3059\u3002 \u52a0\u3048\u3066\u3001S3 \u30d0\u30b1\u30c3\u30c8\u306a\u3069\u306e\u4ed6\u306e\u5834\u6240\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u69cb\u6210\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 ADOT \u30b3\u30ec\u30af\u30bf\u3092\u69cb\u6210\u3059\u308b\u305f\u3081\u306b\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30e1\u30ab\u30cb\u30ba\u30e0\u306f\u3001",(0,t.jsx)(n.a,{href:"https://aws-otel.github.io/docs/components/confmap-providers",children:"ADOT \u30b3\u30ec\u30af\u30bf\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3067\u8a73\u3057\u304f\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADOT \u30b3\u30ec\u30af\u30bf\u3067\u9ad8\u5ea6\u306a\u30b5\u30f3\u30d7\u30ea\u30f3\u30b0\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304b?"}),"\n\u73fe\u5728\u5b9f\u88c5\u4e2d\u3067\u3059\u3002\u516c\u958b ",(0,t.jsx)(n.a,{href:"https://github.com/aws-observability/aws-otel-collector/issues/1135",children:"\u30ed\u30fc\u30c9\u30de\u30c3\u30d7\u306e\u30a8\u30f3\u30c8\u30ea"})," \u3092\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3057\u3066\u6700\u65b0\u60c5\u5831\u3092\u53d6\u5f97\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADOT \u30b3\u30ec\u30af\u30bf\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u306e\u30d2\u30f3\u30c8\u3092\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n\u306f\u3044! \u30a2\u30c3\u30d7\u30b9\u30c8\u30ea\u30fc\u30e0\u306e OpenTelemetry \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e ",(0,t.jsx)(n.a,{href:"https://opentelemetry.io/docs/collector/scaling/",children:"\u30b3\u30ec\u30af\u30bf\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ADOT \u30b3\u30ec\u30af\u30bf\u306e\u30d5\u30ea\u30fc\u30c8\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u3069\u306e\u3088\u3046\u306b\u7ba1\u7406\u3067\u304d\u307e\u3059\u304b?"}),"\n\u3053\u308c\u306f\u73fe\u5728\u7a4d\u6975\u7684\u306b\u958b\u767a\u304c\u9032\u3081\u3089\u308c\u3066\u3044\u308b\u9818\u57df\u3067\u3042\u308a\u30012023\u5e74\u306b\u6210\u719f\u3059\u308b\u3068\u4e88\u60f3\u3055\u308c\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u30a2\u30c3\u30d7\u30b9\u30c8\u30ea\u30fc\u30e0\u306e OpenTelemetry \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e ",(0,t.jsx)(n.a,{href:"https://opentelemetry.io/docs/collector/management/",children:"\u7ba1\u7406"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u7279\u306b ",(0,t.jsx)(n.a,{href:"https://opentelemetry.io/docs/collector/management/#opamp",children:"Open Agent Management Protocol (OpAMP)"})," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"ADOT \u30b3\u30ec\u30af\u30bf\u306e\u6b63\u5e38\u6027\u3068\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u3069\u306e\u3088\u3046\u306b\u76e3\u8996\u3057\u3066\u3044\u307e\u3059\u304b?"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector/blob/main/docs/monitoring.md",children:"\u30b3\u30ec\u30af\u30bf\u306e\u76e3\u8996"})," - \u30dd\u30fc\u30c8 8080 \u3067\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u3092 Prometheus \u30ec\u30b7\u30fc\u30d0\u304c\u30b9\u30af\u30ec\u30a4\u30d7\u3067\u304d\u307e\u3059"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://prometheus.io/docs/guides/node-exporter/",children:"Node Exporter"})," \u3092\u4f7f\u7528\u3059\u308b - node exporter \u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u30b3\u30ec\u30af\u30bf\u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u30ce\u30fc\u30c9\u3001\u30dd\u30c3\u30c9\u3001\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 \u30b7\u30b9\u30c6\u30e0\u306b\u95a2\u3059\u308b\u3044\u304f\u3064\u304b\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u6b63\u5e38\u6027\u30e1\u30c8\u30ea\u30af\u30b9\u3082\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/kubernetes/kube-state-metrics",children:"Kube-state-metrics (KSM)"})," - KSM \u3082\u30b3\u30ec\u30af\u30bf\u306b\u95a2\u3059\u308b\u8208\u5473\u6df1\u3044\u30a4\u30d9\u30f3\u30c8\u3092\u751f\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector/pull/2918",children:["Prometheus ",(0,t.jsx)(n.code,{children:"up"})," \u30e1\u30c8\u30ea\u30af\u30b9"]})}),"\n",(0,t.jsxs)(n.li,{children:["\u306f\u3058\u3081\u306b\u4f7f\u7528\u3067\u304d\u308b\u30b7\u30f3\u30d7\u30eb\u306a Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9: ",(0,t.jsx)(n.a,{href:".",children:"https://grafana.com/grafana/dashboards/12553"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u88fd\u54c1 FAQ"})," - ",(0,t.jsx)(n.a,{href:".",children:"https://aws.amazon.com/otel/faqs/"})]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);