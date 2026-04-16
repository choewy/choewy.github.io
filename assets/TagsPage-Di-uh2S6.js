import{b as e,c as t,g as n,h as r,l as i,p as a,t as o,u as s,v as c}from"./core-CjxZbhZn.js";var l=c();function u({tag:n}){return(0,l.jsx)(`li`,{children:(0,l.jsxs)(e,{to:t.toTag(n.id),className:`
          inline-flex items-center min-h-9.5 px-3.5 py-2
          rounded-full border border-(--vp-c-bg-soft)
          bg-(--vp-c-bg-soft) shadow-(--vp-shadow-2)
          text-sm font-medium text-(--vp-c-text-1)
          transition-colors duration-200
          hover:border-(--vp-c-brand-1)
          hover:text-(--vp-c-brand-1)
        `,children:[(0,l.jsxs)(`span`,{"aria-hidden":`true`,children:[`#`,n.name,` `,n.count]}),(0,l.jsxs)(`span`,{className:`sr-only`,children:[`View `,n.count,` posts tagged with `,n.name]})]})})}function d({tags:e}){return e.length===0?(0,l.jsx)(`p`,{className:`text-sm font-medium text-(--vp-c-text-2)`,children:`No tags yet.`}):(0,l.jsx)(`ul`,{className:`m-0 flex list-none flex-wrap gap-3 p-0`,children:e.map(e=>(0,l.jsx)(u,{tag:e},e.id))})}function f(){let e=o.getAll(),t=e.length,c=+(t>0),u=t;return(0,l.jsxs)(a,{type:`catalog`,children:[(0,l.jsx)(i,{title:`태그 목록`,description:`총 ${t}개의 태그를 확인할 수 있습니다.`,keywords:[`태그`,`카테고리`,...s.site.keywords],jsonLd:{"@context":`https://schema.org`,"@type":`CollectionPage`,name:`태그 목록`,description:`총 ${t}개의 태그를 확인할 수 있습니다.`,inLanguage:s.site.language}}),(0,l.jsx)(n,{children:`All Tags`}),(0,l.jsx)(r,{total:t,start:c,end:u,label:`tags`}),(0,l.jsx)(d,{tags:e})]})}export{f as default};