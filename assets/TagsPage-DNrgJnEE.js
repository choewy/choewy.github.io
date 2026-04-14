import{_ as e,f as t,h as n,o as r,p as i,t as a,u as o}from"./core-DdVKYtvj.js";var s=n();function c({tag:t}){return(0,s.jsx)(`li`,{children:(0,s.jsxs)(e,{to:r.toTag(t.id),className:`
          inline-flex items-center min-h-9.5 px-3.5 py-2
          rounded-full border border-(--vp-c-bg-soft)
          bg-(--vp-c-bg-soft) shadow-(--vp-shadow-2)
          text-sm font-medium text-(--vp-c-text-1)
          transition-colors duration-200
          hover:border-(--vp-c-brand-1)
          hover:text-(--vp-c-brand-1)
        `,children:[(0,s.jsxs)(`span`,{"aria-hidden":`true`,children:[`#`,t.name,` `,t.count]}),(0,s.jsxs)(`span`,{className:`sr-only`,children:[`View `,t.count,` posts tagged with `,t.name]})]})})}function l({tags:e}){return e.length===0?(0,s.jsx)(`p`,{className:`text-sm font-medium text-(--vp-c-text-2)`,children:`No tags yet.`}):(0,s.jsx)(`ul`,{className:`m-0 flex list-none flex-wrap gap-3 p-0`,children:e.map(e=>(0,s.jsx)(c,{tag:e},e.id))})}function u(){let e=a.getAll(),n=e.length;return(0,s.jsxs)(o,{type:`catalog`,children:[(0,s.jsx)(i,{children:`All Tags`}),(0,s.jsx)(t,{total:n,start:+(n>0),end:n,label:`tags`}),(0,s.jsx)(l,{tags:e})]})}export{u as default};