"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[4167],{55053:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=i(74848),t=i(28453);const r={},o="EKS Tracing with AWS X-Ray",s={id:"patterns/Tracing/xrayeks",title:"EKS Tracing with AWS X-Ray",description:"In the world of modern application development, containerization has become the de facto standard for deploying and managing applications. Amazon Elastic Kubernetes Service (EKS) provides a robust and scalable platform for deploying and managing containerized applications using Kubernetes. However, as applications become more distributed and complex, observability becomes crucial for ensuring the reliability, performance, and efficiency of these applications.",source:"@site/docs/patterns/Tracing/xrayeks.md",sourceDirName:"patterns/Tracing",slug:"/patterns/Tracing/xrayeks",permalink:"/ja/docs/patterns/Tracing/xrayeks",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/patterns/Tracing/xrayeks.md",tags:[],version:"current",frontMatter:{},sidebar:"patterns",previous:{title:"ECS Tracing with AWS X-Ray",permalink:"/ja/docs/patterns/Tracing/xrayecs"},next:{title:"Lambda Tracing with AWS X-Ray",permalink:"/ja/docs/patterns/Tracing/xraylambda"}},c={},l=[];function d(e){const n={em:"em",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"eks-tracing-with-aws-x-ray",children:"EKS Tracing with AWS X-Ray"}),"\n",(0,a.jsx)(n.p,{children:"In the world of modern application development, containerization has become the de facto standard for deploying and managing applications. Amazon Elastic Kubernetes Service (EKS) provides a robust and scalable platform for deploying and managing containerized applications using Kubernetes. However, as applications become more distributed and complex, observability becomes crucial for ensuring the reliability, performance, and efficiency of these applications."}),"\n",(0,a.jsx)(n.p,{children:"AWS X-Ray addresses this challenge by offering a powerful distributed tracing service that enhances observability for containerized applications running on EKS. By integrating AWS X-Ray with your EKS workloads, you can unlock a range of benefits and capabilities that enable you to gain deeper insights into your application's behavior and performance:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"End-to-End Visibility"}),": AWS X-Ray traces requests as they flow through your containerized applications and other AWS services, providing an end-to-end view of the complete lifecycle of a request. This visibility helps you understand the interactions between different microservices and identify potential bottlenecks or issues more effectively."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Performance Analysis"}),": X-Ray collects detailed performance metrics, such as request latencies, error rates, and resource utilization, for your containerized applications. These metrics allow you to analyze the performance of your applications, identify performance hotspots, and optimize resource allocation."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Distributed Tracing"}),": In modern microservices architectures, requests often traverse multiple containers and services. AWS X-Ray provides a unified view of these distributed traces, enabling you to understand the interactions between different components and correlate performance data across your entire application."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Service Map Visualization"}),": X-Ray generates dynamic service maps that provide a visual representation of your application's components and their interactions. These service maps help you understand the complexity of your microservices architecture and identify potential areas for optimization or refactoring."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Integration with AWS Services"}),": AWS X-Ray seamlessly integrates with a wide range of AWS services, including AWS Lambda, API Gateway, Amazon EKS, and Amazon ECS. This integration allows you to trace requests across multiple services and correlate performance data with logs and metrics from other AWS services."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Custom Instrumentation"}),": While AWS X-Ray provides out-of-the-box instrumentation for many AWS services, you can also instrument your custom applications and services using the AWS X-Ray SDKs. This capability enables you to trace and analyze the performance of your custom code within your containerized applications, providing a more comprehensive view of your application's behavior."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"EKS Tracing",src:i(7883).A+"",width:"928",height:"674"}),"\n",(0,a.jsx)(n.em,{children:"Figure 1: Sending traces from EKS to X-Ray"})]}),"\n",(0,a.jsx)(n.p,{children:"To leverage AWS X-Ray for enhanced observability of your EKS workloads, you'll need to follow these general steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Instrument Custom Applications"}),": Use the AWS X-Ray SDKs to instrument your containerized applications and emit trace data to X-Ray."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Deploy Instrumented Applications"}),": Deploy your instrumented containerized applications to your Amazon EKS cluster."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Analyze Trace Data"}),": Use the AWS X-Ray console or APIs to analyze trace data, view service maps, and investigate performance issues or bottlenecks within your containerized applications."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Set Up Alerts and Notifications"}),": Configure CloudWatch alarms and notifications based on X-Ray metrics to receive alerts for performance degradation or anomalies in your EKS workloads."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Integrate with Other Observability Tools"}),": Combine AWS X-Ray with other observability tools, such as AWS CloudWatch Logs, Amazon CloudWatch Metrics, and AWS Distro for OpenTelemetry, to gain a comprehensive view of your containerized applications' performance, logs, and metrics."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"While AWS X-Ray provides powerful tracing capabilities for EKS workloads, it's important to consider potential challenges such as trace data volume and cost management. As your containerized applications scale and generate more trace data, you may need to implement sampling strategies or adjust trace data retention policies to manage costs effectively."}),"\n",(0,a.jsx)(n.p,{children:"Additionally, ensuring proper access control and data security for your trace data is crucial. AWS X-Ray provides encryption for trace data at rest and in transit, as well as granular access control mechanisms to protect the confidentiality and integrity of your trace data."}),"\n",(0,a.jsx)(n.p,{children:"In conclusion, integrating AWS X-Ray with your Amazon EKS workloads is a powerful approach to enhancing observability for containerized applications. By tracing requests end-to-end and providing detailed performance metrics, AWS X-Ray empowers you to identify and troubleshoot issues more effectively, optimize resource utilization, and gain deeper insights into the behavior and performance of your containerized applications. With the integration of AWS X-Ray and other AWS observability services, you can build and maintain highly observable, reliable, and performant containerized applications in the cloud."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7883:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/xrayeks-fdcd6824a022699992c6ed600bc722b1.png"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var a=i(96540);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);