(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{43:function(e,t,n){e.exports={card:"Card_card__1m44e"}},44:function(e,t,n){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},55:function(e,t,n){"use strict";n.r(t);var c=n(38),r=n.n(c),o=n(39),a=n(0),s=n(2),u=n(40),i=n(43),l=n.n(i),d=n(1),j=function(e){return Object(d.jsx)("div",{className:l.a.card,children:e.children})},b=n(15),f=n(44),h=n.n(f),x=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useRef)(),i=Object(a.useRef)();return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(s.a,{when:c,message:function(e){return"Are you sure yo want to leave? All your entered data will be lost"}}),Object(d.jsx)(j,{children:Object(d.jsxs)("form",{onFocus:function(){r(!0)},className:h.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,c=i.current.value;e.onAddQuote({author:n,text:c})},children:[e.isLoading&&Object(d.jsx)("div",{className:h.a.loading,children:Object(d.jsx)(b.a,{})}),Object(d.jsxs)("div",{className:h.a.control,children:[Object(d.jsx)("label",{htmlFor:"author",children:"Author"}),Object(d.jsx)("input",{type:"text",id:"author",ref:o})]}),Object(d.jsxs)("div",{className:h.a.control,children:[Object(d.jsx)("label",{htmlFor:"text",children:"Text"}),Object(d.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(d.jsx)("div",{className:h.a.actions,children:Object(d.jsx)("button",{onClick:function(){r(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=n(36),O=n(37);t.default=function(e){var t=Object(m.a)(O.b),n=t.sendRequest,c=t.status,u=Object(s.h)();Object(a.useEffect)((function(){"completed"===c&&u.push("/quotes")}),[c,u]);var i=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,n(t);case 3:u.push("/quotes");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(x,{isLoading:"pending"===c,onAddQuote:i})}}}]);
//# sourceMappingURL=6.4ac06aac.chunk.js.map