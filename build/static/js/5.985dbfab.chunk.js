(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{45:function(e,t,c){e.exports={item:"QuoteItem_item__2dOvb"}},46:function(e,t,c){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},47:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},54:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(2),i=c(8),r=c(45),a=c.n(r),u=c(1),j=function(e){var t=Object(o.k)();return Object(u.jsxs)("li",{className:a.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:e.text})}),Object(u.jsx)("figcaption",{children:e.author})]}),Object(u.jsx)(i.b,{to:"".concat(t.url,"/").concat(e.id),className:"btn",children:"View Fullscreen"})]})},d=c(46),l=c.n(d),b=function(e){var t,c,s=Object(o.h)(),i=Object(o.i)(),r="asc"===new URLSearchParams(i.search).get("sort"),a=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("div",{className:l.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){s.push({pathname:i.pathname,search:"?sort=".concat(r?"desc":"asc")})},children:["Sort ",r?"Decending":"Ascending"]})}),Object(u.jsx)("ul",{className:l.a.list,children:a.map((function(e){return Object(u.jsx)(j,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=c(15),O=c(36),x=c(37),p=c(47),m=c.n(p),f=function(){return Object(u.jsxs)("div",{className:m.a.noquotes,children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(i.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})},g=s.a.lazy((function(){return c.e(4).then(c.bind(null,53))}));t.default=function(e){var t=Object(o.k)(),c=Object(O.a)(x.d),s=c.sendRequest,i=c.status,r=c.data,a=c.error;return console.log({loadedQuotes:r}),Object(n.useEffect)((function(){console.log("ALL QUOTE RUNNING"),s()}),[s]),"pending"===i||null===r?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(h.a,{})}):a?Object(u.jsx)("p",{className:"centered focused",children:a}):"completed"!==i||r&&0!==r.length?Object(u.jsx)(n.Fragment,{children:Object(u.jsxs)(o.e,{children:[Object(u.jsx)(o.c,{path:"".concat(t.path,"/:quoteId"),children:Object(u.jsx)(g,{})}),Object(u.jsx)(o.c,{path:t.path,children:Object(u.jsx)(b,{quotes:r})})]})}):Object(u.jsx)(f,{})}}}]);
//# sourceMappingURL=5.985dbfab.chunk.js.map