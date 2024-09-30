"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[4889],{73827:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(74848),i=t(28453);const a={},c="AWS Observability \u30b5\u30fc\u30d3\u30b9\u3068\u30b3\u30b9\u30c8",o={id:"guides/cost/cost-visualization/cost",title:"AWS Observability \u30b5\u30fc\u30d3\u30b9\u3068\u30b3\u30b9\u30c8",description:"\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30b9\u30bf\u30c3\u30af\u3078\u306e\u6295\u8cc7\u306b\u4f34\u3044\u3001\u5b9a\u671f\u7684\u306b\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u88fd\u54c1\u306e\u30b3\u30b9\u30c8\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5fc5\u8981\u306a\u30b3\u30b9\u30c8\u306e\u307f\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u3053\u3068\u3068\u3001\u4e0d\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u306e\u904e\u5270\u652f\u51fa\u304c\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/cost/cost-visualization/cost.md",sourceDirName:"guides/cost/cost-visualization",slug:"/guides/cost/cost-visualization/cost",permalink:"/ja/docs/guides/cost/cost-visualization/cost",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/guides/cost/cost-visualization/cost.md",tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Kubecost \u3092\u4f7f\u7528\u3057\u305f\u30b3\u30b9\u30c8\u306e\u53ef\u8996\u5316\u3068\u30ea\u30bd\u30fc\u30b9\u306e\u9069\u5207\u306a\u30b5\u30a4\u30ba\u8a2d\u5b9a",permalink:"/ja/docs/guides/cost/kubecost"},next:{title:"Amazon CloudWatch",permalink:"/ja/docs/guides/cost/cost-visualization/amazon-cloudwatch"}},r={},l=[{value:"\u30b3\u30b9\u30c8\u6700\u9069\u5316\u306e\u305f\u3081\u306e AWS \u30c4\u30fc\u30eb",id:"\u30b3\u30b9\u30c8\u6700\u9069\u5316\u306e\u305f\u3081\u306e-aws-\u30c4\u30fc\u30eb",level:2},{value:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u6982\u8981: AWS \u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u30ec\u30dd\u30fc\u30c8\u306e\u8996\u899a\u5316",id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u6982\u8981-aws-\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u30ec\u30dd\u30fc\u30c8\u306e\u8996\u899a\u5316",level:2},{value:"\u30af\u30e9\u30a6\u30c9\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",id:"\u30af\u30e9\u30a6\u30c9\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",level:2},{value:"\u5b9f\u88c5",id:"\u5b9f\u88c5",level:3}];function d(e){const s={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"aws-observability-\u30b5\u30fc\u30d3\u30b9\u3068\u30b3\u30b9\u30c8",children:"AWS Observability \u30b5\u30fc\u30d3\u30b9\u3068\u30b3\u30b9\u30c8"}),"\n",(0,n.jsxs)(s.p,{children:["\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u30b9\u30bf\u30c3\u30af\u3078\u306e\u6295\u8cc7\u306b\u4f34\u3044\u3001\u5b9a\u671f\u7684\u306b\u30aa\u30d6\u30b6\u30fc\u30d0\u30d3\u30ea\u30c6\u30a3\u88fd\u54c1\u306e",(0,n.jsx)(s.strong,{children:"\u30b3\u30b9\u30c8"}),"\u3092\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5fc5\u8981\u306a\u30b3\u30b9\u30c8\u306e\u307f\u304c\u767a\u751f\u3057\u3066\u3044\u308b\u3053\u3068\u3068\u3001\u4e0d\u8981\u306a\u30ea\u30bd\u30fc\u30b9\u306e\u904e\u5270\u652f\u51fa\u304c\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u30b3\u30b9\u30c8\u6700\u9069\u5316\u306e\u305f\u3081\u306e-aws-\u30c4\u30fc\u30eb",children:"\u30b3\u30b9\u30c8\u6700\u9069\u5316\u306e\u305f\u3081\u306e AWS \u30c4\u30fc\u30eb"}),"\n",(0,n.jsx)(s.p,{children:"\u307b\u3068\u3093\u3069\u306e\u7d44\u7e54\u306e\u4e3b\u8981\u306a\u7126\u70b9\u306f\u3001\u30af\u30e9\u30a6\u30c9\u4e0a\u3067\u306e IT \u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u306e\u30b9\u30b1\u30fc\u30ea\u30f3\u30b0\u306b\u3042\u308b\u3082\u306e\u306e\u3001\u5b9f\u969b\u306e\u3001\u307e\u305f\u306f\u4eca\u5f8c\u306e\u30af\u30e9\u30a6\u30c9\u652f\u51fa\u3092\u5236\u5fa1\u3067\u304d\u305a\u3001\u6e96\u5099\u304c\u3067\u304d\u3066\u304a\u3089\u305a\u3001\u8a8d\u8b58\u3057\u3066\u3044\u306a\u3044\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002\u6642\u9593\u306e\u7d4c\u904e\u3068\u3068\u3082\u306b\u30b3\u30b9\u30c8\u3092\u8ffd\u8de1\u3001\u5831\u544a\u3001\u5206\u6790\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u3088\u3046\u306b\u3001AWS \u306f\u3044\u304f\u3064\u304b\u306e\u30b3\u30b9\u30c8\u6700\u9069\u5316\u30c4\u30fc\u30eb\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-what-is.html",children:"AWS Cost Explorer"})," - \u6642\u9593\u306e\u7d4c\u904e\u3068\u3068\u3082\u306b AWS \u306e\u652f\u51fa\u30d1\u30bf\u30fc\u30f3\u3092\u78ba\u8a8d\u3057\u3001\u5c06\u6765\u306e\u30b3\u30b9\u30c8\u3092\u4e88\u6e2c\u3057\u3001\u3055\u3089\u306a\u308b\u8abf\u67fb\u304c\u5fc5\u8981\u306a\u9818\u57df\u3092\u7279\u5b9a\u3057\u3001\u30ea\u30b6\u30fc\u30d6\u30c9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u5229\u7528\u72b6\u6cc1\u3092\u89b3\u5bdf\u3057\u3001\u30ea\u30b6\u30fc\u30d6\u30c9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u30ab\u30d0\u30ec\u30c3\u30b8\u3092\u89b3\u5bdf\u3057\u3001\u30ea\u30b6\u30fc\u30d6\u30c9\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u63a8\u5968\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html",children:"AWS Cost and Usage Report(CUR)"})," - \u30a2\u30ab\u30a6\u30f3\u30c8\u9593\u306e\u6642\u9593\u5358\u4f4d\u306e AWS \u4f7f\u7528\u72b6\u6cc1\u3092\u8a73\u7d30\u306b\u793a\u3059\u751f\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u3002AWS Cost and Usage Report \u306b\u306f\u3001\u4f7f\u7528\u3057\u3066\u3044\u308b\u30b5\u30fc\u30d3\u30b9\u306b\u5fdc\u3058\u3066\u5165\u529b\u3055\u308c\u308b\u52d5\u7684\u306a\u5217\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u6982\u8981-aws-\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u30ec\u30dd\u30fc\u30c8\u306e\u8996\u899a\u5316",children:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u306e\u6982\u8981: AWS \u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u30ec\u30dd\u30fc\u30c8\u306e\u8996\u899a\u5316"}),"\n",(0,n.jsx)(s.p,{children:"Amazon Managed Grafana \u307e\u305f\u306f Amazon QuickSight \u3067\u3001AWS \u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002\u6b21\u306e\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3\u306f\u3001\u4e21\u65b9\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Architecture diagram",src:t(83574).A+"",width:"753",height:"372"}),"\n",(0,n.jsx)(s.em,{children:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u56f3"})]}),"\n",(0,n.jsx)(s.h2,{id:"\u30af\u30e9\u30a6\u30c9\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",children:"\u30af\u30e9\u30a6\u30c9\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://wellarchitectedlabs.com/cost/200_labs/200_cloud_intelligence/",children:"\u30af\u30e9\u30a6\u30c9\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9"})," \u306f\u3001AWS \u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u30ec\u30dd\u30fc\u30c8 (CUR) \u3092\u30d9\u30fc\u30b9\u306b\u69cb\u7bc9\u3055\u308c\u305f ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/quicksight/",children:"Amazon QuickSight"})," \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306e\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3067\u3059\u3002 \u3053\u308c\u3089\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306f\u3001\u81ea\u8eab\u306e\u30b3\u30b9\u30c8\u7ba1\u7406\u3068\u6700\u9069\u5316 (FinOps) \u30c4\u30fc\u30eb\u3068\u3057\u3066\u6a5f\u80fd\u3057\u307e\u3059\u3002 AWS \u306e\u4f7f\u7528\u72b6\u6cc1\u3068\u30b3\u30b9\u30c8\u306e\u8a73\u7d30\u306a\u30d3\u30e5\u30fc\u3092\u53d6\u5f97\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064\u3001\u8a73\u7d30\u3067\u7c92\u5ea6\u306e\u7d30\u304b\u3044\u63a8\u5968\u99c6\u52d5\u578b\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u304c\u5f97\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u5b9f\u88c5",children:"\u5b9f\u88c5"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://aws.amazon.com/athena/",children:"Amazon Athena"})," \u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u6709\u52b9\u306b\u3057\u305f ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html",children:"CUR \u30ec\u30dd\u30fc\u30c8"})," \u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n",(0,n.jsx)(s.em,{children:"\u521d\u671f\u8a2d\u5b9a\u6642\u306b\u3001AWS \u304c Amazon S3 \u30d0\u30b1\u30c3\u30c8\u306b\u30ec\u30dd\u30fc\u30c8\u306e\u914d\u4fe1\u3092\u958b\u59cb\u3059\u308b\u307e\u3067\u306b\u6700\u5927 24 \u6642\u9593\u304b\u304b\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u30ec\u30dd\u30fc\u30c8\u306f 1 \u65e5\u306b 1 \u5ea6\u914d\u4fe1\u3055\u308c\u307e\u3059\u3002Athena \u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u306e\u305f\u3081\u306b\u8a2d\u5b9a\u3057\u305f Cost and Usage Report \u3092 Athena \u3068\u7d71\u5408\u3057\u3001\u30b9\u30c8\u30ea\u30fc\u30e0\u30e9\u30a4\u30f3\u5316\u304a\u3088\u3073\u81ea\u52d5\u5316\u3059\u308b\u305f\u3081\u306b\u3001AWS \u306f\u3044\u304f\u3064\u304b\u306e\u4e3b\u8981\u30ea\u30bd\u30fc\u30b9\u3068\u30ec\u30dd\u30fc\u30c8\u7528\u306e AWS CloudFormation \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/cur/latest/userguide/use-athena-cf.html",children:"AWS CloudFormation \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"})," \u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002\n",(0,n.jsx)(s.em,{children:"\u3053\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306b\u306f\u3001AWS Glue \u30af\u30ed\u30fc\u30e9\u30fc\u3001AWS Glue \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3001AWS Lambda \u30a4\u30d9\u30f3\u30c8\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u6642\u70b9\u3067\u3001Athena \u306e\u30c6\u30fc\u30d6\u30eb\u3092\u4f7f\u7528\u3057\u3066 CUR \u30c7\u30fc\u30bf\u306b\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/cur/latest/userguide/cur-ate-run.html",children:"Amazon Athena"})," \u3092\u4f7f\u7528\u3057\u3066 CUR \u30c7\u30fc\u30bf\u306b\u76f4\u63a5\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.em,{children:"\u30c7\u30fc\u30bf\u306b\u5bfe\u3057\u3066 Athena \u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u307e\u305a Athena \u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066 AWS \u304c\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u3092\u884c\u3063\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3057\u3001\u6b21\u306b Athena \u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Cloud Intelligence \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u30c7\u30d7\u30ed\u30a4\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u624b\u52d5\u30c7\u30d7\u30ed\u30a4\u306e\u5834\u5408\u306f\u3001AWS Well-Architected \u306e ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://www.wellarchitectedlabs.com/cost/200_labs/200_cloud_intelligence/",children:"Cost Optimization \u30e9\u30dc"})})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(s.li,{children:["\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4\u306e\u5834\u5408\u306f\u3001",(0,n.jsx)(s.a,{href:"https://github.com/aws-samples/aws-cudos-framework-deployment",children:"GitHub \u30ea\u30dd\u30b8\u30c8\u30ea"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Cloud Intelligence \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306f\u3001\u8ca1\u52d9\u30c1\u30fc\u30e0\u3001\u7d4c\u55b6\u9663\u3001IT \u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306b\u3068\u3063\u3066\u5927\u5909\u4fbf\u5229\u3067\u3059\u3002\u3057\u304b\u3057\u3001\u304a\u5ba2\u69d8\u304b\u3089\u3088\u304f\u3044\u305f\u3060\u304f\u3054\u8cea\u554f\u306e 1 \u3064\u304c\u3001Amazon CloudWatch\u3001AWS X-Ray\u3001Amazon Managed Service for Prometheus\u3001Amazon Managed Grafana \u306a\u3069\u306e\u500b\u3005\u306e AWS Observability \u88fd\u54c1\u306e\u7d44\u7e54\u5168\u4f53\u306e\u30b3\u30b9\u30c8\u3092\u3069\u306e\u3088\u3046\u306b\u628a\u63e1\u3067\u304d\u308b\u304b\u3068\u3044\u3046\u70b9\u3067\u3059\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u88fd\u54c1\u306e\u30b3\u30b9\u30c8\u3068\u4f7f\u7528\u72b6\u6cc1\u3092\u6df1\u304f\u6398\u308a\u4e0b\u3052\u307e\u3059\u3002 \u3042\u3089\u3086\u308b\u898f\u6a21\u306e\u4f01\u696d\u304c\u3053\u306e\u7a4d\u6975\u7684\u306a\u30a2\u30d7\u30ed\u30fc\u30c1\u3092\u30af\u30e9\u30a6\u30c9\u30b3\u30b9\u30c8\u6700\u9069\u5316\u6226\u7565\u306b\u63a1\u7528\u3057\u3001\u30af\u30e9\u30a6\u30c9\u30b3\u30b9\u30c8\u5206\u6790\u3068\u30c7\u30fc\u30bf\u30c9\u30ea\u30d6\u30f3\u306e\u610f\u601d\u6c7a\u5b9a\u3092\u901a\u3058\u3066\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3078\u306e\u5f71\u97ff\u3084\u904b\u7528\u4e0a\u306e\u30aa\u30fc\u30d0\u30fc\u30d8\u30c3\u30c9\u306a\u3057\u306b\u30d3\u30b8\u30cd\u30b9\u52b9\u7387\u3092\u5411\u4e0a\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},83574:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/cur-architecture-b7cf18eadb6b6005309d206b1939de0e.png"},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var n=t(96540);const i={},a=n.createContext(i);function c(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);