"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[6339],{23941:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var t=r(74848),i=r(28453);const n={},a="Using Amazon CloudWatch Metrics explorer to aggregate and visualize metrics filtered by resource tags",o={id:"recipes/recipes/metrics-explorer-filter-by-tags",title:"Using Amazon CloudWatch Metrics explorer to aggregate and visualize metrics filtered by resource tags",description:"In this recipe we show you how to use Metrics explorer to filter, aggregate, and visualize metrics by resource tags and resource properties - Use metrics explorer to monitor resources by their tags and properties.",source:"@site/docs/recipes/recipes/metrics-explorer-filter-by-tags.md",sourceDirName:"recipes/recipes",slug:"/recipes/recipes/metrics-explorer-filter-by-tags",permalink:"/docs/recipes/recipes/metrics-explorer-filter-by-tags",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/recipes/recipes/metrics-explorer-filter-by-tags.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Metrics Explorer tag based queries and visualizations",id:"metrics-explorer-tag-based-queries-and-visualizations",level:2},{value:"Dynamic visualizations",id:"dynamic-visualizations",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"using-amazon-cloudwatch-metrics-explorer-to-aggregate-and-visualize-metrics-filtered-by-resource-tags",children:"Using Amazon CloudWatch Metrics explorer to aggregate and visualize metrics filtered by resource tags"}),"\n",(0,t.jsxs)(s.p,{children:["In this recipe we show you how to use Metrics explorer to filter, aggregate, and visualize metrics by resource tags and resource properties - ",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html",children:"Use metrics explorer to monitor resources by their tags and properties"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"There are number of ways to create visualizations with Metrics explorer; in this walkthrough we simply leverage the AWS Console."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"This guide will take approximately 5 minutes to complete."})}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Access to AWS account"}),"\n",(0,t.jsx)(s.li,{children:"Access to Amazon CloudWatch Metrics explorer via AWS Console"}),"\n",(0,t.jsx)(s.li,{children:"Resource tags set for the relevant resources"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"metrics-explorer-tag-based-queries-and-visualizations",children:"Metrics Explorer tag based queries and visualizations"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Open the CloudWatch console"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Under ",(0,t.jsx)("b",{children:"Metrics"}),", click on the ",(0,t.jsx)("b",{children:"Explorer"})," menu"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Screen shot of metrics filtered by tag",src:r(63885).A+"",width:"271",height:"382"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["You can either choose from one of the ",(0,t.jsx)("b",{children:"Generic templates"})," or a ",(0,t.jsx)("b",{children:"Service based templates"})," list; in this example we use the ",(0,t.jsx)("b",{children:"EC2 Instances by type"})," template"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Screen shot of metrics filtered by tag",src:r(40236).A+"",width:"250",height:"601"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Choose metrics you would like to explore; remove obsolete once, and add other metrics you would like to see"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Screen shot of the EC2 metrics",src:r(6921).A+"",width:"424",height:"393"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Under ",(0,t.jsx)("b",{children:"From"}),", choose a resource tag or a resource property you are looking for; in the below example we show number of CPU and Network related metrics for different EC2 instances with ",(0,t.jsx)("b",{children:"Name: TeamX"})," Tag"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Screen shot of the Name tag example",src:r(31839).A+"",width:"1008",height:"608"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Please note, you can combine time series using an aggregation function under ",(0,t.jsx)("b",{children:"Aggregated by"}),"; in the below example ",(0,t.jsx)("b",{children:"TeamX"})," metrics are aggregated by ",(0,t.jsx)("b",{children:"Availability Zone"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Screen shot of the EC2 dashboard filter by tag Name",src:r(12673).A+"",width:"1828",height:"770"})}),"\n",(0,t.jsxs)(s.p,{children:["Alternatively, you could aggregate ",(0,t.jsx)("b",{children:"TeamX"})," and ",(0,t.jsx)("b",{children:"TeamY"})," by the ",(0,t.jsx)("b",{children:"Team"})," Tag, or choose any other configuration that suits your needs"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Screen shot of the EC2 dashboard filter by tag Team",src:r(59023).A+"",width:"1622",height:"1015"})}),"\n",(0,t.jsx)(s.h2,{id:"dynamic-visualizations",children:"Dynamic visualizations"}),"\n",(0,t.jsxs)(s.p,{children:["You can easily customize resulting visualizations by using ",(0,t.jsx)("b",{children:"From"}),", ",(0,t.jsx)("b",{children:"Aggregated by"})," and ",(0,t.jsx)("b",{children:"Split by"})," options. Metrics explorer visualizations are dynamic, so any new tagged resource automatically appears in the explorer widget."]}),"\n",(0,t.jsx)(s.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(s.p,{children:["For more information on Metrics explorer please refer to the following article:\n",(0,t.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html",children:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},63885:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/metrics-explorer-cw-menu-0832223055f58217e0c49b8102d8e14e.png"},12673:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/metrics-explorer-ec2-by-tag-name-dashboard-02984bd33726df1f5056f0ef073eb24f.png"},59023:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/metrics-explorer-ec2-by-tag-team-dashboard-843ffd42d66f355a477a94cc7b4f47c2.png"},6921:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/metrics-explorer-ec2-metrics-af3561724d15bf9044374f2f4adf9ec0.png"},31839:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/metrics-explorer-teamx-name-tag-69dcabf8968d52afcfa37d7e54a84eed.png"},40236:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/metrics-explorer-templates-ec2-by-type-7bb3d0b511eda08c21e7902f08a5056b.png"},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>o});var t=r(96540);const i={},n=t.createContext(i);function a(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);