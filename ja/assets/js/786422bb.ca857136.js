"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[1848],{90793:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(74848),r=n(28453);const s={},t="Amazon Managed Service for Prometheus",i={id:"recipes/amp",title:"Amazon Managed Service for Prometheus",description:"Amazon Managed Service for Prometheus\uff08AMP\uff09 \u306f\u3001\u30b3\u30f3\u30c6\u30ca\u5316\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5927\u898f\u6a21\u306b\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064 Prometheus \u4e92\u63db\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/recipes/amp.md",sourceDirName:"recipes",slug:"/recipes/amp",permalink:"/ja/docs/recipes/amp",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/recipes/amp.md",tags:[],version:"current",frontMatter:{},sidebar:"recipes",previous:{title:"Amazon CloudWatch",permalink:"/ja/docs/recipes/cw"},next:{title:"Amazon Managed Grafana",permalink:"/ja/docs/recipes/amg"}},m={},c=[];function p(e){const a={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"amazon-managed-service-for-prometheus",children:"Amazon Managed Service for Prometheus"}),"\n",(0,o.jsx)(a.p,{children:"[Amazon Managed Service for Prometheus][amp-main]\uff08AMP\uff09 \u306f\u3001\u30b3\u30f3\u30c6\u30ca\u5316\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u5927\u898f\u6a21\u306b\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064 Prometheus \u4e92\u63db\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\nAMP \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30e1\u30c8\u30ea\u30af\u30b9\u306e\u30a4\u30f3\u30b8\u30a7\u30b9\u30c8\u3001\u30b9\u30c8\u30ec\u30fc\u30b8\u3001\u30af\u30a8\u30ea\u3092\u7ba1\u7406\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u57fa\u76e4\u3092\u7ba1\u7406\u3059\u308b\u3053\u3068\u306a\u304f\u3001Prometheus \u30af\u30a8\u30ea\u8a00\u8a9e (PromQL) \u3092\u4f7f\u7528\u3057\u3066\u30b3\u30f3\u30c6\u30ca\u5316\u30ef\u30fc\u30af\u30ed\u30fc\u30c9\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(a.p,{children:"\u4ee5\u4e0b\u306e\u30ec\u30b7\u30d4\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"[AMP \u306e\u6982\u8981][amp-gettingstarted]"}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.a,{href:"/ja/docs/recipes/recipes/ec2-eks-metrics-go-adot-ampamg",children:"ADOT \u3092\u4f7f\u7528\u3057\u3066 EKS on EC2 \u304b\u3089 AMP \u306b\u30a4\u30f3\u30b8\u30a7\u30b9\u30c8\u3057\u3001AMG \u3067\u53ef\u8996\u5316"})}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u3078\u306e\u30af\u30ed\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u30a4\u30f3\u30b8\u30a7\u30b9\u30c8\u306e\u8a2d\u5b9a][amp-xaccount]"}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u3092\u4f7f\u7528\u3057\u305f ECS \u304b\u3089\u306e\u30e1\u30c8\u30ea\u30af\u30b9\u53ce\u96c6][amp-ecs-metrics]"}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u7528 Grafana Cloud \u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u306e\u69cb\u6210][amp-gcwa]"}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30af\u30ed\u30b9\u30ea\u30fc\u30b8\u30e7\u30f3\u30e1\u30c8\u30ea\u30af\u30b9\u53ce\u96c6\u306e\u8a2d\u5b9a][amp-xregion-metrics]"}),"\n",(0,o.jsx)(a.li,{children:"[EKS \u4e0a\u306e\u30bb\u30eb\u30d5\u30db\u30b9\u30c8\u3055\u308c\u305f Prometheus \u304b\u3089 AMP \u3078\u306e\u79fb\u884c\u306b\u95a2\u3059\u308b\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9][amp-migration]"}),"\n",(0,o.jsx)(a.li,{children:"[AMP \u306e\u6982\u8981\u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7][amp-oow]"}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.a,{href:"/ja/docs/recipes/recipes/lambda-cw-metrics-go-amp",children:"Firehose \u3068 AWS Lambda \u3092\u4f7f\u7528\u3057\u305f Cloudwatch \u30e1\u30c8\u30ea\u30af\u30b9\u30b9\u30c8\u30ea\u30fc\u30e0\u306e Amazon Managed Service for Prometheus \u3078\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"})}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.a,{href:"/ja/docs/recipes/recipes/amp-alertmanager-terraform",children:"Terraform \u306b\u3088\u308b Infrastructure as Code \u3092\u4f7f\u7528\u3057\u305f Amazon Managed Service for Prometheus \u304a\u3088\u3073 Alert Manager \u306e\u30c7\u30d7\u30ed\u30a4"})}),"\n",(0,o.jsx)(a.li,{children:"[Amazon Managed Prometheus \u3068 Amazon Managed Grafana \u3092\u4f7f\u7528\u3057\u305f EKS \u4e0a\u306e Istio \u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0][amp-istio-monitoring]"}),"\n",(0,o.jsx)(a.li,{children:"[Amazon Managed Service for Prometheus \u3068 Amazon Managed Grafana \u3092\u4f7f\u7528\u3057\u305f Amazon EKS Anywhere \u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0][amp-anywhere-monitoring]"}),"\n",(0,o.jsx)(a.li,{children:"[Amazon EKS Observability Accelerator \u306e\u3054\u7d39\u4ecb][eks-accelerator]"}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.a,{href:"/ja/docs/recipes/recipes/amp-mixin-dashboards",children:"AMP \u3068 Amazon Managed Grafana \u3067\u306e Prometheus mixin \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n[amp-main]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/prometheus/",children:"https://aws.amazon.com/prometheus/"}),"\n[amp-gettingstarted]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/getting-started-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/mt/getting-started-amazon-managed-service-for-prometheus/"}),"\n[amp-xaccount]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/setting-up-cross-account-ingestion-into-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/setting-up-cross-account-ingestion-into-amazon-managed-service-for-prometheus/"}),"\n[amp-ecs-metrics]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/metrics-collection-from-amazon-ecs-using-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/metrics-collection-from-amazon-ecs-using-amazon-managed-service-for-prometheus/"}),"\n[amp-gcwa]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/configuring-grafana-cloud-agent-for-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/configuring-grafana-cloud-agent-for-amazon-managed-service-for-prometheus/"}),"\n[amp-xregion-metrics]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/set-up-cross-region-metrics-collection-for-amazon-managed-service-for-prometheus-workspaces/",children:"https://aws.amazon.com/blogs/opensource/set-up-cross-region-metrics-collection-for-amazon-managed-service-for-prometheus-workspaces/"}),"\n[amp-migration]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/opensource/best-practices-for-migrating-self-hosted-prometheus-on-amazon-eks-to-amazon-managed-service-for-prometheus/",children:"https://aws.amazon.com/blogs/opensource/best-practices-for-migrating-self-hosted-prometheus-on-amazon-eks-to-amazon-managed-service-for-prometheus/"}),"\n[amp-oow]: ",(0,o.jsx)(a.a,{href:"https://observability.workshop.aws/en/amp.html",children:"https://observability.workshop.aws/en/amp.html"}),"\n[amp-istio-monitoring]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/mt/monitor-istio-on-eks-using-amazon-managed-prometheus-and-amazon-managed-grafana/",children:"https://aws.amazon.com/blogs/mt/monitor-istio-on-eks-using-amazon-managed-prometheus-and-amazon-managed-grafana/"}),"\n[amp-anywhere-monitoring]: ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/blogs/containers/monitoring-amazon-eks-anywhere-using-amazon-managed-service-for-prometheus-and-amazon-managed-grafana/",children:"https://aws.amazon.com/blogs/containers/monitoring-amazon-eks-anywhere-using-amazon-managed-service-for-prometheus-and-amazon-managed-grafana/"}),"\n[eks-accelerator]: recipes/eks-observability-accelerator.md"]}),"\n",(0,o.jsx)(a.li,{children:(0,o.jsx)(a.a,{href:"/ja/docs/recipes/recipes/as-ec2-using-amp-and-alertmanager",children:"Amazon Managed Service for Prometheus \u3068 Alert Manager \u3092\u4f7f\u7528\u3057\u305f Amazon EC2 \u306e\u81ea\u52d5\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0"})}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function t(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);