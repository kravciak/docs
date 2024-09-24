"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[97493],{72434:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=t(85893),r=t(11151);const n={sidebar_label:"Custom Certificate Authorities",title:"Custom certificate authorities",description:"Using custom certificate authorities with Kubewarden.",keywords:["kubewarden","kubernetes","custom certificate authorities"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["distributing-policies","custom-certificate-authorities"]},o=void 0,c={id:"distributing-policies/custom-certificate-authorities",title:"Custom certificate authorities",description:"Using custom certificate authorities with Kubewarden.",source:"@site/versioned_docs/version-1.10/distributing-policies/custom-certificate-authorities.md",sourceDirName:"distributing-policies",slug:"/distributing-policies/custom-certificate-authorities",permalink:"/1.10/distributing-policies/custom-certificate-authorities",draft:!1,unlisted:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/versioned_docs/version-1.10/distributing-policies/custom-certificate-authorities.md",tags:[],version:"1.10",lastUpdatedAt:1727171198e3,frontMatter:{sidebar_label:"Custom Certificate Authorities",title:"Custom certificate authorities",description:"Using custom certificate authorities with Kubewarden.",keywords:["kubewarden","kubernetes","custom certificate authorities"],"doc-persona":["kubewarden-user","kubewarden-operator","kubewarden-policy-developer","kubewarden-distributor","kubewarden-integrator"],"doc-type":["explanation"],"doc-topic":["distributing-policies","custom-certificate-authorities"]},sidebar:"docs",previous:{title:"Secure supply chain",permalink:"/1.10/distributing-policies/secure-supply-chain"},next:{title:"Operator Manual",permalink:"/1.10/operator-manual/intro"}},a={},l=[{value:"The <code>sources.yaml</code> file",id:"the-sourcesyaml-file",level:2},{value:"Insecure sources",id:"insecure-sources",level:3},{value:"Source authorities",id:"source-authorities",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["With both of ",(0,s.jsx)(i.code,{children:"kwctl"})," and ",(0,s.jsx)(i.code,{children:"policy-server"}),"\nyou can pull policies from Open Container Initiative (OCI) registries and HTTP servers.\nYou can only push policies to OCI registries.\nBy default, HTTPS is used with host TLS verification for this."]}),"\n",(0,s.jsxs)(i.p,{children:["The system's certificate authority (CA) store is used to\nvalidate the trusted chain of certificates from the OCI registry.\nIn a standard Kubewarden installation, the ",(0,s.jsx)(i.code,{children:"policy-server"})," uses the\nCA store shipped with its Linux container.\nOn the client side, ",(0,s.jsx)(i.code,{children:"kwctl"})," uses your operating system CA store."]}),"\n",(0,s.jsxs)(i.p,{children:["If you are using the\n",(0,s.jsx)(i.a,{href:"https://github.com/kubewarden/kubewarden-controller",children:"Kubewarden Controller"}),",\nyou can configure the PolicyServer via its\n",(0,s.jsxs)(i.a,{href:"/1.10/operator-manual/policy-servers/custom-cas",children:[(0,s.jsx)(i.code,{children:"spec"})," fields"]}),"."]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["The default behavior of ",(0,s.jsx)(i.code,{children:"kwctl"})," and ",(0,s.jsx)(i.code,{children:"policy-server"})," enforces HTTPS with trusted certificates matching the system CA store.\nYou can interact with registries using untrusted certificates or even without TLS, by using the ",(0,s.jsx)(i.code,{children:"insecure_sources"})," setting.\nClearly, it's not for production environments."]})}),"\n",(0,s.jsxs)(i.h2,{id:"the-sourcesyaml-file",children:["The ",(0,s.jsx)(i.code,{children:"sources.yaml"})," file"]}),"\n",(0,s.jsxs)(i.p,{children:["You can tune the push-pull behavior of ",(0,s.jsx)(i.code,{children:"kwctl"})," and ",(0,s.jsx)(i.code,{children:"policy-server"})," using the ",(0,s.jsx)(i.code,{children:"sources.yaml"})," file."]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"--sources-path"})," argument to both tools specifies the file."]}),"\n",(0,s.jsxs)(i.p,{children:["The command ",(0,s.jsx)(i.code,{children:"kwctl"})," tries to load the ",(0,s.jsx)(i.code,{children:"sources.yaml"})," file from these folders if the ",(0,s.jsx)(i.code,{children:"--sources-path"})," argument is omitted:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Linux: ",(0,s.jsx)(i.code,{children:"$HOME/.config/kubewarden/sources.yaml"})]}),"\n",(0,s.jsxs)(i.li,{children:["Mac: ",(0,s.jsx)(i.code,{children:"$HOME/Library/Application Support/io.kubewarden.kubewarden/sources.yaml"})]}),"\n",(0,s.jsxs)(i.li,{children:["Windows: ",(0,s.jsx)(i.code,{children:"$HOME\\AppData\\Roaming\\kubewarden\\config\\sources.yaml"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Its structure is as follows:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:'insecure_sources:\n  - "registry-dev.example.com"\n  - "registry-dev2.example.com:5500"\nsource_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n  "registry-pre2.example.com:5500":\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            ca-pre2 PEM cert\n            -----END CERTIFICATE-----\n'})}),"\n",(0,s.jsxs)(i.p,{children:["This file is in either YAML or JSON format.\nAll keys are optional, so the following is a valid ",(0,s.jsx)(i.code,{children:"sources.yaml"})," file:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:'insecure_sources: ["dev.registry.example.com"]\n'})}),"\n",(0,s.jsx)(i.p,{children:"As is:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n    "source_authorities": {\n        "host.k3d.internal:5000": [\n            {"type": "Data","data":"pem cert 1"},\n            {"type": "Data","data":"pem cert 2"}\n        ]\n    }\n}\n'})}),"\n",(0,s.jsx)(i.h3,{id:"insecure-sources",children:"Insecure sources"}),"\n",(0,s.jsxs)(i.p,{children:["Hosts in the ",(0,s.jsx)(i.code,{children:"insecure_sources"})," section behave differently to those not listed."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Hosts not listed, try:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"to connect using HTTPS, verifying the server identity"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"If the connection fails, then the operation stops."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Hosts listed in ",(0,s.jsx)(i.code,{children:"insecure_sources"}),", try in order:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"to connect using HTTPS verifying the server identity"}),"\n",(0,s.jsx)(i.li,{children:"to connect using HTTPS, skipping host verification"}),"\n",(0,s.jsx)(i.li,{children:"to connect using HTTP"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The operation stops if all fail."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["It's usually fine to use ",(0,s.jsx)(i.code,{children:"insecure_sources"})," when using local registries or\nHTTP servers for development.\nIt avoids the burden of managing certificates.\nClearly, it's not for production use."]})}),"\n",(0,s.jsx)(i.h3,{id:"source-authorities",children:"Source authorities"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"source_authorities"})," section contains URIs and CA certificates.\nIt forms a certificate chain for that URI.\nIt's used to verify the identity of OCI registries and HTTPS servers."]}),"\n",(0,s.jsxs)(i.p,{children:["These certificates are encoded in either PEM or DER format.\nYou specify DER format certificates as path to a file containing the certificate.\nIn PEM format you specify either a path to the certificate file, or a string with the actual certificate.\nYou specify both with a ",(0,s.jsx)(i.code,{children:"type"})," key:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:'source_authorities:\n  "registry-pre.example.com":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-1.pem\n    - type: Path\n      path: /opt/example.com/pki/ca-pre1-2.der\n    - type: Data\n      data: |\n            -----BEGIN CERTIFICATE-----\n            A string with the ca-pre1-3 PEM cert\n            -----END CERTIFICATE-----\n  "registry-pre2.example.com:5500":\n    - type: Path\n      path: /opt/example.com/pki/ca-pre2-1.der\n'})})]})}function u(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>c,a:()=>o});var s=t(67294);const r={},n=s.createContext(r);function o(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);