(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{48:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},49:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},50:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},51:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},52:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},53:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(48),r=c.n(a),m=c(1),j=function(e){return Object(m.jsxs)("figure",{className:r.a.quote,children:[Object(m.jsx)("p",{children:e.text}),Object(m.jsx)("figcaption",{children:e.author})]})},i=c(40),d=c(49),u=c.n(d),l=c(36),b=c(37),x=c(15),O=c(50),h=c.n(O),f=function(e){var t=Object(n.useRef)(),c=Object(l.a)(b.a),s=c.sendRequest,o=c.status,a=c.error,r=e.onAddedComment,j=e.quoteId;Object(n.useEffect)((function(){return"completed"!==o||a||r(),function(){}}),[o,a,r]);return Object(m.jsxs)("form",{className:h.a.form,onSubmit:function(e){e.preventDefault();var c=t.current.value;s({commentData:c,quoteId:j})},children:["pending"===o&&Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(x.a,{})}),Object(m.jsxs)("div",{className:h.a.control,children:[Object(m.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(m.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(m.jsx)("div",{className:h.a.actions,children:Object(m.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=c(51),_=c.n(p),N=function(e){return Object(m.jsx)("li",{className:_.a.item,children:Object(m.jsx)("p",{children:e.text})})},v=c(52),C=c.n(v),g=function(e){return Object(m.jsx)("ul",{className:C.a.comments,children:e.comments.map((function(e){return Object(m.jsx)(N,{text:e.text},e.id)}))})},q=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),o=c[0],a=c[1],r=Object(s.j)().quoteId,j=Object(l.a)(b.c),d=j.sendRequest,O=j.status,h=j.data;Object(n.useEffect)((function(){d(r)}),[r,d]);var p,_=Object(n.useCallback)((function(){d(r)}),[r,d]);return"pending"===O&&(p=Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(x.a,{})})),"completed"===O&&h&&h.length>0&&(p=Object(m.jsx)(g,{comments:h})),"completed"!==O||h&&0!==h.length||(p=Object(m.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(m.jsxs)("section",{className:u.a.comments,children:[Object(m.jsx)("h2",{children:"User Comments"}),!o&&Object(m.jsx)("button",{className:"btn",onClick:function(){a(!0)},children:"Add a Comment"}),o&&Object(m.jsx)(f,{quoteId:r,onAddedComment:_}),p]})};t.default=function(e){var t=Object(s.k)(),c=Object(s.j)().quoteId,a=Object(l.a)(b.e),r=a.sendRequest,i=a.status,d=a.data,u=a.error;return Object(n.useEffect)((function(){r(c)}),[r,c]),"pending"===i?Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(x.a,{})}):u?Object(m.jsx)("p",{className:"centered",children:u}):d?Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)(j,{text:d.text,author:d.author}),Object(m.jsx)(s.c,{path:t.path,exact:!0,children:Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(o.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(m.jsx)(s.c,{path:"".concat(t.path,"/comments"),children:Object(m.jsx)(q,{})})]}):Object(m.jsx)("p",{children:"No Quote found!"})}}}]);
//# sourceMappingURL=4.cdb9d696.chunk.js.map