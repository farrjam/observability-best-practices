"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[4087],{53173:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(74848),s=n(28453);const r={},o="ADOT Observability Pipeline",l={id:"patterns/o11ypipeline",title:"ADOT Observability Pipeline",description:"The observability pipeline consists of several components that work together to collect, manage, and analyze observability data from various sources.",source:"@site/docs/patterns/o11ypipeline.md",sourceDirName:"patterns",slug:"/patterns/o11ypipeline",permalink:"/docs/patterns/o11ypipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/patterns/o11ypipeline.md",tags:[],version:"current",frontMatter:{},sidebar:"patterns",previous:{title:"Cross account monitoring with AWS Open source service",permalink:"/docs/patterns/multiaccountoss"},next:{title:"Opensearch Logging on AWS",permalink:"/docs/patterns/opensearch"}},a={},c=[{value:"EKS Cluster",id:"eks-cluster",level:2},{value:"Install ADOT Operator Helm Chart",id:"install-adot-operator-helm-chart",level:3},{value:"User Configured Collector",id:"user-configured-collector",level:3},{value:"Persistent Volume",id:"persistent-volume",level:3},{value:"Kubernetes Node",id:"kubernetes-node",level:3},{value:"Scrape Targets",id:"scrape-targets",level:2},{value:"AWS Prometheus Remote Write Exporter",id:"aws-prometheus-remote-write-exporter",level:2},{value:"AWS CloudWatch EMF Exporter",id:"aws-cloudwatch-emf-exporter",level:2},{value:"AWS X-Ray Tracing Exporter",id:"aws-x-ray-tracing-exporter",level:2},{value:"Collecting Metrics and Insights with ADOT",id:"collecting-metrics-and-insights-with-adot",level:2},{value:"Benefits of Using ADOT",id:"benefits-of-using-adot",level:2},{value:"Difference between OpenTelemetry and ADOT",id:"difference-between-opentelemetry-and-adot",level:2}];function d(e){const i={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"adot-observability-pipeline",children:"ADOT Observability Pipeline"}),"\n",(0,t.jsx)(i.p,{children:"The observability pipeline consists of several components that work together to collect, manage, and analyze observability data from various sources."}),"\n",(0,t.jsx)(i.h2,{id:"eks-cluster",children:"EKS Cluster"}),"\n",(0,t.jsx)(i.p,{children:"The EKS (Elastic Kubernetes Service) cluster hosts the main components of the observability pipeline."}),"\n",(0,t.jsx)(i.h3,{id:"install-adot-operator-helm-chart",children:"Install ADOT Operator Helm Chart"}),"\n",(0,t.jsx)(i.p,{children:"The ADOT (AWS Distro for OpenTelemetry) Operator is installed using a Helm chart. It manages the deployment and configuration of the observability pipeline components."}),"\n",(0,t.jsx)(i.h3,{id:"user-configured-collector",children:"User Configured Collector"}),"\n",(0,t.jsx)(i.p,{children:"The user-configured collector is managed by the operator and consists of the following components:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Collector as Deployment: The collector is deployed as a Kubernetes deployment, which ensures high availability and scalability."}),"\n",(0,t.jsx)(i.li,{children:"Collector-0, Collector-1, Collector-2: Multiple collector instances are deployed to handle the incoming observability data. They work together to distribute the workload and ensure reliable data collection."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"OTEL pipeline",src:n(36270).A+"",width:"2740",height:"1150"}),"\n",(0,t.jsx)(i.em,{children:"Figure 1: OpenTelemetry Pipleine"})]}),"\n",(0,t.jsx)(i.h3,{id:"persistent-volume",children:"Persistent Volume"}),"\n",(0,t.jsx)(i.p,{children:"The persistent volume is used to store the collected observability data. It ensures data durability and allows for long-term storage and analysis."}),"\n",(0,t.jsx)(i.h3,{id:"kubernetes-node",children:"Kubernetes Node"}),"\n",(0,t.jsx)(i.p,{children:"The Kubernetes node hosts the application pods and the collector as a sidecar."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Application Container: The application container runs the actual application code and generates observability data."}),"\n",(0,t.jsx)(i.li,{children:"Collector as Sidecar: The collector runs as a sidecar container alongside the application container. It collects the observability data generated by the application."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"scrape-targets",children:"Scrape Targets"}),"\n",(0,t.jsx)(i.p,{children:"The observability pipeline collects data from various scrape targets, such as:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Scrape traces/metrics: The pipeline scrapes traces and metrics from the application and infrastructure components."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"aws-prometheus-remote-write-exporter",children:"AWS Prometheus Remote Write Exporter"}),"\n",(0,t.jsx)(i.p,{children:"The AWS Prometheus Remote Write Exporter is used to export the collected observability data to AWS services."}),"\n",(0,t.jsx)(i.h2,{id:"aws-cloudwatch-emf-exporter",children:"AWS CloudWatch EMF Exporter"}),"\n",(0,t.jsx)(i.p,{children:"The AWS CloudWatch EMF (Embedded Metric Format) Exporter is used to export metrics to AWS CloudWatch."}),"\n",(0,t.jsx)(i.h2,{id:"aws-x-ray-tracing-exporter",children:"AWS X-Ray Tracing Exporter"}),"\n",(0,t.jsx)(i.p,{children:"The AWS X-Ray Tracing Exporter is used to export tracing data to AWS X-Ray for distributed tracing and performance analysis."}),"\n",(0,t.jsx)(i.p,{children:"The observability pipeline collects data from the scrape targets, processes it using the collectors, and exports it to various AWS services for further analysis and visualization."}),"\n",(0,t.jsx)(i.h2,{id:"collecting-metrics-and-insights-with-adot",children:"Collecting Metrics and Insights with ADOT"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Instrumentation"}),": Similar to OpenTelemetry, ADOT provides libraries and SDKs to instrument your applications and services, capturing telemetry data such as metrics, traces, and logs."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Metrics Collection"}),": ADOT supports collecting and exporting system and application-level metrics, including AWS service metrics, providing insights into resource utilization and application performance."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Distributed Tracing"}),": ADOT enables distributed tracing across AWS services, containers, and on-premises environments, allowing you to trace requests and operations end-to-end."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Logging"}),": ADOT includes support for structured logging, correlating log data with other telemetry signals for comprehensive observability."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"AWS Service Integrations"}),": ADOT provides tight integrations with AWS services like AWS X-Ray, AWS CloudWatch, Amazon Managed Service for Prometheus, and AWS Distro for OpenTelemetry Operator, enabling seamless telemetry collection and analysis within the AWS ecosystem."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Automatic Instrumentation"}),": ADOT offers automatic instrumentation capabilities for popular frameworks and libraries, simplifying the process of instrumenting existing applications."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Data Processing and Analysis"}),": Telemetry data collected by ADOT can be exported to AWS observability services like AWS X-Ray, Amazon Managed Service for Prometheus, and AWS CloudWatch, leveraging AWS-native analysis and visualization tools."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"benefits-of-using-adot",children:"Benefits of Using ADOT"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"AWS-Native Integration"}),": ADOT is designed to seamlessly integrate with AWS services and infrastructure, providing a cohesive observability experience within the AWS ecosystem."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Performance and Scalability"}),": ADOT is optimized for performance and scalability, enabling efficient telemetry collection and analysis in large-scale AWS environments."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Security and Compliance"}),": ADOT adheres to AWS security best practices and is compliant with various industry standards, ensuring secure and compliant observability practices."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"AWS Support"}),": As an AWS-supported distribution, ADOT benefits from AWS's extensive documentation, support channels, and long-term commitment to the OpenTelemetry project."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"difference-between-opentelemetry-and-adot",children:"Difference between OpenTelemetry and ADOT"}),"\n",(0,t.jsx)(i.p,{children:"While ADOT and OpenTelemetry share many core capabilities, there are some key differences:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"AWS Integration"}),": ADOT is designed specifically for AWS environments and provides tight integrations with AWS services, while OpenTelemetry is a vendor-neutral project."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"AWS Optimization"}),": ADOT is optimized for performance, scalability, and security within AWS environments, leveraging AWS-native services and best practices."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"AWS Support"}),": ADOT benefits from official AWS support, documentation, and long-term commitment, while OpenTelemetry relies on community support."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"AWS-Specific Features"}),": ADOT includes AWS-specific features and automatic instrumentation for AWS services, while OpenTelemetry focuses on general-purpose observability."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Vendor Neutrality"}),": OpenTelemetry is a vendor-neutral project, allowing integration with various observability platforms, while ADOT is primarily focused on AWS observability services."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"By leveraging ADOT, organizations can achieve comprehensive observability within the AWS ecosystem, benefiting from AWS-native integrations, optimized performance, and AWS support, while still maintaining the flexibility to leverage OpenTelemetry capabilities and community contributions."})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},36270:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/otelpipeline-5b2f756b2aa8cab2798b919a7035ae5b.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var t=n(96540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);