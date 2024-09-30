"use strict";(self.webpackChunkobservability_best_practices=self.webpackChunkobservability_best_practices||[]).push([[6598],{4865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const a={},r="Synthetic testing",o={id:"tools/synthetics",title:"Synthetic testing",description:"Amazon CloudWatch Synthetics allows you to monitor applications from the perspective of your customer, even in the absence of actual users. By continuously testing your APIs and website experiences, you can gain visibility into intermittent issues that occur even when there is no user traffic.",source:"@site/docs/tools/synthetics.md",sourceDirName:"tools",slug:"/tools/synthetics",permalink:"/docs/tools/synthetics",draft:!1,unlisted:!1,editUrl:"https://github.com/aws-observability/observability-best-practices/docs/tools/synthetics.md",tags:[],version:"current",frontMatter:{},sidebar:"tools",previous:{title:"Real User Monitoring",permalink:"/docs/tools/rum"},next:{title:"Service Level Objectives (SLOs)",permalink:"/docs/tools/slos"}},c={},l=[{value:"Getting Started",id:"getting-started",level:2},{value:"Full Coverage",id:"full-coverage",level:3},{value:"Recording New Canaries",id:"recording-new-canaries",level:3},{value:"Viewing Aggregate Metrics",id:"viewing-aggregate-metrics",level:3},{value:"Building Canaries",id:"building-canaries",level:2},{value:"Blueprints",id:"blueprints",level:3},{value:"Maintainability",id:"maintainability",level:3},{value:"String Secrets",id:"string-secrets",level:3},{value:"Managing Canaries at Scale",id:"managing-canaries-at-scale",level:2},{value:"Check for Broken Links",id:"check-for-broken-links",level:3},{value:"Multiple Heartbeat URLs",id:"multiple-heartbeat-urls",level:3},{value:"Organize in Groups",id:"organize-in-groups",level:3},{value:"Runtime Options",id:"runtime-options",level:2},{value:"Versions and Support",id:"versions-and-support",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Import for Selenium",id:"import-for-selenium",level:3}];function h(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"synthetic-testing",children:"Synthetic testing"}),"\n",(0,i.jsx)(t.p,{children:"Amazon CloudWatch Synthetics allows you to monitor applications from the perspective of your customer, even in the absence of actual users. By continuously testing your APIs and website experiences, you can gain visibility into intermittent issues that occur even when there is no user traffic."}),"\n",(0,i.jsx)(t.p,{children:"Canaries are configurable scripts, that you can run on a schedule to continually test your APIs and website experiences 24x7. They follow the same code paths and network routes as real-users, and can notify you of unexpected behavior including latency, page load errors, broken or dead links, and broken user workflows."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"CloudWatch Synthetics architecture",src:n(59408).A+"",width:"1072",height:"462"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Ensure that you use Synthetics canaries to monitor only endpoints and APIs where you have ownership or permissions. Depending on the canary frequency settings, these endpoints might experience increased traffic."})}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.h3,{id:"full-coverage",children:"Full Coverage"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["When developing your testing strategy, consider both public and ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/blogs/mt/monitor-your-private-endpoints-using-cloudwatch-synthetics/",children:"private internal endpoints"})," within your Amazon VPC."]})}),"\n",(0,i.jsx)(t.h3,{id:"recording-new-canaries",children:"Recording New Canaries"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://chrome.google.com/webstore/detail/cloudwatch-synthetics-rec/bhdnlmmgiplmbcdmkkdfplenecpegfno",children:"CloudWatch Synthetics Recorder"})," Chrome browser plugin allows you to quickly build new canary test scripts with complex workflows from scratch. The type and click actions taken during recording are converted into a Node.js script that you can use to create a canary. The known limitations of the CloudWatch Synthetics Recorder are noted on ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Recorder.html#CloudWatch_Synthetics_Canaries_Recorder-limitations",children:"this page"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"viewing-aggregate-metrics",children:"Viewing Aggregate Metrics"}),"\n",(0,i.jsx)(t.p,{children:"Take advantage of the out-of-the-box reporting on aggregate metrics collected from your fleet of canary scripts. CloudWatch Automatic Dashboard"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"The CloudWatch Dashboard for Synthetics",src:n(65657).A+"",width:"1864",height:"895"})}),"\n",(0,i.jsx)(t.h2,{id:"building-canaries",children:"Building Canaries"}),"\n",(0,i.jsx)(t.h3,{id:"blueprints",children:"Blueprints"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints.html",children:"canary blueprints"})," to simplify the setup process for multiple canary types."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Multiple ways to create a synthetics canary",src:n(82722).A+"",width:"600",height:"412"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Blueprints are a convenient way to start writing canaries and simple use cases can be covered with no code."})}),"\n",(0,i.jsx)(t.h3,{id:"maintainability",children:"Maintainability"}),"\n",(0,i.jsxs)(t.p,{children:["When you write your own canaries, they are tied to a ",(0,i.jsx)(t.em,{children:"runtime version"}),". This will be a specific version of either Python with Selenium, or JavaScript with Puppeteer. See [this page] for a list of our currently-supported runtime versions and those that are deprecated."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Improve the maintainability of your scripts by ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/blogs/mt/using-environment-variables-with-amazon-cloudwatch-synthetics/",children:"using environment variables"})," to share data that can be accessed during the canary's execution."]})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Upgrade your canaries to the latest runtime version when available."})}),"\n",(0,i.jsx)(t.h3,{id:"string-secrets",children:"String Secrets"}),"\n",(0,i.jsx)(t.p,{children:"You can code your canaries to pull secrets (such as login credentials) from a secure system outside of your canary or its environment variables. Any system that can be reached by AWS Lambda can potentially provide secrets to your canaries at runtime."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Execute your tests and ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/blogs/mt/secure-monitoring-of-user-workflow-experience-using-amazon-cloudwatch-synthetics-and-aws-secrets-manager/",children:"secure sensitive data"})," by storing secrets like database connection details, API keys, and application credentials using AWS Secrets Manager."]})}),"\n",(0,i.jsx)(t.h2,{id:"managing-canaries-at-scale",children:"Managing Canaries at Scale"}),"\n",(0,i.jsx)(t.h3,{id:"check-for-broken-links",children:"Check for Broken Links"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If your website contains a high-volume of dynamic content and links, you can use CloudWatch Synthetics to crawl your website, ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/blogs/mt/cloudwatch-synthetics-to-find-broken-links-on-your-website/",children:"detect broken links"}),", and find the reason for failure. Then use a failure threshold to optionally create a CloudWatch Alarm when a failure threshold has been violated."]})}),"\n",(0,i.jsx)(t.h3,{id:"multiple-heartbeat-urls",children:"Multiple Heartbeat URLs"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Simplify your testing and optimize costs by ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/blogs/mt/simplify-your-canary-by-batching-multiple-urls-in-amazon-cloudwatch-synthetics/",children:"batching multiple URLs"})," in a single heartbeat monitoring canary test. You can then see the status, duration, associated screenshots, and failure reason for each URL in the step summary of the canary run report."]})}),"\n",(0,i.jsx)(t.h3,{id:"organize-in-groups",children:"Organize in Groups"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Organize and track your canaries in ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Groups.html",children:"groups"})," to view aggregated metrics and more easily isolate and drill in to failures."]})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Organize and track canaries in groups",src:n(73227).A+"",width:"1329",height:"670"})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["Note that groups will require the ",(0,i.jsx)(t.em,{children:"exact"})," name of the canary if you are creating a cross-region group."]})}),"\n",(0,i.jsx)(t.h2,{id:"runtime-options",children:"Runtime Options"}),"\n",(0,i.jsx)(t.h3,{id:"versions-and-support",children:"Versions and Support"}),"\n",(0,i.jsxs)(t.p,{children:["CloudWatch Synthetics currently supports runtimes that use Node.js for scripts and the ",(0,i.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer",children:"Puppeteer"})," framework, and runtimes that use Python for scripting and ",(0,i.jsx)(t.a,{href:"https://www.selenium.dev/documentation/webdriver/",children:"Selenium WebDriver"})," for the framework."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Always use the most recent runtime version for your canaries, to be able to use the latest features and updates made to the Synthetics library."})}),"\n",(0,i.jsxs)(t.p,{children:["CloudWatch Synthetics notifies you by email if you have canaries that use ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html#CloudWatch_Synthetics_Canaries_runtime_support",children:"runtimes that are scheduled to be deprecated"})," in the next 60 days."]}),"\n",(0,i.jsx)(t.h3,{id:"code-samples",children:"Code Samples"}),"\n",(0,i.jsxs)(t.p,{children:["Get started with code samples for both ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Samples.html#CloudWatch_Synthetics_Canaries_Samples_nodejspup",children:"Node.js and Puppeteer"})," and ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Samples.html#CloudWatch_Synthetics_Canaries_Samples_pythonsel",children:"Python and Selenium"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"import-for-selenium",children:"Import for Selenium"}),"\n",(0,i.jsxs)(t.p,{children:["Create canaries in ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/blogs/mt/create-canaries-in-python-and-selenium-using-amazon-cloudwatch-synthetics/",children:"Python and Selenium"})," from scratch or by importing existing scripts with minimal changes."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},59408:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/synthetics0-be6e0136b6cae6ed285548af1dea9841.png"},65657:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/synthetics1-3f31d5fe4dc4916acc1cf3bebb95520a.png"},82722:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/synthetics2-21e5a4ff70de14905215b3f21430e329.png"},73227:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/synthetics3-b655712484009862ac549f8e233f0e1c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);