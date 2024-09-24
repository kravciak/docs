"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[14456],{49345:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=i(85893),t=i(11151);const r={sidebar_label:"Production deployments",title:"Configuring Kubewarden stack for production",description:"Configuring Kubewarden stack for production",keywords:["kubewarden","kubernetes","policyservers","production","poddisruptionbudget","affinity","limits","tolerations"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","policy-servers","production","poddisruptionbudget","affinity","limits","tolerations"]},s="Configuring Tolerations and Affinity/Anti-Affinity for the Kubewarden stack",a={id:"howtos/production-deployments",title:"Configuring Kubewarden stack for production",description:"Configuring Kubewarden stack for production",source:"@site/versioned_docs/version-1.16/howtos/production-deployments.md",sourceDirName:"howtos",slug:"/howtos/production-deployments",permalink:"/howtos/production-deployments",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.16/howtos/production-deployments.md",tags:[],version:"1.16",lastUpdatedAt:1727171198e3,frontMatter:{sidebar_label:"Production deployments",title:"Configuring Kubewarden stack for production",description:"Configuring Kubewarden stack for production",keywords:["kubewarden","kubernetes","policyservers","production","poddisruptionbudget","affinity","limits","tolerations"],"doc-persona":["kubewarden-operator","kubewarden-integrator"],"doc-type":["howto"],"doc-topic":["operator-manual","policy-servers","production","poddisruptionbudget","affinity","limits","tolerations"]},sidebar:"docs",previous:{title:"Suggesting doc improvements",permalink:"/howtos/contribution-guide/suggesting-an-improvement"},next:{title:"Custom Resources Definitions (CRD)",permalink:"/reference/CRDs"}},d={},c=[{value:"Tolerations",id:"tolerations",level:2},{value:"Affinity/Anti-Affinity",id:"affinityanti-affinity",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configuring-tolerations-and-affinityanti-affinity-for-the-kubewarden-stack",children:"Configuring Tolerations and Affinity/Anti-Affinity for the Kubewarden stack"})}),"\n",(0,o.jsx)(n.p,{children:"Kubewarden provides features for reliability and correct\nscheduling of its components in a Kubernetes cluster."}),"\n",(0,o.jsxs)(n.p,{children:["Starting from version\n1.15 of the Kubewarden Helm charts, two new fields, ",(0,o.jsx)(n.code,{children:"tolerations"})," and\n",(0,o.jsx)(n.code,{children:"affinity"}),", are introduced under the ",(0,o.jsx)(n.code,{children:"global"})," value. These fields allow\nusers to define Kubernetes tolerations and affinity/anti-affinity settings for\nthe Kubewarden stack, including the controller deployment, audit scanner\ncronjob, and the PolicyServer custom resource."]}),"\n",(0,o.jsx)(n.h2,{id:"tolerations",children:"Tolerations"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"tolerations"})," field is an array where users can specify Kubernetes\ntolerations for the Kubewarden components. Tolerations allow pods to be\nscheduled on nodes with matching taints. This is useful for managing where pods\ncan be scheduled, especially in scenarios involving node maintenance, dedicated\nworkloads, or specific hardware requirements:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'global:\n  tolerations:\n    - key: "key1"\n      operator: "Equal"\n      value: "value1"\n      effect: "NoSchedule"\n    - key: "key2"\n      operator: "Equal"\n      value: "value2"\n      effect: "NoExecute"\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this example, the tolerations defined are applied to the controller\ndeployment, audit scanner cronjob, and the PolicyServer custom resource."}),"\n",(0,o.jsx)(n.h2,{id:"affinityanti-affinity",children:"Affinity/Anti-Affinity"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"affinity"})," field allows users to define Kubernetes affinity and\nanti-affinity rules for the Kubewarden components. Affinity rules constrain\npods to specific nodes, while anti-affinity rules prevent pods from being\nscheduled on certain nodes or in close proximity to other pods. These settings\nare useful for ensuring high availability, fault tolerance, and optimized\nresource usage in a cluster."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"global:\n  affinity:\n    podAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n      - labelSelector:\n          matchExpressions:\n          - key: security\n            operator: In\n            values:\n            - S1\n        topologyKey: topology.kubernetes.io/zone\n    podAntiAffinity:\n      preferredDuringSchedulingIgnoredDuringExecution:\n      - weight: 100\n        podAffinityTerm:\n          labelSelector:\n            matchExpressions:\n            - key: security\n              operator: In\n              values:\n              - S2\n          topologyKey: topology.kubernetes.io/zone\n    nodeAffinity:\n      requiredDuringSchedulingIgnoredDuringExecution:\n        nodeSelectorTerms:\n        - matchExpressions:\n          - key: kubernetes.io/os\n            operator: In\n            values:\n            - linux\n      preferredDuringSchedulingIgnoredDuringExecution:\n      - weight: 1\n        preference:\n          matchExpressions:\n          - key: label-1\n            operator: In\n            values:\n            - key-1\n      - weight: 50\n        preference:\n          matchExpressions:\n          - key: label-2\n            operator: In\n            values:\n            - key-2\n"})}),"\n",(0,o.jsx)(n.p,{children:"In this example, the affinity rules will be applied to the controller\ndeployment, audit scanner cronjob, and the PolicyServer custom resource."}),"\n",(0,o.jsxs)(n.p,{children:["The previous affinity configuration available in the ",(0,o.jsx)(n.code,{children:"kubewarden-default"})," Helm\nchart, which was used to define the affinity configuration for the PolicyServer\nonly, has been removed in favor of the global ",(0,o.jsx)(n.code,{children:"affinity"})," field. This change\nsimplifies the configuration process by providing a single approach to\ndefining affinity and anti-affinity rules for all Kubewarden components."]}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsxs)(n.mdxAdmonitionTitle,{children:["The old ",(0,o.jsx)(n.code,{children:"affinity"})," configuration in the ",(0,o.jsx)(n.code,{children:"kubewarden-default"})," Helm"]}),(0,o.jsxs)(n.p,{children:["chart has been removed. Users should now use the\n",(0,o.jsx)(n.code,{children:"global.affinity"})," field to configure affinity and anti-affinity settings for\nthe entire Kubewarden stack."]})]}),"\n",(0,o.jsxs)(n.p,{children:["By using the ",(0,o.jsx)(n.code,{children:"tolerations"})," and ",(0,o.jsx)(n.code,{children:"affinity"})," fields, operators can fine-tune\nthe scheduling and reliability of the Kubewarden stack to meet their specific\ndeployment needs and constraints. For more details on the exact fields and\ntheir configurations, refer to the ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/",children:"Kubernetes documentation on Taints and\nTolerations"}),"\nand ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity",children:"Affinity and\nAnti-Affinity"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For more information about production configuration for PolicyServers, refer to\nthe ",(0,o.jsx)(n.a,{href:"/next/howtos/policy-servers/production-deployments",children:"policy server documentaiton"})," guide."]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var o=i(67294);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);