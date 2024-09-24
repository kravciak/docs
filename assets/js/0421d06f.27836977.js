"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[39331],{73461:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(85893),o=n(11151);const r={sidebar_label:"Rego",title:"Rego",description:"Writing Kubewarden policies using Rego.",keywords:["kubewarden","kubernetes","writing policies","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","introduction"]},s=void 0,a={id:"tutorials/writing-policies/rego/intro-rego",title:"Rego",description:"Writing Kubewarden policies using Rego.",source:"@site/versioned_docs/version-1.16/tutorials/writing-policies/rego/01-intro-rego.md",sourceDirName:"tutorials/writing-policies/rego",slug:"/tutorials/writing-policies/rego/intro-rego",permalink:"/tutorials/writing-policies/rego/intro-rego",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.16/tutorials/writing-policies/rego/01-intro-rego.md",tags:[],version:"1.16",lastUpdatedAt:1727171198e3,sidebarPosition:1,frontMatter:{sidebar_label:"Rego",title:"Rego",description:"Writing Kubewarden policies using Rego.",keywords:["kubewarden","kubernetes","writing policies","rego"],"doc-persona":["kubewarden-policy-developer"],"doc-type":["tutorial"],"doc-topic":["writing-policies","rego","introduction"]},sidebar:"docs",previous:{title:"Raw policies",permalink:"/tutorials/writing-policies/go/raw-policies"},next:{title:"Builtin Support",permalink:"/tutorials/writing-policies/rego/builtin-support"}},l={},c=[{value:"One language, two frameworks",id:"one-language-two-frameworks",level:2},{value:"Open Policy Agent (OPA)",id:"open-policy-agent-opa",level:3},{value:"Gatekeeper",id:"gatekeeper",level:3},{value:"Looking at the differences",id:"looking-at-the-differences",level:2},{value:"Entry point",id:"entry-point",level:2},{value:"Current limitations",id:"current-limitations",level:2},{value:"Context-aware policies",id:"context-aware-policies",level:3},{value:"Mutating policies",id:"mutating-policies",level:3}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components},{Head:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{children:(0,t.jsx)("link",{rel:"canonical",href:"https://docs.kubewarden.io/tutorials/writing-policies/rego/intro-rego"})}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.p,{children:"Rego support is available from these releases:"}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"kwctl: v0.2.0"}),"\n",(0,t.jsx)(i.li,{children:"policy-server: v0.2.0"}),"\n"]}),(0,t.jsx)(i.p,{children:"Rego policies support context aware data from the Kubewarden 1.9 release."})]}),"\n",(0,t.jsxs)(i.p,{children:["The Rego language is a domain specific language to enable policies as code.\n",(0,t.jsx)(i.a,{href:"https://www.openpolicyagent.org/docs/latest/policy-language/",children:"Rego"}),"\nis a language inspired by ",(0,t.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Datalog",children:"Datalog"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"There are two ways of writing Rego policies to implement policies as code in Kubernetes,\nOpen Policy Agent and Gatekeeper."}),"\n",(0,t.jsx)(i.p,{children:"The next couple of sections shows how the two frameworks are different,\neven though using the same language.\nIf you're more interested in the Kubewarden implementation,\nyou can directly visit the framework-specific documentation linked below."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/tutorials/writing-policies/rego/open-policy-agent/intro",children:"Open Policy Agent"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/tutorials/writing-policies/rego/gatekeeper/intro",children:"Gatekeeper"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"one-language-two-frameworks",children:"One language, two frameworks"}),"\n",(0,t.jsx)(i.h3,{id:"open-policy-agent-opa",children:"Open Policy Agent (OPA)"}),"\n",(0,t.jsx)(i.p,{children:"Open Policy Agent is a project that allowing you to implement policies as code in any project.\nYou can use OPA for any policy based check your application needs."}),"\n",(0,t.jsx)(i.p,{children:"In this context, writing policies for Kubernetes is simply exercising OPA.\nBy using Kubernetes admission webhooks,\nit's possible to evaluate requests using OPA,\nwhich executes the policies written in Rego."}),"\n",(0,t.jsxs)(i.p,{children:["OPA has optional integration with Kubernetes through its ",(0,t.jsx)(i.code,{children:"kube-mgmt"})," sidecar.\nWhen deployed on Kubernetes, and with the OPA server evaluating the Rego policies,\nit's able to replicate the configured Kubernetes resources into Rego.\nSo, those Kubernetes resources are visible to all policies.\nWith OPA you can define policies inside Kubernetes' ConfigMap objects.\nYou can read more about it on\n",(0,t.jsx)(i.a,{href:"https://github.com/open-policy-agent/kube-mgmt",children:"its project page"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"gatekeeper",children:"Gatekeeper"}),"\n",(0,t.jsx)(i.p,{children:"Gatekeeper focuses, only, on use in Kubernetes,\nand takes advantage of that as much as possible,\nmaking Kubernetes workflows easier than OPA in certain cases."}),"\n",(0,t.jsx)(i.h2,{id:"looking-at-the-differences",children:"Looking at the differences"}),"\n",(0,t.jsx)(i.p,{children:"Both OPA and Gatekeeper policies use Rego to describe policies as code.\nEach solution has differences when it comes to writing policies in Rego,\nas shown in the next sections."}),"\n",(0,t.jsx)(i.h2,{id:"entry-point",children:"Entry point"}),"\n",(0,t.jsx)(i.p,{children:"The entry point is the name of a rule within a package,\nand is the rule invoked by the runtime when the policy runs."}),"\n",(0,t.jsx)(i.h2,{id:"current-limitations",children:"Current limitations"}),"\n",(0,t.jsx)(i.h3,{id:"context-aware-policies",children:"Context-aware policies"}),"\n",(0,t.jsxs)(i.p,{children:["Context-aware policies are policies that don't evaluate the input request in isolation.\nThey take other factors into account to take a decision.\nFor example, a policy that evaluates namespaced resources,\nand uses an annotation,\non the parent namespace to configure something in the policy.\nAnother example would be a policy that evaluates ",(0,t.jsx)(i.code,{children:"Ingress"})," resources,\nbut to make a decision also has the list of the existing ",(0,t.jsx)(i.code,{children:"Ingress"})," resources."]}),"\n",(0,t.jsx)(i.p,{children:"The idea of context-aware policies can also extend to custom resources,\nso your policy might want to evaluate a request based on currently used custom resources as well."}),"\n",(0,t.jsx)(i.p,{children:"Both OPA and Gatekeeper support context-aware policies,\nstarting from the Kubewarden 1.9 release."}),"\n",(0,t.jsxs)(i.p,{children:["More details about context aware policies are\n",(0,t.jsx)(i.a,{href:"/reference/spec/context-aware-policies",children:"here"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"mutating-policies",children:"Mutating policies"}),"\n",(0,t.jsx)(i.p,{children:"Gatekeeper has support for mutating policies,\nbut Kubewarden hasn't yet implemented mutating policies with Gatekeeper compatibility.\nYou can use policies that use the Kubewarden SDK to write mutating policies,\nbut currently, you can't run Gatekeeper mutating policies in Kubewarden."})]})}function u(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>s});var t=n(67294);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);