"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[5635],{85555:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var t=a(74848),s=a(28453);const o={},r="Amazon Managed Service for Prometheus",i={id:"guides/cost/cost-visualization/amazon-prometheus",title:"Amazon Managed Service for Prometheus",description:"Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u306e\u30d3\u30b8\u30e5\u30a2\u30eb\u306b\u3088\u308a\u3001\u500b\u3005\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3001AWS \u30ea\u30fc\u30b8\u30e7\u30f3\u3001\u7279\u5b9a\u306e Prometheus \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001RemoteWrite\u3001Query\u3001HourlyStorageMetering \u306a\u3069\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u30b3\u30b9\u30c8\u306e\u6d1e\u5bdf\u304c\u5f97\u3089\u308c\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/cost/cost-visualization/amazon-prometheus.md",sourceDirName:"guides/cost/cost-visualization",slug:"/guides/cost/cost-visualization/amazon-prometheus",permalink:"/ja/docs/guides/cost/cost-visualization/amazon-prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/guides/cost/cost-visualization/amazon-prometheus.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Amazon Managed Grafana",permalink:"/ja/docs/guides/cost/cost-visualization/amazon-grafana"},next:{title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30b3\u30b9\u30c8\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0",permalink:"/ja/docs/guides/cost/cost-visualization/AmazonManagedServiceforPrometheus"}},c={},m=[{value:"Amazon Managed Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210",id:"amazon-managed-grafana-\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"amazon-managed-service-for-prometheus",children:"Amazon Managed Service for Prometheus"}),"\n",(0,t.jsx)(n.p,{children:"Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u306e\u30d3\u30b8\u30e5\u30a2\u30eb\u306b\u3088\u308a\u3001\u500b\u3005\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u3001AWS \u30ea\u30fc\u30b8\u30e7\u30f3\u3001\u7279\u5b9a\u306e Prometheus \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3001RemoteWrite\u3001Query\u3001HourlyStorageMetering \u306a\u3069\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u30b3\u30b9\u30c8\u306e\u6d1e\u5bdf\u304c\u5f97\u3089\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u30c7\u30fc\u30bf\u3092\u8996\u899a\u5316\u304a\u3088\u3073\u5206\u6790\u3059\u308b\u306b\u306f\u3001\u30ab\u30b9\u30bf\u30e0 Athena \u30d3\u30e5\u30fc\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u51e6\u7406\u3092\u9032\u3081\u308b\u524d\u306b\u3001[Implementation overview][cid-implement] \u3067\u8a00\u53ca\u3055\u308c\u3066\u3044\u308b CUR (\u30b9\u30c6\u30c3\u30d7 #1) \u3092\u4f5c\u6210\u3057\u3001AWS Conformation \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8 (\u30b9\u30c6\u30c3\u30d7 #2) \u3092\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6b21\u306b\u3001\u4ee5\u4e0b\u306e\u30af\u30a8\u30ea\u3092\u4f7f\u7528\u3057\u3066\u3001\u65b0\u3057\u3044 Amazon Athena ",(0,t.jsx)(n.a,{href:"https://athena-in-action.workshop.aws/30-basics/303-create-view.html",children:"view"})," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u3053\u306e\u30af\u30a8\u30ea\u306f\u3001Organization \u5185\u306e\u3059\u3079\u3066\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u308f\u305f\u308b Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:'CREATE OR REPLACE VIEW "prometheus_cost" AS\nSELECT\nline_item_usage_type\n, line_item_resource_id\n, line_item_operation\n, line_item_usage_account_id\n, month\n, year\n, "sum"(line_item_usage_amount) "Usage"\n, "sum"(line_item_unblended_cost) cost\nFROM\ndatabase.tablename #\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u540d\u3068\u30c6\u30fc\u30d6\u30eb\u540d\u3092\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\nWHERE ("line_item_product_code" = \'AmazonPrometheus\')\nGROUP BY 1, 2, 3, 4, 5, 6'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"amazon-managed-grafana-\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210",children:"Amazon Managed Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u4f5c\u6210"}),"\n",(0,t.jsxs)(n.p,{children:["Amazon Managed Grafana \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001Grafana \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30b3\u30f3\u30bd\u30fc\u30eb\u306e AWS \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u69cb\u6210\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3001Athena \u3092\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u3057\u3066\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u6a5f\u80fd\u306b\u3088\u308a\u3001\u65e2\u5b58\u306e Athena \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u691c\u51fa\u3057\u3001Athena \u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u5fc5\u8981\u306a\u8a8d\u8a3c\u60c5\u5831\u306e\u69cb\u6210\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u3067\u3001Athena \u3092\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u3057\u3066\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u7c21\u5358\u306b\u306a\u308a\u307e\u3059\u3002Athena \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3092\u4f7f\u7528\u3059\u308b\u305f\u3081\u306e\u524d\u63d0\u6761\u4ef6\u306b\u3064\u3044\u3066\u306f\u3001",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/grafana/latest/userguide/Athena-prereq.html",children:"\u524d\u63d0\u6761\u4ef6"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e ",(0,t.jsx)(n.strong,{children:"Grafana \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"})," \u306f\u3001AWS Organizations \u306e\u3059\u3079\u3066\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u308f\u305f\u308b Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u3092\u3001\u500b\u3005\u306e Prometheus \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30b3\u30b9\u30c8\u3084 RemoteWrite\u3001Query\u3001HourlyStorageMetering \u306a\u3069\u306e\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3\u3068\u3068\u3082\u306b\u793a\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"prometheus-cost",src:a(89388).A+"",width:"3005",height:"1390"})}),"\n",(0,t.jsxs)(n.p,{children:["Grafana \u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306f\u3001\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u683c\u7d0d\u3059\u308b JSON \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u8868\u3055\u308c\u307e\u3059\u3002\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u306b\u306f\u3001\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3001\u30d1\u30cd\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u5909\u6570\u3001\u30d1\u30cd\u30eb\u30af\u30a8\u30ea\u306a\u3069\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u4e0a\u8a18\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e JSON \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:a(89828).A+"",children:"\u3053\u3061\u3089"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001Organization \u5168\u4f53\u306e AWS \u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u304a\u3051\u308b Amazon Managed Service for Prometheus \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u3092\u7279\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002\u8981\u4ef6\u306b\u5408\u308f\u305b\u3066\u30d3\u30b8\u30e5\u30a2\u30eb\u3092\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306b\u3001\u4ed6\u306e Grafana \u306e ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/grafana/latest/userguide/Grafana-panels.html",children:"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u30d1\u30cd\u30eb"})," \u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},89828:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/files/AmazonPrometheus-61602cb0332ade0b5e768b0f00ee2d7d.json"},89388:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/prometheus-cost-ac8ec270353978dba9ad4d41a30286f7.png"},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>i});var t=a(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);