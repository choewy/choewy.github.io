import{_ as e,c as t,f as n,h as r,m as i,t as a,y as o}from"./core-W7wBLT5p.js";var s=e();function c({tag:e}){return(0,s.jsx)(`li`,{children:(0,s.jsxs)(o,{to:t.toTag(e.id),className:`
          inline-flex items-center min-h-9.5 px-3.5 py-2
          rounded-full border border-(--vp-c-bg-soft)
          bg-(--vp-c-bg-soft) shadow-(--vp-shadow-2)
          text-sm font-medium text-(--vp-c-text-1)
          transition-colors duration-200
          hover:border-(--vp-c-brand-1)
          hover:text-(--vp-c-brand-1)
        `,children:[(0,s.jsxs)(`span`,{"aria-hidden":`true`,children:[`#`,e.name,` `,e.count]}),(0,s.jsxs)(`span`,{className:`sr-only`,children:[`View `,e.count,` posts tagged with `,e.name]})]})})}function l({tags:e}){return e.length===0?(0,s.jsx)(`p`,{className:`text-sm font-medium text-(--vp-c-text-2)`,children:`No tags yet.`}):(0,s.jsx)(`ul`,{className:`m-0 flex list-none flex-wrap gap-3 p-0`,children:e.map(e=>(0,s.jsx)(c,{tag:e},e.id))})}function u(){let e=a.getAll(),t=e.length;return(0,s.jsxs)(n,{type:`catalog`,children:[(0,s.jsx)(r,{children:`All Tags`}),(0,s.jsx)(i,{total:t,start:+(t>0),end:t,label:`tags`}),(0,s.jsx)(l,{tags:e})]})}export{u as default};